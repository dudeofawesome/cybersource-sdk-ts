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
 * 
 * @export
 * @interface Ptsv2paymentsOrderInformationInvoiceDetailsTransactionAdviceAddendum
 */
export interface Ptsv2paymentsOrderInformationInvoiceDetailsTransactionAdviceAddendum {
    /**
     * Four Transaction Advice Addendum (TAA) fields. These fields are used to display descriptive information about a transaction on the customer’s American Express card statement. When you send TAA fields, start with amexdata_taa1, then ...taa2, and so on. Skipping a TAA field causes subsequent TAA fields to be ignored.  To use these fields, contact CyberSource Customer Support to have your account enabled for this feature. 
     * @type {string}
     * @memberof Ptsv2paymentsOrderInformationInvoiceDetailsTransactionAdviceAddendum
     */
    data?: string;
}
