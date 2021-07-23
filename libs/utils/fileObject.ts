export class FileObject{
    _link:string
    _type:string

    set setLink(link:string){
        this._link = link
    }
    get getLink():string{
        return this._link
    }
    set setType(type:string){
        this._type = type
    }
    get getType():string{
        return this._type
    }
}