import { ModePaiement } from "./ModePaiement";
import { SessionCaisse } from "./SessionCaisse";

export class Caisse{
    numC?:number;
    etat?:String;
    intitule?:String;
    modes?:ModePaiement[];
    sessions?:SessionCaisse[];
}