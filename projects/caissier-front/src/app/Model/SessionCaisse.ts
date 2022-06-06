import { Caisse } from "./Caisse";
import { Caissier } from "./Caissier";
import { Encaissement } from "./Encaissement";

export class SessionCaisse{
      numS?:number;
      montantInit?:number;
      montantSession?:number;
      dateOuverture?:Date = new Date();
      datefermeture?:Date;
      nbFacture?:number;
      etat?:String; 
      etatJournal?:String;
      caisse?:Caisse;
      caissier?:Caissier;
      encaissements?:Encaissement[];
}