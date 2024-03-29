import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
    { path: '', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NotFoundRoutingModule {}
