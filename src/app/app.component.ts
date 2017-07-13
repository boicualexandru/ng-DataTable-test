import { Component } from '@angular/core';
import { InvoicesService } from "app/services/invoices.service";
import { Invoice } from "app/models/invoice";
import { MenuItem } from "primeng/primeng";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  invoices: Invoice[] = [];
  errorMessage: string = '';

  displayDialog: boolean;
  newInvoice: Invoice;

  selectedInvoice: Invoice;
  items: MenuItem[];

  constructor(private invoicesService: InvoicesService) { }

  ngOnInit() {
    this.invoicesService.getAll()
      .subscribe(
      invoices => this.invoices = invoices,
      error => this.errorMessage = <any>error
      );

    this.items = [
      { label: 'Delete', icon: 'fa-close', command: (event) => this.deleteInvoice(this.selectedInvoice) }
    ];
  }

  showDialogToAddItem() {
    this.newInvoice = new Invoice();
    this.displayDialog = true;
  }

  save() {
    let invoices = [...this.invoices];
    invoices.push(this.newInvoice);

    this.invoices = invoices;
    this.newInvoice = null;
    this.displayDialog = false;
  }

  deleteInvoice(invoice: Invoice){
    let index = -1;
    for (let i = 0; i < this.invoices.length; i++) {
      if (this.invoices[i].Id == invoice.Id) {
        index = i;
        break;
      }
    }
    debugger;
    this.invoices = this.invoices.filter((val,i) => i!=index);
  }
}
