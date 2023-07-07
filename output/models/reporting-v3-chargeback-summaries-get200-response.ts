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
import { ReportingV3ChargebackSummariesGet200ResponseChargebackSummaries } from './reporting-v3-chargeback-summaries-get200-response-chargeback-summaries';
/**
 * 
 * @export
 * @interface ReportingV3ChargebackSummariesGet200Response
 */
export interface ReportingV3ChargebackSummariesGet200Response {
    /**
     * Organization Id
     * @type {string}
     * @memberof ReportingV3ChargebackSummariesGet200Response
     */
    organizationId?: string;
    /**
     * Report Start Date
     * @type {Date}
     * @memberof ReportingV3ChargebackSummariesGet200Response
     */
    startTime?: Date;
    /**
     * Report Start Date
     * @type {string}
     * @memberof ReportingV3ChargebackSummariesGet200Response
     */
    endTime?: string;
    /**
     * List of Summary values
     * @type {Array<ReportingV3ChargebackSummariesGet200ResponseChargebackSummaries>}
     * @memberof ReportingV3ChargebackSummariesGet200Response
     */
    chargebackSummaries?: Array<ReportingV3ChargebackSummariesGet200ResponseChargebackSummaries>;
}
