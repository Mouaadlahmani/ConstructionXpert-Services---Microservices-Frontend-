// src/app/models/projets.model.ts

export interface Projets {
  id?: number;
  nom: string;
  description: string;
  dateDebut: Date;
  dateFin: Date;
  budget: number;
}
