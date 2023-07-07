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
 * @interface TssV2TransactionsGet200ResponseApplicationInformationApplications
 */
export interface TssV2TransactionsGet200ResponseApplicationInformationApplications {
    /**
     * The name of the CyberSource transaction type (such as CC settlement or CC authorization) that the merchant wants to process in a transaction request. More than one transaction type can included in a transaction request. Each transaction type separately returns their own status, reasonCode, rCode, and rFlag messages. 
     * @type {string}
     * @memberof TssV2TransactionsGet200ResponseApplicationInformationApplications
     */
    name?: string;
    /**
     * The description for this field is not available.
     * @type {string}
     * @memberof TssV2TransactionsGet200ResponseApplicationInformationApplications
     */
    status?: string;
    /**
     * 3-digit reason code that indicates why the customer profile payment succeeded or failed.
     * @type {string}
     * @memberof TssV2TransactionsGet200ResponseApplicationInformationApplications
     */
    reasonCode?: string;
    /**
     * Indicates whether the service request was successful. Possible values:  - `-1`: An error occurred. - `0`: The request was declined. - `1`: The request was successful. 
     * @type {string}
     * @memberof TssV2TransactionsGet200ResponseApplicationInformationApplications
     */
    rCode?: string;
    /**
     * One-word description of the result of the application. 
     * @type {string}
     * @memberof TssV2TransactionsGet200ResponseApplicationInformationApplications
     */
    rFlag?: string;
    /**
     * Reference number that you use to reconcile your CyberSource reports with your processor reports. 
     * @type {string}
     * @memberof TssV2TransactionsGet200ResponseApplicationInformationApplications
     */
    reconciliationId?: string;
    /**
     * Message that explains the reply flag for the application. 
     * @type {string}
     * @memberof TssV2TransactionsGet200ResponseApplicationInformationApplications
     */
    rMessage?: string;
    /**
     * The description for this field is not available.
     * @type {number}
     * @memberof TssV2TransactionsGet200ResponseApplicationInformationApplications
     */
    returnCode?: number;
}
