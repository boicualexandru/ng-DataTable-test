export class Invoice {
  Id: number;
  InternalNumber: string = '';
  ProFormInvoiceDate: Date = new Date();
  FinalInvoiceDate: Date = new Date();
  ProFormInvoiceNo: number = null;
  FinalInvoiceNo: number = null;
  ProviderName: string = '';
  ActivitiesValue: number = null;
  GrossTotal: number = null;
  InvoiceStatus: number = null;
  PaymentStatus: number = null;
  PaymentDueDate: Date = new Date();
}
