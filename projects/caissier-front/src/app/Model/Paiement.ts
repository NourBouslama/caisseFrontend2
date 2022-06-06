import { Client } from "./Client";
import { Encaissement } from "./Encaissement";
import { Facture } from "./Facture";

export class Paiement{
      idP?:number;
      dateP?:Date=new Date();
      modePaiement?:String;
      etat?:String="payé";
      encaissement?:Encaissement;
      factures?:Facture[];
      cli?:Client;

}