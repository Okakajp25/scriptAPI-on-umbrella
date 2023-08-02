import * as MC from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";
 
const world = MC.world

world.beforeEvent.chatSend.subscribe(ev => {
    const { sender, messege } = ev;
    if( messege = '.help') {
        sender.runCommandAsync("function help")
    }
})