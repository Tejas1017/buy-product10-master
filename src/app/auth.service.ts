export class Auth{
    loggedIn = false
    isAuthicated(){
        const promise = new Promise(
            (resolve,reject)=>{
                setTimeout(()=>{
                    resolve(this.loggedIn)
                },400)
            }
        )
        return promise
    }

    login(){
        this.loggedIn = true
    }
    logout(){
        this.loggedIn = false
    }
}