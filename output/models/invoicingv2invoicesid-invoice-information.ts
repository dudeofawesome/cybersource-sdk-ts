/* tslint:disable */
/* eslint-disable */
/**
 * CyberSource Merged Spec
 * All CyberSource API specs merged together. These are available at https://developer.cybersource.com/api/reference/api-reference.html
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
 * Contains the updatable invoice information.
 * @export
 * @interface Invoicingv2invoicesidInvoiceInformation
 */
export interface Invoicingv2invoicesidInvoiceInformation {
    /**
     * The description included in the invoice.
     * @type {string}
     * @memberof Invoicingv2invoicesidInvoiceInformation
     */
    description?: string;
    /**
     * The invoice due date. This field is required for creating an invoice. Format: `YYYY-MM-DD`, where `YYYY` = year, `MM` = month, and `DD` = day 
     * @type {string}
     * @memberof Invoicingv2invoicesidInvoiceInformation
     */
    dueDate?: string;
    /**
     * If set to `true`, the payer can make a partial invoice payment.
     * @type {boolean}
     * @memberof Invoicingv2invoicesidInvoiceInformation
     */
    allowPartialPayments?: boolean;
    /**
     * If set to `None`, the invoice is created, and its status is set to 'CREATED', but no email is sent.    Possible values:        - `None`   - `Email`  
     * @type {string}
     * @memberof Invoicingv2invoicesidInvoiceInformation
     */
    deliveryMode?: string;
}
