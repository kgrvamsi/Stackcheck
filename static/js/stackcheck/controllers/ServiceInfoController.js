function ServiceInfoController($scope, $timeout){

    $scope.keystoneService=function(){
        console.log("KeystoneService");
        var x = function(){
            $timeout(function() {
                $.ajax({
                    type : 'GET',
                    dataType : 'json',
                    contentType: "application/json; charset=utf-8",
                    url: '/keystone',
                    data: {},
                    success: function(data){
                        console.log(data);
                        var element=document.getElementById('kyservice')
                        element.innerHTML =data['status']
                        if (data['status'] == "Active"){
                            document.getElementById('kyservice').style.color = "Green";
                        }else{
                            document.getElementById('kyservice').style.color = "Red";
                        }
                        console.log(data['status'])
                        var element=document.getElementById('msqlservice')
                        element.innerHTML =data['msqlstatus']
                        if (data['msqlstatus'] == "Active"){
                        document.getElementById('msqlservice').style.color = "Green";
                            }else{
                            document.getElementById('msqlservice').style.color = "Red";
                        }
                        $('.progressck .circle:nth-of-type(' + 1 + ')').addClass('active');
                        console.log(data['msqlstatus'])

                    },
                    error : function(xhr, ajaxOptions, thrownError) {
                        alert( "Error: " + xhr.responseText + "\n" + thrownError );
                    }
                });
            }, 1000);

        }
        x();
    }



}