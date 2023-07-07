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
import { RiskV1AuthenticationSetupsPost201ResponseErrorInformationDetails } from './risk-v1-authentication-setups-post201-response-error-information-details';
/**
 * 
 * @export
 * @interface PtsV2CreditsPost400Response
 */
export interface PtsV2CreditsPost400Response {
    /**
     * Time of request in UTC. Format: `YYYY-MM-DDThh:mm:ssZ` **Example** `2016-08-11T22:47:57Z` equals August 11, 2016, at 22:47:57 (10:47:57 p.m.). The `T` separates the date and the time. The `Z` indicates UTC.  Returned by Cybersource for all services. 
     * @type {string}
     * @memberof PtsV2CreditsPost400Response
     */
    submitTimeUtc?: string;
    /**
     * The status of the submitted transaction.  Possible values:  - INVALID_REQUEST 
     * @type {string}
     * @memberof PtsV2CreditsPost400Response
     */
    status?: string;
    /**
     * The reason of the status.  Possible values:  - MISSING_FIELD  - INVALID_DATA  - DUPLICATE_REQUEST  - INVALID_CARD  - INVALID_MERCHANT_CONFIGURATION  - INVALID_AMOUNT  - CAPTURE_ALREADY_VOIDED  - ACCOUNT_NOT_ALLOWED_CREDIT 
     * @type {string}
     * @memberof PtsV2CreditsPost400Response
     */
    reason?: string;
    /**
     * The detail message related to the status and reason listed above.
     * @type {string}
     * @memberof PtsV2CreditsPost400Response
     */
    message?: string;
    /**
     * 
     * @type {Array<RiskV1AuthenticationSetupsPost201ResponseErrorInformationDetails>}
     * @memberof PtsV2CreditsPost400Response
     */
    details?: Array<RiskV1AuthenticationSetupsPost201ResponseErrorInformationDetails>;
}
