cov19app.config(function($stateProvider,$urlRouterProvider)
                          { 
                            $urlRouterProvider.otherwise('/home');
                            $stateProvider.caseInsensitiveMatch=true;
                            $stateProvider
                             .state('home',{
                              url:'/home',
                              templateUrl:'/views/home.html',
                              controller:'homeCont'
                            })
                          $stateProvider
                             .state('about',{
                              url:'/about',
                              templateUrl:'/views/about.html'
                              
                          })
                         $stateProvider
                             .state('india',{
                              url:'/india',
                              templateUrl:'/views/india.html',
                              controller:'indiaCont'
                               
                          })
                           $stateProvider
                             .state('india-analytics',{
                              url:'/india-analytics',
                              templateUrl:'/views/india-analytics.html',
                               controller:'india-analyticsCont'
                               
                          });
                           $stateProvider
                             .state('world-analytics',{
                              url:'/world-analytics',
                              templateUrl:'/views/world-analytics.html'
                              
                               
                          });
                         });