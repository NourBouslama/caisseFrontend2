import { Poste } from "./Poste";
import { Role } from "./Role";

export class  Utilisateur {
    idU?:number;
    matricule?:String;
    nom?:String;
    prenom?:String;
    adresse?:String;
    etat?:String;
    email?:String;
    motDePasse?:string;
    postes:Poste[];
    role?:Role;


}