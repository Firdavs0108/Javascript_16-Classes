
////// How to create classes




class User {
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;

    }

    register(){
        console.log(`${this.username} is registered`);
    }
}


let user = new User('Firdavs','aaaa.gmail.com','12345')
let user2 = new User('Akmal','aaaa.gmail.com','12345')
let user3 = new User('Firdavs','aaaa.gmail.com','12345')

user2.register()



//////////Inheritance olish yuqoridagi classdan

class Member extends User { 
      constructor(username,email,password,memberPackage)
{
   super (username,email,password)
   this.package = memberPackage
}

getPackage(){
  console.log(`${this.username} is subscribed to the ${this.package} package`);
}

}

let member = new Member ('Firdavs', 'hhhaj', 'gsgsg', 'monthly')


member.getPackage()










