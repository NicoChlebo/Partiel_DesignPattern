export class SystemeCPAM {
  private nomPatient: string;

  constructor(nomPatient: string) {
    this.nomPatient = nomPatient;
  }

  public fetchPatientData(): void {
    console.log(`[CPAM] Récupération des données du patient : ${this.nomPatient}`);
  }

  public initializeInk(): void {
    console.log("[CPAM] Préparation de l'encre spéciale CPAM...");
  }

  public verifySupport(): void {
    console.log("[CPAM] Vérification du support plastique de la carte vitale...");
  }

  public startPrint(): void {
    console.log("[CPAM] Impression de la carte vitale...");
  }

  public cutCard(): void {
    console.log("[CPAM] Découpe de la carte vitale au format carte...");
  }

  public finalizeCard(): void {
    console.log("[CPAM] Finalisation et activation de la puce électronique...");
  }
}
