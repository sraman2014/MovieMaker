angular.module('movieMakerSite').controller('createClipController', function ($scope, $http, $location, sharedProperties, $state) {
    $scope.mediaName = sharedProperties.getProperty('mediaName');
    $scope.mediaID = sharedProperties.getProperty('mediaID');//to do:get this from the Index page
    $scope.clearForm = function () {
        $scope.clipName = '';
        $scope.startPosition = '';
        $scope.endPosition = '';
    }

    //function to play clips
    function playClip() {
        $scope.uriStr = "/Media/" + $scope.mediaID + ".mp4";

        $("#player_div").smfplayer('destroy');
        var Player = angular.element('#player_div').smfplayer(
        {
            mfURI: $scope.uriStr,
            autoStart: true,
            width: 570,
        });
        Player.playmf();
        Player.play();
        $scope.player = Player;
    };
    playClip();

    //function to create a clip
    $scope.createClip = function () {
        $http.post('//localhost:9458/api/Clip', { 'clipName': $scope.clipName, 'startPosition': $scope.startPosition, 'MediaID': $scope.mediaID, 'duration': $scope.endPosition })
                .success(function (data, status, headers, config) {
                    $scope.Message = "";
                    
                }).error(function (data, status, headers, config) {
                    $scope.Message = "Oops... something went wrong - " + data.message;
                });
    }

});