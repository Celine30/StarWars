import {NgModule} from '@angular/core';
import {MdcButtonModule} from '@angular-mdc/web';
import {MdcCardModule} from '@angular-mdc/web';
import {MdcIconModule} from '@angular-mdc/web';
import {MdcIconButtonModule} from '@angular-mdc/web';



@NgModule({
    exports: [
        MdcButtonModule,
        MdcCardModule,
        MdcIconModule,
        MdcIconButtonModule
    ]
})

export class MaterialModule {}