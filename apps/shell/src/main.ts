import {loadManifest} from '@angular-architects/module-federation';
import {environment} from "./environments/environment";

const manifest = "/assets/mf.manifest" + (environment.production ? '.prod' : '') + ".json";

loadManifest(manifest)
    .catch(err => console.error(err))
    .then(_ => import('./bootstrap'))
    .catch(err => console.error(err));
