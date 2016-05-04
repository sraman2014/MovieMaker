angular.module('movieMakerSite').controller('clipLibraryController', function ($scope, $http, $location, sharedProperties) {

    $scope.mediaFiles = {};
    $scope.mediaFiles = {};
    $scope.clips = {};
    $scope.videoFiles = {};

    

    //get a list of all clips
    function getClips() {
        $http.get('//localhost:9458/api/clip')
            .success(function (data) { $scope.clips = data; });
    }

    getClips();





    //get a list of all Original Media files 
    $http.get('//localhost:9458/api/VideoFile')
       .success(function (data) { $scope.videoFiles = data; });


    //function to play clips
    $scope.playClip = function (mediaID, startPosition, endPosition) {
        var mfElement = "#t=" + (startPosition < 10 ? '0' + startPosition : startPosition)
        mfElement += (endPosition ? "," + endPosition : '');
        $scope.uriStr = "/Media/" + mediaID + ".mp4" + mfElement;

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

    //function to delete a clip
    $scope.deleteClip = function (clipID) {
        if (confirm('Are you sure you want to delete this clip from your clip library?')) {
            $http.delete('//localhost:9458/api/clip/' + clipID)
            .success(function (data) { $scope.data = data; getClips(); });
        }
    }

    $scope.createClip = function (mediaName, mediaID) {
        sharedProperties.setProperty('mediaID', mediaID);
        sharedProperties.setProperty('mediaName', mediaName);
        
    };

    $scope.editClip = function (clipID, clipName, startPosition, endPosition, mediaID) {
        sharedProperties.setProperty('clipID', clipID);
        sharedProperties.setProperty('clipName', clipName);
        sharedProperties.setProperty('startPosition', startPosition);
        sharedProperties.setProperty('endPosition', endPosition);
        sharedProperties.setProperty('mediaID', mediaID);
    };
})