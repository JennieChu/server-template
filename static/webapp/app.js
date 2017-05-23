var feedApp = angular.module("feedApp", [
    "ngRoute",
    "baseServices"
]);

feedApp.config(function($routeProvider, $sceDelegateProvider) {
    $routeProvider
        .when('/feed', {
                templateUrl: 'feed_template.html',
                controller: 'FeedController'
        })
        .when('/item/:itemId', {
                templateUrl: 'item_template.html',
                controller: 'ItemController'
        })
        .otherwise({redirectTo: '/feed'});
        
    $sceDelegateProvider.resourceUrlWhitelist([
    // Allow same origin resource loads.
    'self'
  ]);
});

feedApp.controller("FeedController",
    ["$scope", "serverService",
    function($scope, serverService) {
        serverService.makeGetRequest("http://localhost:8080/feed", {})
            .success(function(data) {
                // TODO
            });
    }
]);