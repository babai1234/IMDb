import {SenderObject} from "@libs/utils/senderObject"
import { FileObject } from "./fileObject";
import { ReceiverObject } from "./receiverObject";

export class MessageObject{
    id:string
    sender:SenderObject
    receiver:ReceiverObject[] = []
    textData:string
    fileData:FileObject[] = []
    deliveryStatus: number
    noOfDeliveries:number
    noOfSeen:number
    receiverListStartIndex:number
    receiverListLength:number

    setId(id:string){
        this.id = id
    }
    getId():string{
        return this.id
    }
    setSender(sender:SenderObject){
        this.sender = sender
    }
    getSender():SenderObject{
        return this.sender
    }
    setReceiver(receivers:ReceiverObject[]){
        Array.prototype.push.apply(this.receiver, receivers)
    }
    getReceiver(start:number, end:number):ReceiverObject[]{
        return this.receiver.slice(start,end+1)
    }
    getReceiverById(userId:string):ReceiverObject{
        const receiver:ReceiverObject[] = this.receiver.filter(value => value._id === userId)
        const [user] = receiver
        return user
    }
    setTextData(text:string){
        this.textData = text
    }
    getTextData():string{
        return this.textData
    }
    setFileData(file:FileObject[]){
        Array.prototype.push.apply(this.fileData, file)
    }
    getFileData():FileObject[]{
        return this.fileData
    }
    setDeliveryStatus(deliveryStatus:number){
        this.deliveryStatus = deliveryStatus
    }
    getDeliveryStatus():number{
        return this.deliveryStatus
    }
    setNoOfDeliveries(noOfDeliveries:number){
        this.noOfDeliveries = noOfDeliveries
    }
    getNoOfDeliveries():number{
        return this.noOfDeliveries
    }
    setNoOfSeen(noOfSeen:number){
        this.noOfSeen = noOfSeen
    }
    getNoOfSeen():number{
        return this.noOfSeen
    }
    setReceiverListStartIndex(index:number){
        this.receiverListStartIndex = index
    }
    getReceiverListStartIndex():number{
        return this.receiverListStartIndex
    }
    setReceiverListLength(length:number){
        this.receiverListLength = length
    }
    getReceiverListLength():number{
        return this.receiverListLength
    }
}