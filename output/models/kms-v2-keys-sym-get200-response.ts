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
 * @interface KmsV2KeysSymGet200Response
 */
export interface KmsV2KeysSymGet200Response {
    /**
     * Time of request in UTC. Format: `YYYY-MM-DDThh:mm:ssZ` **Example** `2016-08-11T22:47:57Z` equals August 11, 2016, at 22:47:57 (10:47:57 p.m.). The `T` separates the date and the time. The `Z` indicates UTC.  Returned by Cybersource for all services. 
     * @type {string}
     * @memberof KmsV2KeysSymGet200Response
     */
    submitTimeUtc?: string;
    /**
     * The status of the submitted transaction.  Possible values:  - ACCEPTED 
     * @type {string}
     * @memberof KmsV2KeysSymGet200Response
     */
    status?: string;
    /**
     * key information 
     * @type {any}
     * @memberof KmsV2KeysSymGet200Response
     */
    keyInformation?: any;
}
