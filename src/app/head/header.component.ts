import { Component, OnInit } from '@angular/core';
import { DesignutilityService } from '../appServices/designutility.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _uname:DesignutilityService) {
    this._uname.username.subscribe(uname =>{
      this.username = uname
    })
   }
   username:string = ""
   helllo = 'heyy'
  ngOnInit(): void {
 
  }
  

}
