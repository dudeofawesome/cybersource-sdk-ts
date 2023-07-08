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
 * @interface PtsV2CapturesVoidsPost400Response
 */
export interface PtsV2CapturesVoidsPost400Response {
    /**
     * Time of request in UTC. Format: `YYYY-MM-DDThh:mm:ssZ` **Example** `2016-08-11T22:47:57Z` equals August 11, 2016, at 22:47:57 (10:47:57 p.m.). The `T` separates the date and the time. The `Z` indicates UTC.  Returned by Cybersource for all services. 
     * @type {string}
     * @memberof PtsV2CapturesVoidsPost400Response
     */
    submitTimeUtc?: string;
    /**
     * The status of the submitted transaction.  Possible values:  - INVALID_REQUEST 
     * @type {string}
     * @memberof PtsV2CapturesVoidsPost400Response
     */
    status?: string;
    /**
     * The reason of the status.  Possible values:  - MISSING_FIELD  - INVALID_DATA  - DUPLICATE_REQUEST  - INVALID_MERCHANT_CONFIGURATION  - NOT_VOIDABLE 
     * @type {string}
     * @memberof PtsV2CapturesVoidsPost400Response
     */
    reason?: string;
    /**
     * The detail message related to the status and reason listed above.
     * @type {string}
     * @memberof PtsV2CapturesVoidsPost400Response
     */
    message?: string;
    /**
     * 
     * @type {Array<any>}
     * @memberof PtsV2CapturesVoidsPost400Response
     */
    details?: Array<any>;
}
