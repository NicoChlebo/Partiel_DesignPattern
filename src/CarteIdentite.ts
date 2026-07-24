import { DocumentSecurise } from "./DocumentSecurise";

export class CarteIdentite extends DocumentSecurise {
  protected recupererInformations(): void {
    console.log(`Récupération des informations de la CNI de : ${this.nomDestinataire}...`);
  }

  protected preparerEncre(): void {
    console.log("Préparation des encres de type CNI...");
  }

  protected verifierPapier(): void {
    console.log("Vérification du support plastique rigide (Format carte)...");
  }

  protected imprimer(): void {
    console.log("Impression de la carte d'identité (recto/verso)...");
  }

  protected decouper(): void {
    console.log("Découpage de la carte nationale d'identité au format carte...");
  }

  protected operationSpecifique(): void {
    console.log("Plastification protectrice de la carte d'identité...");
  }
}
