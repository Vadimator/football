import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NotFoundRoutingModule } from './not-found-routing.module';

@NgModule({
    imports: [SharedModule, NotFoundRoutingModule],
    declarations: [PageNotFoundComponent],
})
export class NotFoundModule {}
