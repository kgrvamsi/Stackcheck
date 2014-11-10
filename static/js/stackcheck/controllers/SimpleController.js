
function SimpleController($scope){

    $scope.testing=['rajesh','suresh','ramesh','vinyesh'];

    $scope.loadConfigPanel=function(){
        console.log('Called to add a entry to the array');
//        $scope.testing.push($scope.env.name);
       // document.body.innerHTML += '';
        //window.alert("Hello"+document.getElementById("test").value);

         $('</br>'+
            '</br>'+
             '<div class="container">'+

                '<div class="panel panel-default" style="margin-left: -40px; margin-right: 15px;width:105%">'+
                    '<div class="panel-heading">'+
                        '<h4>'+document.getElementById("envname").value+'&nbsp&nbsp</h4>'+
                    '</div>'+
                    '<div class="panel-body">'+
                      '<div class="well well-lg">'+
                        '<div class="row">'+
                            '<div class="container">'+
                                '<div class="col-md-4">'+
                                    '<div class="panel panel-success">'+
                                        '<div class="panel-heading">'+
                                            '<h4>Keystone</h4>'+
                                        '</div>'+
                                        '<div class="panel-body text-center">'+
                                            '<ul class="list-group list-group-flush text-center">'+
                                                '<li class="list-group-item"><h4>IP:</h4><input class="form-control" id="keyip" placeholder="Ip"></li>'+
                                                '<li class="list-group-item"><h4>user:</h4><input class="form-control" id="keyuser" placeholder="User"></li>'+
                                                '<li class="list-group-item"><h4>password:</h4><input class="form-control" id="keypasswd" placeholder="Password" type="password"></li>'+
                                            '</ul>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="col-md-4">'+
                                    '<div class="panel panel-success">'+
                                        '<div class="panel-heading">'+
                                            '<h4>Nova</h4>'+
                                        '</div>'+
                                        '<div class="panel-body text-center">'+
                                            '<ul class="list-group list-group-flush text-center">'+
                                                '<li class="list-group-item"><h4>IP:</h4><input class="form-control" id="novaip" placeholder="Ip"></li>'+
                                                '<li class="list-group-item"><h4>user:</h4><input class="form-control" id="novauser" placeholder="User"></li>'+
                                                '<li class="list-group-item"><h4>password:</h4><input class="form-control" id="novapasswd" placeholder="Password" type="password"></li>'+
                                            '</ul>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="col-md-4">'+
                                    '<div class="panel panel-success">'+
                                        '<div class="panel-heading">'+
                                            '<h4>Neutron</h4>'+
                                        '</div>'+
                                        '<div class="panel-body text-center">'+
                                            '<ul class="list-group list-group-flush text-center">'+
                                                '<li class="list-group-item"><h4>IP:</h4><input class="form-control" id="neuip" placeholder="Ip"></li>'+
                                                '<li class="list-group-item"><h4>user:</h4><input class="form-control" id="neuuser" placeholder="User"></li>'+
                                                '<li class="list-group-item"><h4>password:</h4><input class="form-control" id="neupasswd" placeholder="Password" type="password"></li>'+
                                            '</ul>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="col-md-4">'+
                                    '<div class="panel panel-success">'+
                                        '<div class="panel-heading">'+
                                            '<h4>Glance</h4>'+
                                        '</div>'+
                                        '<div class="panel-body text-center">'+
                                            '<ul class="list-group list-group-flush text-center">'+
                                                '<li class="list-group-item"><h4>IP:</h4><input class="form-control" id="glanceip" placeholder="Ip"></li>'+
                                                '<li class="list-group-item"><h4>user:</h4><input class="form-control" id="glanceuser" placeholder="User"></li>'+
                                                '<li class="list-group-item"><h4>password:</h4><input class="form-control" id="glancepasswd" placeholder="Password" type="password"></li>'+
                                            '</ul>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="col-md-4">'+
                                    '<div class="panel panel-success">'+
                                        '<div class="panel-heading">'+
                                            '<h4>Horizon</h4>'+
                                        '</div>'+
                                        '<div class="panel-body text-center">'+
                                            '<ul class="list-group list-group-flush text-center">'+
                                                '<li class="list-group-item"><h4>IP:</h4><input class="form-control" id="horip" placeholder="Ip"></li>'+
                                                '<li class="list-group-item"><h4>user:</h4><input class="form-control" id="horuser" placeholder="User"></li>'+
                                                '<li class="list-group-item"><h4>password:</h4><input class="form-control" id="horpasswd" placeholder="Password" type="password"></li>'+
                                            '</ul>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
             '</div>'+
             '<div class="panel-footer">'+
             '<button data-ng-click="" class="btn btn-success">Add New Service </button>'+
             '</div>'+
             '</div>'+
         '</div>').appendTo('div#sdetails');

    }

    $scope.resetConfig=function(){
        $("div#sdetails").empty();
    }

    $scope.saveEnvName=function(){
        console.log("Ajax Call");
        var dat = [{ "envname":document.getElementById("envname").value,"keystone":[{"ip":document.getElementById("keyip").value,"user":document.getElementById("keyuser").value,"password":document.getElementById("keypasswd").value}],"horizon":[{"ip":document.getElementById("horip").value,"user":document.getElementById("horuser").value,"password":document.getElementById("horpasswd").value}],"glance":[{"ip":document.getElementById("glanceip").value,"user":document.getElementById("glanceuser").value,"password":document.getElementById("glancepasswd").value}],"nova":[{"ip":document.getElementById("novaip").value,"user":document.getElementById("novauser").value,"password":document.getElementById("novapasswd").value}],"neutron":[{"ip":document.getElementById("neuip").value,"user":document.getElementById("neuuser").value,"password":document.getElementById("neupasswd").value}]}]
        var test =[{"id": 1},{"id": 2},{"id": 3}];
        console.log(JSON.stringify(dat));
        $.ajax({
            type:"POST",
            url:"/",
            data: JSON.stringify(dat),
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            success: function(data) {
//                alert(data);
                //$("div#sdetails").empty();
            },
            error: function(ts) {
 //               alert(ts.responseText);
                window.location= "/stackcheck";
            }
        });
    }

    $scope.addNewService=function(){
        $('<hello-world></hello-world>').appendTo('div#sdetails');
    }

}

