/**
 * Created by beebe on 3/14/2017.
 */
angular.module("directivePractice").directive("lessonHider",function(){

    return {
        templateUrl: 'lessonHider.html',
        restrict: 'E',
        scope: {
            dayAlert:"&",
            lesson: '='
        },
        controller: function( $scope, directiveServ ) {
            $scope.getSchedule = directiveServ.getSchedule();
        },
        link: function( scope, element, attributes ) {

            scope.getSchedule.then(function( response ) {
                scope.schedule = response.data;

                scope.schedule.forEach(function( scheduleDay ) {
                    if (scheduleDay.lesson === scope.lesson) {
                        scope.lessonDay = scheduleDay["weekday"];
                        element.css('text-decoration', 'line-through');
                        return;
                    }
                });

            });

        }
    }

});