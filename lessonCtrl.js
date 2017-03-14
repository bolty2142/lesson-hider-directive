/**
 * Created by beebe on 3/14/2017.
 */
angular.module("directivePractice").controller("directiveCtrl",function($scope, directiveServ){
$scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];


$scope.announceDay = function(lesson,day){
    alert(lesson + " is active on " + day + ".")
}


})