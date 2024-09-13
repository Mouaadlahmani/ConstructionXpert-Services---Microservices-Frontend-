import {Component, OnInit} from '@angular/core';
import {Ressources} from "../../../classes/Ressources/ressources";
import {RessourcesService} from "../../../services/ressources/ressources.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-display-ressources',
  templateUrl: './display-ressources.component.html',
  styleUrls: ['./display-ressources.component.css']
})
export class DisplayRessourcesComponent implements OnInit{

  ressources: Ressources[]=[];
  id!:number;

  constructor(private service: RessourcesService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getRessourcesByTache()
  }
  getRessourcesByTache(){
    this.service.getRessourceByTacheId(this.id).subscribe(
      data=>{
        this.ressources = data;
        console.log(this.ressources)
      }
    )
  }

  editRessource(id:number){
    this.router.navigate(['edit-ressource', id])
  }
  deleteRessource(id: number) {
    if (confirm('Are you sure you want to delete this resource?')) {
      this.service.deleteRessource(id).subscribe(
        response => {
          this.getRessourcesByTache();
        },
        error => {
          console.error('Error deleting resource:', error);
        }
      );
    }
  }
}
