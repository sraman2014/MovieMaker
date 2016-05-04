angular.module('movieMakerSite').service('sharedProperties', function () {
    var property = {};

    return {
        getProperty: function (name) {
            return property[name];
        },
        setProperty: function (name, value) {
            property[name] = value;
        }
    };
});