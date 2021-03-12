import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
   public showDetails:boolean = false;
   public user;
   public users = [];
   public useremail:any;
    constructor( private RegisterService: RegisterService,
    public activatedRoute: ActivatedRoute,
    private toastyService: ToastyService,
    private router:Router) { }

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
    this.showDetails = true;
  }
  signout(){
    this.router.navigate(['/landingPage']);
  }
  edit(){
    this.router.navigate(['/edit'],{
      queryParams:{ email: this.useremail }
    });
  }
  confirmDelete() {
    document.getElementById('delete-confirm').style.display = 'block';
  }
  delete(){
    let index = this.users.findIndex(x => x.email === this.useremail);
    this.RegisterService.delete(index);
    this.toastyService.success({
      title: 'Successfully deleted user details.',
      showClose: false,
      timeout: 5000,
      theme: 'default',
    });
    this.signout();
  }
  deleteClose() {
    document.getElementById('delete-confirm').style.display = 'none';
  }
}
