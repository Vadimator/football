import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { AdminWrapperComponent } from './components/admin-wrapper/admin-wrapper.component';

@NgModule({
    imports: [SharedModule],
    declarations: [AdminWrapperComponent],
    exports: [SharedModule, AdminWrapperComponent]
})
export class AdminSharedModule {}
