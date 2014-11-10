from django.conf.urls import patterns, include, url
from monitor import views
from monitor.views import StackCheck


# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()


urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'stackcheck.views.home', name='home'),
    # url(r'^stackcheck/', include('stackcheck.foo.urls')),
    #url(r'^$', views.MonitorOpenStack.as_view(template_name='monitor/index.html'), name='index'),
    #url(r'^$', 'monitor.views.postdata', name='home'),
    url(r'^stackcheck/$', views.IndexPage.as_view(template_name='monitor/hello.html'), name='hello'),
    url(r'^$', views.StackCheck.as_view(), name='index'),
    url(r'^keystone', views.KeystoneCheck.as_view(), name='keystone'),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),
)
