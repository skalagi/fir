import { NgModule } from "@angular/core";

import { ActionService } from "./action.service";
import { Socket } from "./socket";

@NgModule({
  providers: [Socket, ActionService],
})
export class ActionModule {

}
