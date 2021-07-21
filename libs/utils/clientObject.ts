import { ChatCache } from "./chatCache"
import { UserCache } from "./userCache"

export class ClientObject{
    id:string
    waitingQueue: any
    chatCache: ChatCache
    userCache: UserCache

    init(){
        
    }
}