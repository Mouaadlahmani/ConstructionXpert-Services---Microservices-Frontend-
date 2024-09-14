import {Component, OnInit} from '@angular/core';
import {TacheService} from "../../../services/tache/tache.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Tache} from "../../../classes/Tache/tache";

@Component({
  selector: 'app-add-tache',
  templateUrl: './add-tache.component.html',
  styleUrls: ['./add-tache.component.css']
})
export class AddTacheComponent implements OnInit{

  id!:number;
  tache: Tache = new Tache();

  constructor(private service: TacheService,
              private router:Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
  }

  addTache(){
    this.service.addTache(this.id, this.tache).subscribe(
      data=>{
        console.log(data);
      }
    )
  }

  onSubmit(){
    this.addTache();
    this.service.getTacheByProjet(this.id).subscribe(
      data=>{
        console.log(data)
      }
    );
    this.router.navigate(['taches', this.tache.id])
  }

}
