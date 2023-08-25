import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../model/loginmodel';
import { TosatService } from '../tosat.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private toast:TosatService,private router:Router) { }
  model:LoginModel;
  public showPassword: boolean = false;
  ngOnInit(): void {
    this.model = new LoginModel();
  }
   
  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }


  formValidation(){
    if(this.model.Email == "" || this.model.Email == null){
      this.toast.showwarning('Email Cannot Be Blank','')
      return false

    }
    if(this.model.Password ==  "" || this.model.Password == null){
      this.toast.showwarning('Password Cannot Be Blank','')
    return false
    }
    return true
  }
  onSubmit() {
    if (this.formValidation() === true) {
      const loginuserData = localStorage.getItem('Users');
      
      if (loginuserData) {
        const users = JSON.parse(loginuserData);
        let validUser = false;
  
        for (const user of users) {
          if (user.Email === this.model.Email && user.PassWord === this.model.Password) {
           
            validUser = true;
            localStorage.setItem('userName', user.Name); 
            break;
          }
        }
  
        if (validUser) {
         
          localStorage.setItem('token', '19a6609f-4ed9-4804-adad-a83ss670c7ba');
          this.router.navigate(['/index']);
        } else {
          this.toast.showwarning('InCorrect Email or Password', '');
          this.model = new LoginModel();
        }
      } else {
        console.log("No user data found in local storage.");
        this.toast.showwarning('INo user data found', '');
      }
    }
  }
  
  ValidateEmail(event){
    if(!event.target.validity.valid){
      this.model.Email ="";
      this.toast.showwarning("InValid Email Address","")
   }
  }

}
