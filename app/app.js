'use strict';

// Declare app level module which depends on views, and components
var mobile_python = angular.module('mobilePython', ['ui.router']);


    mobile_python.config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/");
    //
    // Now set up the states
    $stateProvider
        .state('camera', {
            url: "/",
            templateUrl: "camera/camera.html",
            controller: "CameraCtrl"
        })
        .state('display', {
            url: "/display",
            templateUrl: "display/display.html",
            controller: "DisplayCtrl"
        })

});
