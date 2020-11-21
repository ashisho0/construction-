import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HexGridContainerComponent } from './projects/hex-grid-container/hex-grid-container.component';



const pagesRoute: Routes = [

    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },


    {
        path: 'home',
        component: HomepageComponent,
        children: [
            // {
            //     path: '',
            //     redirectTo: '',
            //     pathMatch: 'full'
            // },
            {
                path: '',
                component: HexGridContainerComponent,
            },
            {
                path: 'contact-us',
                component: ContactUsComponent,
            },


        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(pagesRoute)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
