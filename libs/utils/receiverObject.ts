export class ReceiverObject{
    _id:string;
    _timestamp:number;
    _status:number;

    set setId(id:string){
        this._id = id
    }
    get getId():string{
        return this._id
    }
    set setTimestamp(timestamp:number){
        this._timestamp = timestamp
    }
    get getTimestamp():number{
        return this._timestamp
    }
    set setstatus(status:number){
        this._status = status
    }
    get getstatus():number{
        return this._status
    }
}