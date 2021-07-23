import { ChatObject } from "./chatObject"

export class ChatCache{
    noOfChats:number
    chatCache = new Map<string,ChatObject>()
    cacheListStartIndex:number
    cacheListLength:number

    setNoOfChats(noOfChats:number){
        this.noOfChats = noOfChats
    }
    getNoOfChats():number{
        return this.noOfChats
    }
    setCacheListStartIndex(start:number){
        this.cacheListStartIndex = start
    }
    getCacheListStartIndex():number{
        return this.cacheListStartIndex
    }
    setCacheListLength(length:number){
        this.cacheListLength = length
    }
    getCacheListLength():number{
        return this.cacheListLength
    }
    saveChat(chat:ChatObject){
        this.chatCache.set(chat.id, chat)
    }
    saveChatList(chatList:ChatObject[]){
        chatList.forEach(chat => this.chatCache.set(chat.id, chat))
    }
    getChat(chatId:string):ChatObject{
        return this.chatCache.get(chatId)
    }
    getChatList(start:number, length:number):ChatObject[]{
        let index = 0
        let chatList:ChatObject[] = []
        for (const items of this.chatCache.values()) {
            if(index >= start && index <= length){
                chatList.push(items)
                index = index+1
            }
        }
        return chatList
    }
    removeChat(chatId:string){
        this.chatCache.delete(chatId)
    }
}