import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {  //3rd execution

  aim ='Your Perfect Banking Partner'  //String Interpolation

  accounts = "Please Enter Your Account Number Here ...";  //Property Binding

  acno='';
  pswd='';

  constructor() { }  //1st execution

  ngOnInit(): void {  //life cycle hooks - initial process 2nd execution
  }
  userDetails:any={       // object of objects
    1000:{acn0:1000,username:'Emmanuel',password:1000,balance:10000},
    1001:{acn0:1001,username:'Aswin',password:1001,balance:10000},
    1002:{acn0:1002,username:'Abijith',password:1002,balance:10000},
  }
  //userdefined function()  4th execution

  acnoChange(event:any){
  console.log(event);
  console.log(event.target.value);

  this.acno = event.target.value;
  
}

  pswdChange(event:any){
  console.log(event);
  console.log(event.target.value);

  this.pswd = event.target.value;
}



  login(){                                    //Event binding
    // alert('Login clicked')

    var acno =this.acno;
    var pswd =this.pswd;

    var userDetails =this.userDetails;

    if(acno in userDetails){
      if (pswd==userDetails[acno]['password']){
        alert("Login Successful");
      }
      else{
        alert("Incorrect Password");
      }
    }
      else{
        alert("User does not exist");
      }
    }
  }

