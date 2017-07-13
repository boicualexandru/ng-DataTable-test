export class Invoice {
  Id: number;
  InternalNumber: string = '';
  ProFormInvoiceDate: string = new Date().toLocaleDateString();
  FinalInvoiceDate: string = new Date().toLocaleDateString();
  ProFormInvoiceNo: number = null;
  FinalInvoiceNo: number = null;
  ProviderName: string = '';
  ActivitiesValue: number = null;
  GrossTotal: number = null;
  InvoiceStatus: number = null;
  PaymentStatus: number = null;
  PaymentDueDate: string = new Date().toLocaleDateString();
}
