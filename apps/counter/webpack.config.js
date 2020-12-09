const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.base.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "counter"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({

        name: "counter",
        filename: "counterRemoteEntry.js",
        exposes: {
             './CounterRouteModule': './apps/counter/src/app/counter/counter-route.module.ts',
            //'./CounterAppComponent': './apps/counter/src/app/app.component.ts',
        },

        shared: {
          "@angular/core": { singleton: true, strictVersion: false },
          "@angular/common": { singleton: true, strictVersion: false },
          "@angular/router": { singleton: true, strictVersion: true },

          ...sharedMappings.getDescriptors()
        }

    }),
    sharedMappings.getPlugin(),
  ],
};
