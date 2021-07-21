export class UserObject{
    _id: string;
    _picture: string;
    _online: boolean | null;
    _defaultDestination: string;

    set setId(id: string){
        this._id = id
    }
    get getId(): string{
        return this._id
    }
    set setPicture(picture: string){
        this._picture = picture
    }
    get getPicture(): string{
        return this._picture
    }
    set setOnline(online: boolean){
        this._online = online
    }
    get getOnline(): boolean{
        return this._online
    }
    set setDefaultDestination(defaultDestination: string){
        this._defaultDestination = defaultDestination
    }
    get getDefaultDestination(): string{
        return this._defaultDestination
    }
}