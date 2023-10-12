import { Component, OnInit } from '@angular/core';
import { Achat } from './achat';

@Component({
  selector: 'app-calcul-monnaie',
  templateUrl: './calcul-monnaie.component.html',
  styleUrls: ['./calcul-monnaie.component.css']
})
export class CalculMonnaieComponent implements OnInit {

  prixAchat = 0;
  purchaseAmount = 0;
  paidAmount = 0;
  changeAmount = 0;
  tenEuros = 0;
  fiveEuros = 0;
  oneEuro = 0;

  achats: Achat[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  ajouterAchat(prix: number) {
    if (this.prixAchat) {
      this.achats.push({ prix: this.prixAchat });
      this.prixAchat = 0;  // Réinitialisez la valeur après l'ajout
    }
  }

  calculateChange() {
    this.purchaseAmount = this.achats.reduce((total, achat) => total + achat.prix, 0)
    console.log(this.purchaseAmount)
    if (this.paidAmount >= this.purchaseAmount) {
      this.changeAmount = this.paidAmount - this.purchaseAmount;
      this.tenEuros = Math.floor(this.changeAmount / 10);
      this.changeAmount %= 10;
      this.fiveEuros = Math.floor(this.changeAmount / 5);
      this.changeAmount %= 5;
      this.oneEuro = this.changeAmount;
    } else {
      alert('Le montant payé est insuffisant.');
    }
  }

}
