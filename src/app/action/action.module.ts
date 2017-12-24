import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { MatSnackBarModule } from "@angular/material";

import { ActionService } from "./action.service";
import { Socket } from "./socket";

@NgModule({
  imports: [MatSnackBarModule, HttpClientModule],
  providers: [Socket, ActionService],
})
export class ActionModule {

}
