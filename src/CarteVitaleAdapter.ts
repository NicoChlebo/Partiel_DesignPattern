import { DocumentSecurise } from "./DocumentSecurise";
import { SystemeCPAM } from "./external/SystemeCPAM";

export class CarteVitaleAdapter extends DocumentSecurise {
  private systemeCPAM: SystemeCPAM;

  constructor(nomDestinataire: string) {
    super(nomDestinataire);
    this.systemeCPAM = new SystemeCPAM(nomDestinataire);
  }

  protected recupererInformations(): void {
    this.systemeCPAM.fetchPatientData();
  }

  protected preparerEncre(): void {
    this.systemeCPAM.initializeInk();
  }

  protected verifierPapier(): void {
    this.systemeCPAM.verifySupport();
  }

  protected imprimer(): void {
    this.systemeCPAM.startPrint();
  }

  protected decouper(): void {
    this.systemeCPAM.cutCard();
  }

  protected operationSpecifique(): void {
    this.systemeCPAM.finalizeCard();
  }
}