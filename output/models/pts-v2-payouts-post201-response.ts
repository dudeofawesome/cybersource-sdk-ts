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
 * @interface PtsV2PayoutsPost201Response
 */
export interface PtsV2PayoutsPost201Response {
    /**
     * 
     * @type {any}
     * @memberof PtsV2PayoutsPost201Response
     */
    links?: any;
    /**
     * An unique identification number generated by Cybersource to identify the submitted request. Returned by all services. It is also appended to the endpoint of the resource. On incremental authorizations, this value with be the same as the identification number returned in the original authorization response. 
     * @type {string}
     * @memberof PtsV2PayoutsPost201Response
     */
    id?: string;
    /**
     * Time of request in UTC. `Format: YYYY-MM-DDThh:mm:ssZ`  Example 2016-08-11T22:47:57Z equals August 11, 2016, at 22:47:57 (10:47:57 p.m.). The T separates the date and the time. The Z indicates UTC. 
     * @type {string}
     * @memberof PtsV2PayoutsPost201Response
     */
    submitTimeUtc?: string;
    /**
     * The status of the submitted transaction.  Possible values:  - ACCEPTED  - DECLINED  - INVALID_REQUEST 
     * @type {string}
     * @memberof PtsV2PayoutsPost201Response
     */
    status?: string;
    /**
     * Cybersource or merchant generated transaction reference number. This is sent to the processor and is echoed back in the response to the merchant. This is This value is used for reconciliation purposes. 
     * @type {string}
     * @memberof PtsV2PayoutsPost201Response
     */
    reconciliationId?: string;
    /**
     * 
     * @type {any}
     * @memberof PtsV2PayoutsPost201Response
     */
    errorInformation?: any;
    /**
     * 
     * @type {any}
     * @memberof PtsV2PayoutsPost201Response
     */
    clientReferenceInformation?: any;
    /**
     * 
     * @type {any}
     * @memberof PtsV2PayoutsPost201Response
     */
    merchantInformation?: any;
    /**
     * 
     * @type {any}
     * @memberof PtsV2PayoutsPost201Response
     */
    orderInformation?: any;
    /**
     * 
     * @type {any}
     * @memberof PtsV2PayoutsPost201Response
     */
    processorInformation?: any;
    /**
     * 
     * @type {any}
     * @memberof PtsV2PayoutsPost201Response
     */
    recipientInformation?: any;
}
