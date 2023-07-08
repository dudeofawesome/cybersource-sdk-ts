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
 * @interface PtsV2PaymentsReversalsPost201Response
 */
export interface PtsV2PaymentsReversalsPost201Response {
    /**
     * 
     * @type {any}
     * @memberof PtsV2PaymentsReversalsPost201Response
     */
    links?: any;
    /**
     * An unique identification number generated by Cybersource to identify the submitted request. Returned by all services. It is also appended to the endpoint of the resource. On incremental authorizations, this value with be the same as the identification number returned in the original authorization response. 
     * @type {string}
     * @memberof PtsV2PaymentsReversalsPost201Response
     */
    id?: string;
    /**
     * Time of request in UTC. Format: `YYYY-MM-DDThh:mm:ssZ` **Example** `2016-08-11T22:47:57Z` equals August 11, 2016, at 22:47:57 (10:47:57 p.m.). The `T` separates the date and the time. The `Z` indicates UTC.  Returned by Cybersource for all services. 
     * @type {string}
     * @memberof PtsV2PaymentsReversalsPost201Response
     */
    submitTimeUtc?: string;
    /**
     * The status of the submitted transaction.  Possible values:  - REVERSED 
     * @type {string}
     * @memberof PtsV2PaymentsReversalsPost201Response
     */
    status?: string;
    /**
     * Reference number for the transaction. Depending on how your Cybersource account is configured, this value could either be provided in the API request or generated by CyberSource. The actual value used in the request to the processor is provided back to you by Cybersource in the response. 
     * @type {string}
     * @memberof PtsV2PaymentsReversalsPost201Response
     */
    reconciliationId?: string;
    /**
     * 
     * @type {any}
     * @memberof PtsV2PaymentsReversalsPost201Response
     */
    clientReferenceInformation?: any;
    /**
     * 
     * @type {any}
     * @memberof PtsV2PaymentsReversalsPost201Response
     */
    reversalAmountDetails?: any;
    /**
     * 
     * @type {any}
     * @memberof PtsV2PaymentsReversalsPost201Response
     */
    processorInformation?: any;
    /**
     * 
     * @type {any}
     * @memberof PtsV2PaymentsReversalsPost201Response
     */
    issuerInformation?: any;
    /**
     * 
     * @type {any}
     * @memberof PtsV2PaymentsReversalsPost201Response
     */
    authorizationInformation?: any;
    /**
     * 
     * @type {any}
     * @memberof PtsV2PaymentsReversalsPost201Response
     */
    pointOfSaleInformation?: any;
}
