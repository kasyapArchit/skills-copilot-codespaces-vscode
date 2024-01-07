function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'views/member.html',
        controller: 'MemberController',
        controllerAs: 'memberCtrl',
        bindToController: true,
        scope: {
            member: '='
        }
    };
}
