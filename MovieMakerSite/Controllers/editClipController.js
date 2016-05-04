angular.module('movieMakerSite').controller('editClipController', function ($scope, $http, $location, sharedProperties) {
    
    $scope.init = function () {
        $scope.clipID = sharedProperties.getProperty('clipID');
        $scope.clipName = sharedProperties.getProperty('clipName') ;
        $scope.startPosition = sharedProperties.getProperty('startPosition') ;
        $scope.endPosition = sharedProperties.getProperty('endPosition') ;
        $scope.mediaID = sharedProperties.getProperty('mediaID') ;
    };

 
    //clear the form
    $scope.clearForm = function () {
        $scope.clipName = '';
        $scope.startPosition = '';
        $scope.endPosition = '';
    }

    //function to play clips
    //function playClip() {
    //    $scope.uriStr = "/Media/" + $scope.mediaID + ".mp4";

    //    $("#player_div").smfplayer('destroy');
    //    var Player = angular.element('#player_div').smfplayer(
    //    {
    //        mfURI: $scope.uriStr,
    //        autoStart: true,
    //        width: 570,
    //    });
    //    Player.playmf();
    //    Player.play();
    //    $scope.player = Player;
    //};
    //playClip();

    $scope.updateClip = function () {
        var clip = {
            "id": $scope.clipID,
            "mediaID": $scope.mediaID,
            "clipName": $scope.clipName,
            "thumbnailFile": "1",
            "startPosition": $scope.startPosition,
            "duration": $scope.endPosition,
            "createDate": "2016-05-01T01:06:30.947",
            "updateDate": "2016-05-01T01:06:30.947",
            "fullMediaName": null
        };

        $http.put('//localhost:9458/api/Clip', clip)
                .success(function (data, status, headers, config) {
                    $scope.Message = "";
                }).error(function (data, status, headers, config) {
                    $scope.Message = "Oops... something went wrong - " + data.message;
                });
    }

});