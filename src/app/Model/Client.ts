import { Facture } from "./Facture";
import { Paiement } from "./Paiement";

export class Client{
    idCli:number;
    referenceClient:number;
    nom:String;
    prenom:String;
    paiements:Paiement[];
    factures:Facture[];
}