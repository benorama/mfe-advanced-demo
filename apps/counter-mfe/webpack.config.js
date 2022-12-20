const {share, withModuleFederationPlugin} = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

    name: 'counter-mfe',

    exposes: {
        './Module': './apps/counter-mfe/src/app/counter/counter-route.module.ts'
    },

    shared: share({
        "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@ngrx/effects": {singleton: true, strictVersion: true},
        "@ngrx/router-store": {singleton: true, strictVersion: true},
        "@ngrx/store": {singleton: true, strictVersion: true},
    }),

});

