import { DocumentSecurise } from "./DocumentSecurise";
import { CarteIdentite } from "./CarteIdentite";
import { Passeport } from "./Passeport";
import { CarteVitaleAdapter } from "./CarteVitaleAdapter";

export class DocumentFactory {
  public static creerDocument(type: string, nomDestinataire: string): DocumentSecurise {
    const typeNormalise = type.toLowerCase().trim();

    if (typeNormalise === "cni") {
      return new CarteIdentite(nomDestinataire);
    } else if (typeNormalise === "passeport") {
      return new Passeport(nomDestinataire);
    } else if (typeNormalise === "vitale") {
      return new CarteVitaleAdapter(nomDestinataire);
    } else {
      throw new Error(`Type de document non supporté : ${type}`);
    }
  }
}
