# Create your views here.

from django.shortcuts import render
from django.views.generic import View, TemplateView
from django.http import HttpResponse
from django.utils import simplejson as json
from monitor.models import Ipdetail
from fabric.api import *
import commands
import logging
import psutil


#class MonitorOpenStack(TemplateView):
#    template_name = 'index.html'
#
#    #def get(self, request, *args, **kwargs):
#    #    commandw=commands.getoutput('ps aux|grep python')
#    #    test=psutil.net_connections()
#    #
#    #    #print string.capwords(commandw)
#    #    form='hello'
#    #
#    #    return HttpResponse(commandw,content_type='application/json')
#    #    #return render_to_response({'form': form})
#
class IndexPage(TemplateView):
    '''

    '''

    template_name = 'hello.html'

    def get(self, request):
        k = Ipdetail.objects.all()
        print len(k)
        for x in xrange(len(k)):
            y = Ipdetail.objects.get(id=x+1)
            if y.service_name == 'keystone':
                env.host_string = y.ip
                env.user = y.user_name
                env.password = y.password
                env.disable_known_hosts = 'True'
                env.warn_only = True
                keystatus = run('ps aux|grep -v grep|grep -o "keystone-all"')
                if keystatus == "":
                    print "Null"
                    l = "Inactive"
                else:
                    print "Active"
                    l = "Active"
            elif y.service_name == 'glance':
                env.host_string = y.ip
                env.user = y.user_name
                env.password = y.password
                env.disable_known_hosts = 'True'
                env.warn_only = True

            elif y.service_name == 'neutron':
                env.host_string = y.ip
                env.user = y.user_name
                env.password = y.password
                env.disable_known_hosts = 'True'
                env.warn_only = True

        return render(request, 'monitor/hello.html', {'data': k, 'keystatus': l})


class StackCheck(View):
    '''

    '''

    def get(self, request, *args):
        k = Ipdetail.objects.all()
        return render(request, 'monitor/index.html', {'data': k})

    def post(self, request):
        ret = request.body
        k = json.loads(ret)
        for i in ['keystone', 'glance', 'nova', 'neutron', 'horizon']:
            data = Ipdetail(env_name=k[0]['envname'], service_name=i, ip=k[0][i][0]['ip'], user_name=k[0][i][0]['user'], password=k[0][i][0]['password'], error_status=0, success_status=0)
            data.save()
            print "data Saved"
        return HttpResponse("Hello")


class KeystoneCheck(View):
    '''

    '''

    def get(self, request):
        m = Ipdetail.objects.get(id=1)
        print m.service_name
        env.host_string = "192.168.30.114"
        env.user = m.user_name
        env.password = 'p@ssw0rd'
        env.disable_known_hosts = 'True'
        env.warn_only = True
        keystatus = run('ps aux|grep -v grep|grep -o "keystone-all"')
        if keystatus == "":
            print "Null"
            l = "Inactive"
        else:
            print "Active"
            l = "Active"
        msqlstatus = run('ps aux|grep -v grep|grep -o "mysql.sock"')
        if msqlstatus == "":
            print "Null"
            msql = "Inactive"
        else:
            print "Active"
            msql = "Active"
        return HttpResponse(json.dumps({'status': l, 'msqlstatus': msql}))
