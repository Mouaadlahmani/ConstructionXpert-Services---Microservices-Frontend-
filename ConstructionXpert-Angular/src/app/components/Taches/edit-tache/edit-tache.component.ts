import {Component, OnInit} from '@angular/core';
import {TacheService} from "../../../services/tache/tache.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Tache} from "../../../classes/Tache/tache";
import {Statut} from "../../../classes/Statut/statut";

@Component({
  selector: 'app-edit-tache',
  templateUrl: './edit-tache.component.html',
  styleUrls: ['./edit-tache.component.css']
})
export class EditTacheComponent implements OnInit{

  id!:number;
  tache: Tache = new Tache();
  statut= Statut;

  constructor(private service: TacheService,
              private router: Router,
              private route: ActivatedRoute
              ) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.getTacheById(this.id).subscribe(
      data=>{
        this.tache = data;
      }
    )
  }

  onSubmit(){
    this.service.editTache(this.id, this.tache).subscribe(
      data=>{
        console.log(data);
        this.router.navigate(['taches', this.tache.projetId])
      }
    )
  }
}
