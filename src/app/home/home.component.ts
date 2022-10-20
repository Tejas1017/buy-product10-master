import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DesignutilityService } from '../appServices/designutility.service';
import { Auth } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _uname: DesignutilityService, private authService: Auth) {
    this._uname.username.subscribe(uname => {
      this.username = uname
    })
  }

  ngOnInit(): void {
  }
  @Input() placeHolder: string

  display: boolean = false
  username = ''

  inputName(uname) {
    this.display = true
    // uname.value = this.username
    this._uname.username.next(uname.value)

  }

  Onlogin(myForm:NgForm) {
    this.authService.login()
    console.log(myForm.value)
  }
  Onlogout() {
    this.authService.logout()
    alert('User is not logged-in!')
  }
}
