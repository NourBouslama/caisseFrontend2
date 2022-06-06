import { Client } from "./Client";
import { Contrat } from "./Contrat";
import { Paiement } from "./Paiement";

export class Facture {

    IdF?: number;
    referenceFact?: number;
    montant?: number;
    periodeCons?: Date; // Période de Consommation
    etat?: String;
    dateF?: Date; // date finale pour payer la facture
    paiement?: Paiement;
    isselected:boolean;
    client:Client;
    contrat:Contrat;

}