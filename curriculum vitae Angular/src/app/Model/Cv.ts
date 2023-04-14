import { Competence } from "./competence";
import { Contact } from "./contact";
import { Experience } from "./experience";
import { Formation } from "./formations";
import { Langue } from "./langues";

export interface Cv {
    id ?:number;
    nom ?:string;
    prenom ?:string;
    contact ?: Contact;
    competences ?: Competence[];
    formations ?: Formation[];
    langues ?: Langue[];
    experiences ?: Experience[];

}