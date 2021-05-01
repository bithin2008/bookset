import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { ModalModule } from "ngx-bootstrap/modal";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    HomeRoutingModule,
    NgbModule
  ],
})
export class HomeModule { }
