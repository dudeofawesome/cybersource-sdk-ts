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
 * HTTP status code for client application
 * @export
 * @interface ReportingV3PurchaseRefundDetailsGet500Response
 */
export interface ReportingV3PurchaseRefundDetailsGet500Response {
    /**
     * Time of request in UTC.  
     * @type {Date}
     * @memberof ReportingV3PurchaseRefundDetailsGet500Response
     */
    submitTimeUtc: Date;
    /**
     * Documented reason code 
     * @type {string}
     * @memberof ReportingV3PurchaseRefundDetailsGet500Response
     */
    reason: string;
    /**
     * Short descriptive message to the user. 
     * @type {string}
     * @memberof ReportingV3PurchaseRefundDetailsGet500Response
     */
    message: string;
    /**
     * Error field list 
     * @type {Array<any>}
     * @memberof ReportingV3PurchaseRefundDetailsGet500Response
     */
    details: Array<any>;
}
