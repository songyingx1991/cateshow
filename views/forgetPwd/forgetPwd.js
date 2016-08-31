/**
 * Created by hxsd on 2016/08/17.
 */
angular.module("myapp").controller("forgetPwdCtrl",function($scope,$interval){
    $scope.text = "点击发送验证码";
    var i = 60;
    $scope.changeText = function(){
        $interval(function(){
            $scope.text = i+"S后点击从发";
            i--;
            if(i<0){
                i=0;
            }
        },1000);

    };
});