import { Component, OnInit } from '@angular/core';
import { SignupModel } from '../model/signupmodel';
import { TosatService } from '../tosat.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private toast:TosatService,private service:UserService,private router:Router) { }
  model:SignupModel;
  public showPassword: boolean = false;
  minDate:Date;
  maxDate:Date
  ngOnInit(): void {
    this.model = new SignupModel();
    this.SetToday()
  }
   
  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  

  SetToday(){
    const today = new Date()
    this.minDate = new Date(
      today.getFullYear()-60,
      today.getMonth(),
      today.getDate()
    )
    this.maxDate = new Date(
      this.maxDate = new Date(
        today.getFullYear()-18,
        today.getMonth(),
        today.getDate()
      )
    )
  }



  formValidation(){
    if(this.model.Name == "" || this.model.Name == null || this.model.Name == undefined){
      this.toast.showwarning('Name Cannot Be Blank','')
      return false
    }
    if(this.model.Email == "" || this.model.Email == null || this.model.Email == undefined){
      this.toast.showwarning('Email Cannot Be Blank','')
      return false
    }
    if(this.model.PhoneNo == "" || this.model.PhoneNo == null || this.model.PhoneNo == undefined){
      this.toast.showwarning('Contact No Cannot Be Blank','')
      return false
    }
    if( this.model.Dob == null || this.model.Dob == undefined){
      this.toast.showwarning('Date Of Brith Cannot Be Blank','')
      return false
    }
    if(this.model.PassWord == "" || this.model.PassWord == null || this.model.PassWord == undefined){
      this.toast.showwarning('Password Cannot Be Blank','')
      return false
    }
    if(this.model.ConfrimPassword == "" || this.model.ConfrimPassword == null || this.model.ConfrimPassword == undefined){
      this.toast.showwarning('Confrim Password Cannot Be Blank','')
      return false
    }
        

    return true
  }

  preparemodel(){
    let mod = new SignupModel();
    mod.Name = this.model.Name,
    mod.Email = this.model.Email,
    mod.PhoneNo = this.model.PhoneNo,
    mod.Dob = this.model.Dob,
    mod.PassWord = this.model.PassWord,
    mod.ConfrimPassword = this.model.ConfrimPassword
    
    return mod
  }
  onSubmit(){
    if(this.formValidation() == true){
      const preparemodel = this.preparemodel();
      this.service.AddUser(preparemodel)
      this.router.navigate(['/login'])
      this.toast.showsucess('SucessFully Created','')
     
    }else{
      this.toast.showwarning('Something Went To Wrong','')
    }
  }


  //BlurFunction

  ValidateEmail(event){
    const loginuser =  JSON.parse(localStorage.getItem('Users'))
    if(!event.target.validity.valid){
      this.model.Email ="";
      this.toast.showwarning("InValid Email Address","")
   }
   if(loginuser[0].Email === event.target.value){
    this.model.Email ="";
    this.toast.showerror("Email Address Already Exists","")
   }
  }
  ValidateName(event){
    if(!event.target.validity.valid){
      this.model.Name ="";
      this.toast.showwarning("Only Allow Alphabhets only","")
   }
  

  }

  onInputChange() {
    if (this.model.Name.length > 40) {
      this.model.Name=""
      this.toast.showwarning('Maximum 40 character limit exceeded!', 'Warning');
    }
  }

  ValidateContact(event){

   if (event.target.value.length < parseInt(event.target.maxLength, 10)) {
    this.model.PhoneNo = ""; 
    this.toast.showwarning("InValid Phone Number","")
  }
 
  }
  
  validatePassword(event){
    if(!event.target.validity.valid){
      this.toast.showwarning('Password Must be 6 characters 1 Special Characetr & 1 numeric value','')
      this.model.PassWord = ""
    }
  }

  validateConfrimPassword(event){
    if(this.model.PassWord !== event.target.value){
      this.toast.showwarning('Password Should Not Match','')
      this.model.ConfrimPassword = ""
    }
  }
  }

 

