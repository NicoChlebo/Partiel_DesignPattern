export abstract class DocumentSecurise {
  protected nomDestinataire: string;

  constructor(nomDestinataire: string) {
    this.nomDestinataire = nomDestinataire;
  }

  public lancerFabrication(): void {
    this.recupererInformations();
    this.preparerEncre();
    this.verifierPapier();
    this.imprimer();
    this.decouper();
    this.operationSpecifique();
    this.finImpression();
  }

  protected abstract recupererInformations(): void;
  protected abstract preparerEncre(): void;
  protected abstract verifierPapier(): void;
  protected abstract imprimer(): void;
  protected abstract decouper(): void;

  protected operationSpecifique(): void {
  }

  protected finImpression(): void {
    console.log("Fin de l'impression.");
  }
}
