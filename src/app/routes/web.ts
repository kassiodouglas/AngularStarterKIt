import { Router } from "../Router"

import { HomeComponent } from '../resources/pages/home/home.component';

Router.set('', HomeComponent);

// above is the same of:
// Router.raw({path:'',component: HomeComponent});



