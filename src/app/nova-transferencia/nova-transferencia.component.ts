import { Component } from '@angular/core';

@Component({
  selector: 'app-nova-transferecia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  valor: string;
  destino: string;

  transferir() {
    console.log('Solicitada Nova Transferencia: ' + 'Valor: ' +  this.valor +  '\n Destino :  ' + this.destino);
  }
}
