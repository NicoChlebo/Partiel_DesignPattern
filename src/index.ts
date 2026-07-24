import { DocumentFactory } from "./DocumentFactory";

console.log("SIMULATION DU SYSTÈME D'IMPRESSION SECURISEE\n");

const documents = [
  { type: "cni", destinataire: "Jean Dupont" },
  { type: "passeport", destinataire: "Marie Curie" },
  { type: "vitale", destinataire: "Pierre Martin" }
];

for (let i = 0; i < documents.length; i++) {
  const docInfo = documents[i];
  console.log(`[Système] Commande reçue : ${docInfo.type.toUpperCase()} pour ${docInfo.destinataire}`);
  
  try {
    const documentSecurise = DocumentFactory.creerDocument(docInfo.type, docInfo.destinataire);
    
    documentSecurise.lancerFabrication();
    
  } catch (error) {
    console.error(`Erreur d'impression pour ${docInfo.destinataire} :`, error);
  }
}
