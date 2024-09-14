import {Component, OnInit} from '@angular/core';
import {Ressources} from "../../../classes/Ressources/ressources";
import {RessourcesService} from "../../../services/ressources/ressources.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-add-ressources',
  templateUrl: './add-ressources.component.html',
  styleUrls: ['./add-ressources.component.css']
})
export class AddRessourcesComponent implements OnInit{

  id!:number;
  ressources: Ressources = new Ressources();

  constructor(private service: RessourcesService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
  }

  addRessource(){
    this.service.addRessource(this.id,this.ressources).subscribe(
      data=>{
        console.log(data);
      },
      error => {
        console.error('Error adding course', error);
      }
    )


  }

  onSubmit(){
    this.addRessource()
    this.router.navigate(['ressources', this.id])
  }


}
