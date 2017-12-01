require.config({
    waitSeconds: 200,
    baseUrl: '/ng',
    paths: {
        'angular': '../bower_components/angular/angular',
        'jquery': '../bower_components/jquery/dist/jquery',
        'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap',
        'ngResource': '../bower_components/angular-resource/angular-resource',
        'ngCookies': '../bower_components/angular-cookies/angular-cookies',
        'ngProgressLite': '../bower_components/ngprogress-lite/ngprogress-lite',
        'angular-loading-bar':'../bower_components/angular-loading-bar/build/loading-bar.min.js'
    },
    shim: {
        ngResource: {
            deps: ['angular'],
            exports: 'angular'
        },
        ngCookies: {
            deps: ['angular'],
            exports: 'angular'
        },
        ngProgress: {
            deps: ['angular'],
            exports: 'angular'
        },
         
        angular: {
            exports: 'angular'
        },
        bootstrap: {
            'deps': ['jquery']
        }
    }
});
require(['angular', 'jquery', 'bootstrap', 'modules/main.module'],
    function () {
        angular.bootstrap(document, ['app']);
    }
);
