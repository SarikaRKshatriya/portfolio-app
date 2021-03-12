import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  public isPresent:boolean = false;
  public error:string = "";
  public user=[];

  signinForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });
  @ViewChild('signinForm') form: FormGroup;
  constructor(
    private RegisterService: RegisterService,
    private route: ActivatedRoute,
    private router: Router
       
  ) {}

  ngOnInit(): void {
   
    //document.getElementById('signinForm').style.display = 'block';
  }

  signin(form) {
    this.user = this.RegisterService.getContactlist();
    let email=form.value.email;
    this.isPresent = true;
    this.user.forEach(item=>{
      if(item.email === form.value.email){
        if(item.password === form.value.password){
          this.isPresent = false;
          this.router.navigate(['/userinfo'],{
            queryParams:{ email: email }
          });
        }
      }
    });
  
  }

}
