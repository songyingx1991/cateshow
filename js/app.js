var myapp=angular.module("myapp",["ionic"]);
//配置路由
myapp.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    //andriod
    $ionicConfigProvider.platform.ios.tabs.style('standard');
    $ionicConfigProvider.platform.ios.tabs.position('bottom');
    $ionicConfigProvider.platform.android.tabs.style('standard');
    $ionicConfigProvider.platform.android.tabs.position('bottom');

    $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
    $ionicConfigProvider.platform.android.navBar.alignTitle('center');

    $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
    $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

    $ionicConfigProvider.platform.ios.views.transition('ios');
    $ionicConfigProvider.platform.android.views.transition('android');
    //
    $stateProvider.state("tour",{url:"/tour",templateUrl:"views/tour/tour.html",controller:"tourCtrl"});
    $stateProvider.state("tabs",{
        url:"/tabs",
        abstract:true,
        templateUrl:"views/tabs/tabs.html"
    });
    //按钮
    //主页----home页面
    $stateProvider.state("tabs.home",{
        url:"/home",
        views:{"tab-home":{templateUrl:"views/home/home.html",controller:"homeCtrl"}}
    });
    //主页----find页面
    $stateProvider.state("tabs.find",{
        url:"/find",
        views:{"tab-find":{templateUrl:"views/find/find.html"/*,controller:"homeCtrl"*/}}
    });

    //------------------宋---------------------
    /*菜谱*/
    $stateProvider.state("tabs.menu",{
        url:"/menu",
        views:{"tab-home":{templateUrl:"views/menu/menu.html",controller:"menuCtrl"}}
    });
    /*步骤*/
    $stateProvider.state("tabs.step",{
        url:"/menu/:menuid",
        views:{"tab-home":{templateUrl:"views/step/step.html",controller:"stepCtrl"}}
    });
    //--------------------L李-------------------
    $stateProvider.state("tabs.find.hot",{
        url:"/hot",
        views:{"tab-hot":{
            templateUrl:"views/hot/hot.html"/*,controller:"homeCtrl"*/
        }}
    });
    $stateProvider.state("tabs.find.subject",{
        url:"/subject",
        views:{"tab-subject":{
            templateUrl:"views/subject/subject.html"
        }}
    });
    $stateProvider.state("subjectIn",{
        url:"/subjectIn",
        templateUrl:"views/subjectIn/subjectIn.html"
    });
    $stateProvider.state("subjectIn_2",{
        url:"/subjectIn_2",
        templateUrl:"views/subjectIn/subjectIn_2.html"
    });
    $stateProvider.state("tabs.find.article",{
        url:"/article",
        views:{"tab-article":{
            templateUrl:"views/article/article.html"/*,controller:"homeCtrl"*/
        }}
    });
    $stateProvider.state("articleIn",{
        url:"/articleIn",
        templateUrl:"views/articleIn/articleIn.html"/*,controller:"homeCtrl"*/
    });
    //---------------------毛----------------------------
    //主页----me页面
    $stateProvider.state("tabs.my",{
        url:"/my",
        views:{"tab-me":{templateUrl:"views/me/me.html",controller:"login2Ctrl"}}

    });
    $stateProvider.state("login",{
        url:"/login",
        templateUrl:"views/login2/login.html",controller:"login2Ctrl"
    });
    $urlRouterProvider.otherwise("/tour");
    $ionicConfigProvider.backButton.text("");
    $ionicConfigProvider.backButton.previousTitleText("");
    //下下一级
});

myapp.directive('hideTabs', function($rootScope) {
    return {
        restrict: 'A',
        link: function(scope, element, attributes) {
            scope.$on('$ionicView.beforeEnter', function() {
                scope.$watch(attributes.hideTabs, function(value){
                    $rootScope.hideTabs = value;
                });
            });

            scope.$on('$ionicView.beforeLeave', function() {
                $rootScope.hideTabs = false;
            });
        }
    };
});
