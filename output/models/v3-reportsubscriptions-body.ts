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
import { Reportingv3reportsReportPreferences } from './reportingv3reports-report-preferences';
/**
 * 
 * @export
 * @interface V3ReportsubscriptionsBody
 */
export interface V3ReportsubscriptionsBody {
    /**
     * Valid CyberSource organizationId
     * @type {string}
     * @memberof V3ReportsubscriptionsBody
     */
    organizationId?: string;
    /**
     * Valid Report Definition Name
     * @type {string}
     * @memberof V3ReportsubscriptionsBody
     */
    reportDefinitionName: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof V3ReportsubscriptionsBody
     */
    reportFields: Array<string>;
    /**
     * Valid values: - application/xml - text/csv 
     * @type {string}
     * @memberof V3ReportsubscriptionsBody
     */
    reportMimeType: string;
    /**
     * 'The frequency for which subscription is created.' **NOTE: Do not document USER_DEFINED Frequency field in developer center** Valid Values:   - 'DAILY'   - 'WEEKLY'   - 'MONTHLY'   - 'USER_DEFINED' 
     * @type {string}
     * @memberof V3ReportsubscriptionsBody
     */
    reportFrequency: string;
    /**
     * If the reportFrequency is User-defined, reportInterval should be in **ISO 8601 time format** Please refer the following link to know more about ISO 8601 format.[Rfc Time Format](https://en.wikipedia.org/wiki/ISO_8601#Durations)  **Example time format for 2 hours and 30 Mins:**   - PT2H30M **NOTE: Do not document reportInterval field in developer center** 
     * @type {string}
     * @memberof V3ReportsubscriptionsBody
     */
    reportInterval?: string;
    /**
     * 
     * @type {string}
     * @memberof V3ReportsubscriptionsBody
     */
    reportName: string;
    /**
     * 
     * @type {string}
     * @memberof V3ReportsubscriptionsBody
     */
    timezone: string;
    /**
     * The hour at which the report generation should start. It should be in hhmm format.
     * @type {string}
     * @memberof V3ReportsubscriptionsBody
     */
    startTime: string;
    /**
     * This is the start day if the frequency is WEEKLY or MONTHLY. The value varies from 1-7 for WEEKLY and 1-31 for MONTHLY. For WEEKLY 1 means Sunday and 7 means Saturday. By default the value is 1.
     * @type {number}
     * @memberof V3ReportsubscriptionsBody
     */
    startDay?: number;
    /**
     * List of filters to apply
     * @type {{ [key: string]: Array<string>; }}
     * @memberof V3ReportsubscriptionsBody
     */
    reportFilters?: { [key: string]: Array<string>; };
    /**
     * 
     * @type {Reportingv3reportsReportPreferences}
     * @memberof V3ReportsubscriptionsBody
     */
    reportPreferences?: Reportingv3reportsReportPreferences;
    /**
     * Valid GroupName
     * @type {string}
     * @memberof V3ReportsubscriptionsBody
     */
    groupName?: string;
}
