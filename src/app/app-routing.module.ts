import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from "./admin/admin.component";
import { HeaderAdminComponent } from "./admin/common/header-admin/header-admin.component";

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
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
