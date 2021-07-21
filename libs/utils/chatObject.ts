import { FileObject } from "./fileObject"
import { MessageObject } from "./messageObject"
import { ReceiverObject } from "./receiverObject"
import { UserObject } from "./userObject"

export class ChatObject{
    id:string
    title:string
    picture:string
    destination:string
    totalNoOfMesssage:number
    deliveredNoOfMessage:number
    seenNoOfMessage:number
    cacheSize:number
    messageCache = new Map<string,MessageObject>()
    totalNoOfReceipients:number
    receipients:UserObject[] = []
    messageListStartIndex:number
    messageListLength:number
    receipentListStartIndex:number
    receipientListLength:number

    setId(id:string){
        this.id = id
    }
    getId():string{
        return this.id
    }
    setTitle(title:string){
        this.title = title
    }
    getTitle():string{
        return this.title
    }
    setPicture(picture:string){
        this.picture = picture
    }
    getPicture():string{
        return this.picture
    }
    setDistination(destination:string){
        this.destination = destination
    }
    getDestination():string{
        return this.destination
    }
    setTotalNoOfMessage(totalNoOfMessage:number){
        this.totalNoOfMesssage = totalNoOfMessage
    }
    getTotalNoOfMessage():number{
        return this.totalNoOfMesssage
    }
    setDeliveredNoOfMessage(deliveredNoOfMessage:number){
        this.deliveredNoOfMessage = deliveredNoOfMessage
    }
    getDeliveredNoOfMessage():number{
        return this.deliveredNoOfMessage
    }
    setSeenNoOfMessage(seenNoOfMessage:number){
        this.seenNoOfMessage = seenNoOfMessage
    }
    getSeenNoOfMessage():number{
        return this.seenNoOfMessage
    }
    setReceipients(receipients:UserObject[]){
        Array.prototype.push.apply(this.receipients, receipients)
    }
    getReceipients(start:number, end:number):UserObject[]{
        return this.receipients.slice(start,end)
    }
    saveMessageToCache(message:MessageObject, direction:number){
        this.messageCache.set(message.id,message)
    }
    saveMessageListToCache(messages:MessageObject[], direction:number){
        messages.forEach(message => this.messageCache.set(message.id, message))
    }
    updateMessageReceiverStatus(messageId:string, receiver:ReceiverObject){
        let message:MessageObject = this.messageCache.get(messageId)
        let receivers:ReceiverObject[] =  message.receiver
        let receiverIndex = receivers.findIndex((receiverObj => receiverObj._id === receiver._id))
        receivers[receiverIndex] = receiver
    }
    updateMessageFileData(messageId:string, file:FileObject[]){
        let message:MessageObject = this.messageCache.get(messageId)
        let fileList:FileObject[] =  message.fileData
        Array.prototype.push.apply(fileList, file)
    }
    getMessage(messageId:string):MessageObject{
        return this.messageCache.get(messageId)
    }
    getMessageList(start:number, end:number):MessageObject[]{
        let index = 0
        let messageList:MessageObject[] = []
        for (const items of this.messageCache.values()) {
            if(index >= start && index <= end){
                messageList.push(items)
                index = index+1
            }
        }
        return messageList
    }
    setMessageListStartIndex(start:number){
        this.messageListStartIndex = start
    }
    getMessageListStartIndex():number{
        return this.messageListStartIndex
    }
    setMessageListLength(length:number){
        this.messageListLength = length
    }
    getMessageListLength():number{
        return this.messageListLength
    }
    setReceipientListStartIndex(start:number){
        this.receipentListStartIndex = start
    }
    getReceipientListStartIndex():number{
        return this.receipentListStartIndex
    }
    setReceipientListLength(length:number){
        this.receipientListLength = length
    }
    getReceipientListLength():number{
        return this.receipientListLength
    }
    getCacheSize():number{
        this.cacheSize = this.messageCache.size
        return this.cacheSize
    }
}