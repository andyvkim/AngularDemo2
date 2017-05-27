(function () {
    'use strict';

    angular
        .module('app')
        .controller('AngularDemoViewCtrl', AngularDemoViewCtrl);

    AngularDemoViewCtrl.$inject = ['$scope', '$location'];
    //scope is what connects my html page to the controller
    //location references what url I am on and also what url I want to go to upon an action ie clicking a button takes
    //you to a desired html page

    /* invoked as soon as it is rendered in the html view via the ng-controller annotation*/
    // scope gives access to controller from the page and vice versa

    function AngularDemoViewCtrl($scope, $location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'AngularDemoViewCtrl';

        // Variables Assigned here
        vm.Customer = {};

        // Switches
        vm.ShowUserInput = false;

        // Functions Get Assigned here
        vm.SubmitForm = submit;

        activate();

        function activate() {

       

        }

        function submit(customer) {
            vm.ShowUserInput = true;

        }

    }
})();
