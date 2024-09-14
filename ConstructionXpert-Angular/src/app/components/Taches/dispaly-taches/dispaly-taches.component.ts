import {Component, OnInit} from '@angular/core';
import {Tache} from "../../../classes/Tache/tache";
import {TacheService} from "../../../services/tache/tache.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-dispaly-taches',
  templateUrl: './dispaly-taches.component.html',
  styleUrls: ['./dispaly-taches.component.css']
})
export class DispalyTachesComponent implements OnInit{

  id!:number;
  taches:Tache[]=[];

  constructor(private service: TacheService,
              private router:Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getTachesByProjet()
  }

  getTachesByProjet(){
    this.service.getTacheByProjet(this.id).subscribe(
      data=>{
        this.taches = data;
      }
    )
  }

  editTache(id:number | undefined){
    this.router.navigate(['taches/edit', id])
  }

  deleteTache(id:number) {
    if (confirm('Are you sure you want to delete this tache?')) {
      this.service.deleteTache(id).subscribe(
        response => {
          this.getTachesByProjet();
        },
        error => {
          console.error('Error deleting tache:', error);
        }
      );
    }
  }

  toRessources(id: number | undefined){
    this.router.navigate(['ressource', id]);
}

}
