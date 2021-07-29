# Micro-frontends Advanced Demo

This is a demo used as a proof of concept to build a micro-frontends architecture with [Angular 11](http://angular.io), [Nx Workspace](https://nx.dev/angular) and [Ngrx Store](http://ngrx.io).

Please check the Medium article [How to build a micro-frontends architecture, with Angular and Webpack Module Federation](https://medium.com/agorapulse-stories/building-a-micro-frontends-architecture-in-2021-with-angular-and-webpack-module-federation-50d073617645?source=friends_link&sk=ec61391b28ccd0d195e84b7dfd1a531c) to get more context about this demo.

The demo is based on two apps:
- a **counter-mfe** micro-app with a Counter module, which provides a working counter feature with it's own `counter` ngrx store (state and actions),
- a main **shell** app which provides the default home page, an authentication feature with it's own `auth` ngrx store (state and action) from an auth lib. 

Once authenticated on the shell app, it's possible to navigate to the counter feature and loads the remote Counter module from **counter-mfe** app.

![Apps diagram](mfe-demo-diagram.png)

Note: for a more basic demo, you might check [MFE basic demo](https://github.com/benorama/mfe-basic-demo), with a step-by-step guide to create and configure a micro-frontend workspace. 

Note 2: the initial workspace was created with Nx CLI.

```
npx create-nx-workspace@latest mfe-advanced-demo --preset="angular" --appName="shell" --style="scss"
ng g @nrwl/angular:app mfe1
```

## Live demo apps

You can access both apps here:

- **counter-mfe** [http://mfe-demo-counter.s3-website.eu-west-3.amazonaws.com](http://mfe-demo-counter.s3-website.eu-west-3.amazonaws.com)
- **shell** [http://mfe-demo-shell.s3-website.eu-west-3.amazonaws.com](http://mfe-demo-shell.s3-website.eu-west-3.amazonaws.com)


## Running the demo apps

Run the **counter-mfe** micro-app and go to http://localhost:4300.

```
nx serve counter-mfe
```

Note: if you get `Cannot find module 'ngx-build-plus/package.json'`, run `npm i`.

![Counter MFE](mfe-counter.png)

Run the **shell** main app and go to http://localhost:4200.

```
nx serve shell
```

![Apps diagram](mfe-shell-home.png)

Login and navigate to Counter MFE, which will load the Counter module from the **counter-mfe** micro-app.

![Apps diagram](mfe-shell-counter.png)
