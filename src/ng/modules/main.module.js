define(['angular', 'jquery', 'bootstrap', 'controllers/main.controller'], function (angular, jquery, bootstrap, controller) {
    angular.module('app', []).controller('mainController', controller);
});
