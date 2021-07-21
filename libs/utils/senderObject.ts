export class SenderObject{
    _id:string;
    _timestamp:number

    set setId(id:string){
        this._id = id;
    }
    get getId():string{
        return this._id
    }
    set settimestamp(timestamp:number){
        this._timestamp = timestamp;
    }
    get getTimestamp():number{
        return this._timestamp
    }
}