angular.module('testing.components',[])
    .directive('helloWorld',function(){
        return {
            restrict:'ACE',
            template: '<span>Hello world </span>'
        }
    })

angular.module('testing',['testing.components']);