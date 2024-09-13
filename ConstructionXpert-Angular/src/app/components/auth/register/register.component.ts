import {Component, OnInit} from '@angular/core';
import {Utilisateur} from "../../../classes/Utilisateur/utilisateur";
import {AuthService} from "../../../services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  utilisateur: Utilisateur = new Utilisateur();

  constructor(private service: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  addUser(){
    this.service.register(this.utilisateur).subscribe(
      data=>{
        console.log(data);
      }
    )
  }

  onSubmit(){
    console.log(this.utilisateur.username)
    this.addUser();
  }

}
