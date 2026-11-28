import { Injectable } from '@angular/core';
import type { Produit } from '../produit.model';

@Injectable({
  providedIn: 'root',
})
export class CarProduct {
  readonly produits: readonly Produit[] = [
    {
      id: 1,
      nom: 'Pneu Michelin Pilot Sport 4',
      description: 'Pneu été haute performance, taille 225/45 R17.',
      prix: 1850,
      categorie: 'Pneumatiques',
      icone: 'PS',
    },
    {
      id: 2,
      nom: 'Huile moteur Mobil 1 5W-30',
      description: 'Huile synthétique haute performance, bidon de 5 litres.',
      prix: 420,
      categorie: 'Entretien',
      icone: 'HU',
    },
    {
      id: 3,
      nom: 'Batterie Varta Blue Dynamic',
      description: 'Batterie 12 V, 70 Ah, idéale pour voitures diesel et essence.',
      prix: 1350,
      categorie: 'Électricité',
      icone: 'BT',
    },
    {
      id: 4,
      nom: 'Support téléphone MagSafe',
      description: 'Support magnétique universel avec fixation tableau de bord.',
      prix: 299,
      categorie: 'Accessoires',
      icone: 'ST',
    },
    {
      id: 5,
      nom: 'Dashcam 70mai M500',
      description: 'Caméra embarquée 1944p avec vision nocturne et Wi-Fi.',
      prix: 799,
      categorie: 'Sécurité',
      icone: 'DC',
    },
    {
      id: 6,
      nom: 'Tapis de sol Premium',
      description: 'Set avant et arrière sur mesure, matériau antidérapant.',
      prix: 650,
      categorie: 'Intérieur',
      icone: 'TS',
    },
    {
      id: 7,
      nom: 'Ampoules Philips X-tremeVision',
      description: 'Lot H7 longue portée pour éclairage avant plus puissant.',
      prix: 320,
      categorie: 'Éclairage',
      icone: 'AM',
    },
    {
      id: 8,
      nom: 'Chargeur voiture USB-C',
      description: 'Chargeur 67 W avec ports USB-C et USB-A.',
      prix: 240,
      categorie: 'Accessoires',
      icone: 'CC',
    },
  ];
}
