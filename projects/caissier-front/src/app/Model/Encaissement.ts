import { Paiement } from "./Paiement";
import { SessionCaisse } from "./SessionCaisse";

export class Encaissement{
      idE?:number;
      dateE?:Date=new Date();
      montantE?:number;
      etat?:String;
      paiement?:Paiement;
      session:SessionCaisse;
     
}