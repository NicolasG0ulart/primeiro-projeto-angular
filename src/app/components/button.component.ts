import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class Button {
  buttonText: string = 'ACESSAR';
  buttonTexts: string[] = ['VENDER', 'COMPRAR'];
  buttonObject = {
    label: 'ADICIONAR AO CARRINHO',
  };

  buttonLabel: string = 'CARRINHO';
  @Input() label: string = '';

  getAlert(num: number) {
    alert(num);
  }
}
