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
import { ReportingV3ReportDefinitionsNameGet200ResponseAttributes } from './reporting-v3-report-definitions-name-get200-response-attributes';
import { ReportingV3ReportDefinitionsNameGet200ResponseDefaultSettings } from './reporting-v3-report-definitions-name-get200-response-default-settings';
/**
 * 
 * @export
 * @interface ReportingV3ReportDefinitionsNameGet200Response
 */
export interface ReportingV3ReportDefinitionsNameGet200Response {
    /**
     * 
     * @type {string}
     * @memberof ReportingV3ReportDefinitionsNameGet200Response
     */
    type?: string;
    /**
     * 
     * @type {number}
     * @memberof ReportingV3ReportDefinitionsNameGet200Response
     */
    reportDefinitionId?: number;
    /**
     * 
     * @type {string}
     * @memberof ReportingV3ReportDefinitionsNameGet200Response
     */
    reportDefintionName?: string;
    /**
     * 
     * @type {Array<ReportingV3ReportDefinitionsNameGet200ResponseAttributes>}
     * @memberof ReportingV3ReportDefinitionsNameGet200Response
     */
    attributes?: Array<ReportingV3ReportDefinitionsNameGet200ResponseAttributes>;
    /**
     * 
     * @type {Array<string>}
     * @memberof ReportingV3ReportDefinitionsNameGet200Response
     */
    supportedFormats?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ReportingV3ReportDefinitionsNameGet200Response
     */
    description?: string;
    /**
     * 
     * @type {ReportingV3ReportDefinitionsNameGet200ResponseDefaultSettings}
     * @memberof ReportingV3ReportDefinitionsNameGet200Response
     */
    defaultSettings?: ReportingV3ReportDefinitionsNameGet200ResponseDefaultSettings;
    /**
     * 'The subscription type for which report definition is required. By default the type will be CUSTOM.' Valid Values: - 'CLASSIC' - 'CUSTOM' - 'STANDARD' 
     * @type {string}
     * @memberof ReportingV3ReportDefinitionsNameGet200Response
     */
    subscriptionType?: string;
}
