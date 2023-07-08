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
 * @interface InvoicingV2InvoicesPost201Response
 */
export interface InvoicingV2InvoicesPost201Response {
    /**
     * 
     * @type {any}
     * @memberof InvoicingV2InvoicesPost201Response
     */
    links?: any;
    /**
     * An unique identification number generated by Cybersource to identify the submitted request. Returned by all services. It is also appended to the endpoint of the resource. On incremental authorizations, this value with be the same as the identification number returned in the original authorization response. 
     * @type {string}
     * @memberof InvoicingV2InvoicesPost201Response
     */
    id?: string;
    /**
     * Time of request in UTC. Format: `YYYY-MM-DDThh:mm:ssZ` **Example** `2016-08-11T22:47:57Z` equals August 11, 2016, at 22:47:57 (10:47:57 p.m.). The `T` separates the date and the time. The `Z` indicates UTC.  Returned by Cybersource for all services. 
     * @type {string}
     * @memberof InvoicingV2InvoicesPost201Response
     */
    submitTimeUtc?: string;
    /**
     * The status of the invoice.  Possible values: - DRAFT - CREATED - SENT - PARTIAL - PAID - CANCELED 
     * @type {string}
     * @memberof InvoicingV2InvoicesPost201Response
     */
    status?: string;
    /**
     * Contains all of the customer-related fields for the invoice.
     * @type {any}
     * @memberof InvoicingV2InvoicesPost201Response
     */
    customerInformation?: any;
    /**
     * Contains all of the invoice-specific fields, such as the invoice number and due date.
     * @type {any}
     * @memberof InvoicingV2InvoicesPost201Response
     */
    invoiceInformation?: any;
    /**
     * Contains all of the order-related fields for the invoice.
     * @type {any}
     * @memberof InvoicingV2InvoicesPost201Response
     */
    orderInformation?: any;
}
