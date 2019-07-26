import { Component ,OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import  { Fire} from './values';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  v:Fire;
  VulFormValid: boolean = false;
  //form:FormGroup;
  constructor(){
    this.v=new Fire();
    
  }

  ngOnInit() {

  }
  form= new FormGroup({
  FirstName: new FormControl('',Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(20),Validators.pattern('^[a-zA-Z \-\']+')])),
  LastName: new FormControl('',Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(20),Validators.pattern('^[a-zA-Z \-\']+')])),
  Email: new FormControl('',Validators.compose( [Validators.required,Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]{3,}$/)])),
  MobileNumber:new FormControl('',Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern(/^-?(0|[1-9]\d*)?$/)])),
  LandLineNumber:new FormControl('',Validators.compose([Validators.required,Validators.minLength(12),Validators.maxLength(12),Validators.pattern(/^-?(0|[1-9]\d*)?$/)]))

  });
  sub(v){
     if (this.form.invalid) {
      this.VulFormValid = true;
    }
    else {
      this.VulFormValid = false;
      //alert(JSON.stringify(v));
      console.log(v);
      this.form.reset();
    }
  }
}
