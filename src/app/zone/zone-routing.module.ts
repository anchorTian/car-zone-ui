import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyFavourComponent } from './my-favour/my-favour.component';
import { ZoneComponent } from './zone.component';

const routes: Routes = [
    { path: 'zone', children: [
        { path: 'my-favour', component: MyFavourComponent },
    ]},
    { path: '', redirectTo: '/zone', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ZoneRoutingModule { }
