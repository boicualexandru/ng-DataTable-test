import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { BaseService } from "app/services/base.service";
import { Invoice } from "app/models/invoice";

@Injectable()
export class InvoicesService extends BaseService{

  private invoicesUrl = 'assets/invoices.json';

  getAll(): Observable<Invoice[]> {
    return this.http.get(this.invoicesUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

}
