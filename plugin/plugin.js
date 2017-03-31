(function (Plugin) {
    'use strict';

    var async     = require('async'),
        nodebb    = require('./nodebb'),
        routeHelpers   = nodebb.routesHelpers;

    Plugin.appLoad = function (params, callback) {
        async.series([
            async.apply(routeSetup, params)
        ], function (error) {
            if (error) {
                return callback(error);
            }
            callback(null);
        });
    };

    Plugin.redirectIfMissingBadge = function (params, callback) {
        return callback({
            status: 302,
            path: '/success'
        });
    };

    var routeSetup = function (params, callback) {
        var router      = params.router,
            middleware  = params.middleware;

        routeHelpers.setupPageRoute(
            router, '/success',
            middleware, [],
            renderClient);

        callback();
    };


    var renderClient = function (req, res, next) {
        res.render('client/plugins/main');
    };
})(module.exports);
