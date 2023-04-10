import { Component, OnInit } from '@angular/core';
import { NgxPrintElementService } from 'ngx-print-element';


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  @Input() fromParent: any;
  item!: any;
  fechaIngreso!: string;
  horaIngreso!: string;
  fechaSalida!: string;
  horaSalida!: string;
  patente!: string;
  modo!: string;
  saldo!: number;
  estadia!: number;
  estadiaHoras: any = '';
  tarifaNombre: string;
  tarifaFraccion!: number;
  tarifaValor!: number;

  constructor(
    public print: NgxPrintElementService,
    public activeModal: NgbActiveModal,

  ) {}

  ngOnInit(): void {
    // console.log("on init form", this.fromParent);
    this.modo = this.fromParent.modo;
    this.item = this.fromParent.item;

    this.ticket();

    if (this.modo === 'Ticket Salida') {
      this.tiempoEstadia();
      //this.saldoEstadia();
    }
  }

// SOLO PARA EL BARCODE

  format = 'CODE128B';
  value = ``;
  width = 2.5;
  height = 100;
  displayValue = true;
  fontSize = 25;

  /////// estas son los atributos con los que se pueden configurar ngx-barcode6
  /* elementType = "svg";
  value = "241022000001";
  format = "CODE128B";
  lineColor = "#000000";
  width = 1.5;
  height = 100;
  displayValue = true;
  fontOptions = "";
  font = "monospace";
  textAlign = "center";
  textPosition = "bottom";
  textMargin = 2;
  fontSize = 20;
  background = "#ffffff";
  margin = 10;
  marginTop = 10;
  marginBottom = 10;
  marginLeft = 10;
  marginRight = 10;
  get values(): string[] {
    return this.value.split("\n");
  }

*/



// SOLO PARA EL PLUGIN DE IMPRESION 

  public config = {
    printMode: 'template-popup',
    popupProperties:
      'toolbar=yes,scrollbars=yes,resizable=yes,top=0,left=0,fullscreen=yes',
    pageTitle: 'Hello World',
    templateString:
      "<header>I'm part of the template header</header>{{printBody}}<footer>I'm part of the template footer</footer>",
    stylesheets: [
      {
        rel: 'stylesheet',
        href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
      },
    ],
    styles: [
      'td { border: 1px solid black; color: green; }',
      'table { border: 1px solid black; color: red }',
      'header, table, footer { margin: auto; text-align: center; }',
    ],
  };

  ticket() {
    this.fechaIngreso = this.item.fechas.fechaIngreso;
    this.horaIngreso = this.item.fechas.horaIngreso;
    this.fechaSalida = this.item.fechas.fechaSalida;
    this.horaSalida = this.item.fechas.horaSalida;
    this.patente = this.item.patente;
    this.estadia = this.item.fechas.estadia;
    this.tarifaFraccion = this.item.tarifa.fraccion;
    this.tarifaNombre = this.item.tarifa.nombre
    this.tarifaValor = this.item.tarifa.valor;
    this.saldo = this.item.saldo;
    this.value = this.item.codigoBarras;
  }
  closeModal() {
    // Show a toast notification instead of a Swal modal
    const toast = this.toastr.warning('Operación cancelada', '¡Atención!');
    
    // Dismiss the modal after the toast notification is closed
    toast.onHidden.subscribe(() => this.activeModal.dismiss('Operación cancelada'));
  }
}
