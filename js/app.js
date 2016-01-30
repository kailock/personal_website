/**
 * Created by Kaitlin on 1/10/2016.
 */

var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider) {
    $stateProvider.state('about', {
        url:'/',
        templateUrl: 'templates/about.html',
        controller: 'AboutController'
    })
        .state('portfolio', {
        url:'/portfolio',
        templateUrl: 'templates/portfolio.html',
        controller: "PortfolioController"
    })
        .state('resume', {
            url:'/resume',
            templateUrl: 'templates/resume.html',
            controller: 'ResumeController'
        })
        .state('contact', {
            url:'/contact',
            templateUrl: 'templates/contact.html',
            controller: 'ContactController'
        })
})
    .controller('AboutController', function($scope) {

    })
    .controller('PortfolioController', function($scope, $http) {

    })
    .controller('ResumeController', function($scope) {

    })
    .controller('ContactController', function($scope) {

    });

//$(function () {
//    $('[data-toggle="popover"]').popover()
//    $('[data-toggle="tooltip"]').tooltip()
//});

$(function(){
    $('body').popover({ selector: '[data-toggle="popover"]' });
    $('a').popover({ selector: '[data-trigger="focus"]' });
});

//$('.btn')
//    .popover()
//    .click(function(e) {
//        e.preventDefault();
//        $(this).focus();
//    });

//$('[rel=tooltip]').tooltip();
//$(document).on('focus', '[rel=tooltip]', function () { $(this).tooltip('show'); });