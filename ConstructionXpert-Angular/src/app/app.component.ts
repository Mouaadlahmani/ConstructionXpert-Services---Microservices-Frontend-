import {Component, OnInit} from '@angular/core';
import {AuthService} from "./services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ConstructionXpert-Angular';
  protected showNavButtons: boolean=false;


  constructor(private service: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
  }


  logout():void{
    this.service.logout();
    this.router.navigate(['login']);
  }
}
