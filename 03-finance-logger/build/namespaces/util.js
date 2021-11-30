"use strict";
/// <reference path="./constants.ts" />
var Util;
(function (Util) {
    function getDetails() {
        return "Details coming soon...";
    }
    Util.getDetails = getDetails;
    function getAppName() {
        return Constants.AppName;
    }
    Util.getAppName = getAppName;
})(Util || (Util = {}));
