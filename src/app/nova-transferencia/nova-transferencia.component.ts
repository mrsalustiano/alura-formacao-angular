import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-nova-transferecia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {


  @Output() Transferencia = new EventEmitter<any>();

  valor: number;
  destino: number;

  // tslint:disable-next-line: typedef
  transferir() {
    const valorEmitir = {valor: this.valor, destino: this.destino};
    this.Transferencia.emit( {valorEmitir} );

    this.limparCampos();
  }

  // tslint:disable-next-line: typedef
  limparCampos(){
    this.valor = 0;
    this.destino = 0;

  }
}
