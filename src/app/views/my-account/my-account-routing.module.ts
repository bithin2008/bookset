import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyAccountComponent } from "./my-account.component";


const routes: Routes = [
  {
    path: "",
    component: MyAccountComponent,
    data: {
      title: "My Account",
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyAccountRoutingModule { }
