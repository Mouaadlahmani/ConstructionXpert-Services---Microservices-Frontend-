import {Component, OnInit} from '@angular/core';
import {Ressources} from "../../../classes/Ressources/ressources";
import {RessourcesService} from "../../../services/ressources/ressources.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-ressources',
  templateUrl: './edit-ressources.component.html',
  styleUrls: ['./edit-ressources.component.css']
})
export class EditRessourcesComponent implements OnInit{

  id!:number;
  ressource: Ressources = new Ressources();
  constructor(private service: RessourcesService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.getRessourceById(this.id).subscribe(
      data=>{
        this.ressource = data;
      },
      error =>
        console.error('Error adding course', error)
    );
  }

  onSubmit(){
    this.service.modifyRessource(this.id, this.ressource).subscribe(
      data=>{
        console.log(this.ressource)
      }
    )
  }
}
