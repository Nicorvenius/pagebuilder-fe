import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from "./admin/admin.component";
import { HeaderAdminComponent } from "./admin/common/header-admin/header-admin.component";
import {EditComponent} from "@app/admin/edit/edit.component";
import {NavigationComponent} from "@app/admin/edit/navigation/navigation.component";
import {PageComponent} from "@app/admin/edit/page/page.component";

const routes: Routes = [
  {
    path: 'admin',
    children: [
      {
        path: '',
        component: HeaderAdminComponent,
        outlet: 'header',
      },
      {
        path: '',
        component: AdminComponent
      },
      {
        path: 'edit',
        component: EditComponent,
      },
      {
        path: 'edit/nav',
        component: NavigationComponent
      },
      {
        path: 'edit/page',
        component: PageComponent
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
