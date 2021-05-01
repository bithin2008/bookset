import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { EventsComponent } from "./events.component";
import { EventsRoutingModule } from "./events-routing.module";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { ModalModule } from "ngx-bootstrap/modal";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [EventsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    EventsRoutingModule,
    NgbModule
  ],
})
export class EventsModule { }
