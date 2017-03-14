/**
 * Created by beebe on 3/14/2017.
 */
angular.module("directivePractice").service("directiveServ",function($http){



    this.getSchedule = function (){
        return $http.get('schedule.json');
    }


})