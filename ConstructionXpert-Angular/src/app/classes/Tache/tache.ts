import {Statut} from "../Statut/statut";

export class Tache {
  id!:number;
  description!:string;
  dateDebut!:Date;
  dateFin!:Date;
  statut!:Statut;
  projetId!:number;
}
