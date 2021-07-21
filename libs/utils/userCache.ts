import { UserObject } from "./userObject";

export class UserCache{
    table = new Map<string,UserObject>();
    
    setUser(user:UserObject) {
        this.table.set(user._id, user)
    }
    getUser(userId:string):UserObject{
        if(!this.table.has(userId)){
            fetch(`http://localhost:8082/messenger/user?id=${userId}`,{
                headers:{
                    "u_id": localStorage.getItem("UserId"),
                    "Authorzation": localStorage.getItem("Token")
                }
            })
            .then(response => response.json())
            .then(user => this.table.set(user.id, user))
        }
        else{
            return this.table.get(userId)
        }
    }
}