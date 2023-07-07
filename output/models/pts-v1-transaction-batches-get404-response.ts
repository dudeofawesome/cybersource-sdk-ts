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
import { PtsV1TransactionBatchDetailsGet404ResponseErrorInformation } from './pts-v1-transaction-batch-details-get404-response-error-information';
/**
 * 
 * @export
 * @interface PtsV1TransactionBatchesGet404Response
 */
export interface PtsV1TransactionBatchesGet404Response {
    /**
     * 
     * @type {PtsV1TransactionBatchDetailsGet404ResponseErrorInformation}
     * @memberof PtsV1TransactionBatchesGet404Response
     */
    errorInformation?: PtsV1TransactionBatchDetailsGet404ResponseErrorInformation;
    /**
     * Time of request in UTC. Format: `YYYY-MM-DDThh:mm:ssZ` **Example** `2016-08-11T22:47:57Z` equals August 11, 2016, at 22:47:57 (10:47:57 p.m.). The `T` separates the date and the time. The `Z` indicates UTC.  Returned by Cybersource for all services. 
     * @type {string}
     * @memberof PtsV1TransactionBatchesGet404Response
     */
    submitTimeUtc?: string;
}
