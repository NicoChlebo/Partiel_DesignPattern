import { DocumentSecurise } from "./DocumentSecurise";

export class Passeport extends DocumentSecurise {
  protected recupererInformations(): void {
    console.log(`Récupération des informations du passeport de : ${this.nomDestinataire}...`);
  }

  protected preparerEncre(): void {
    console.log("Préparation des encres de type Passeport...");
  }

  protected verifierPapier(): void {
    console.log("Vérification de la présence de papier (Format livret)...");
  }

  protected imprimer(): void {
    console.log("Impression des pages internes et de la couverture du passeport...");
  }

  protected decouper(): void {
    console.log("Découpage des pages au format livret...");
  }

  protected operationSpecifique(): void {
    console.log("Reliure et couture des pages du passeport...");
  }
}
