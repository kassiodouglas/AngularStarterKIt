import { Router } from "../core/Router"
import { InitialComponent } from "../modules/layouts/initial/initial.component";

import { DocsComponent } from "../modules/pages/docs/docs.component";
import { HomeComponent } from '../modules/pages/home/home.component';

Router.layout(InitialComponent,()=>{
    Router.named('home').get('', HomeComponent);
    Router.named('docs').get('documentacao/:title', DocsComponent);  
}).set();


Router.redirect('documentacao', 'documentacao/estrutura');




