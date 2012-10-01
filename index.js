(function(module) {
    var facebook = require("facebook-js");

    module.exports = function(token) {
        this.token = token;
    };

    module.exports.prototype.api = function(type, method, params, callback) {
        var copiedParams = {};

        if (typeof params == "function") {
            callback = params;
            params   = undefined;
        }

        if (params != undefined) {
            Object.keys(params).forEach(function(key) {
                copiedParams[key] = params[key];
            });
        }

        copiedParams.access_token = this.token;

        facebook.apiCall(type, method, copiedParams, function(error, response, body) {
            if (!error && body.error) {
                error = body.error;
            }

            callback && callback(error, body);
        });
    };
})(module);