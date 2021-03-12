import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { ToastyService } from 'ng2-toasty';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.scss']
})
export class EditInfoComponent implements OnInit {
  public user;
  public users = [];
  public useremail:any;
  editForm: FormGroup;
  public previousfirstname: any;
  public previouslastname: any;
  public previousphone: any;
  public previousemail: any;
  public previouspassword: any;
  public previousconfirmpassword: any;
  public previousgender: any;
  public index:any;

  constructor(  private RegisterService: RegisterService,
    private toastyService: ToastyService,
    private activatedRoute: ActivatedRoute,
    private router: Router){}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(
      (params: Params) => {
        this.useremail  = params.email;
      }
    );
    this.users= this.RegisterService.getContactlist();
    this.users.forEach(item => 
      {
        if(item.email === this.useremail){
        this.user =item;
      }
      });
      document.getElementById('edit-form').style.display='block';
      let currentValues = this.user;
      this.previousfirstname = currentValues.firstname;
      this.previouslastname = currentValues.lastname;
      this.previousemail = currentValues.email;
      this.previousphone = currentValues.phone;
      this.previousgender = currentValues.gender;
      this.previouspassword = currentValues.password;
      this.previousconfirmpassword = currentValues.confirmPwd;
      this.editForm = new FormGroup({
        firstname: new FormControl(this.previousfirstname, Validators.required),
        lastname: new FormControl(this.previouslastname, Validators.required),
        email: new FormControl(this.previousemail, [
          Validators.required,
          Validators.email,
        ]),
        phone: new FormControl(this.previousphone, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/),
        ]),
        password: new FormControl('this.pre', Validators.required),
        confirmPwd: new FormControl('', Validators.required),
        gender: new FormControl(this.previousgender, Validators.required),
      });
  }
  editContact(value) {
    this.index = this.users.findIndex(x => x.email === this.useremail);
    this.RegisterService.editContactsInfo(this.index,value);
    this.users= this.RegisterService.getContactlist();
    this.users.forEach(item => 
      {
        if(item.email === this.useremail){
        this.user =item;
      }
      });
    document.getElementById('edit-form').style.display = 'none';
   
    this.toastyService.success({
      title: 'Successfully edited user details.',
      showClose: false,
      timeout: 5000,
      theme: 'default'
    });
    this.router.navigate(['/userinfo'],{
      queryParams:{ email: this.useremail }
    });
  }

}
