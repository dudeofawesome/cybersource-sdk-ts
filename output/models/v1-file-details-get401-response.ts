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
import { InlineResponse4001Fields } from './inline-response4001-fields';
/**
 * Error Bean
 * @export
 * @interface V1FileDetailsGet401Response
 */
export interface V1FileDetailsGet401Response {
    /**
     * Error code
     * @type {string}
     * @memberof V1FileDetailsGet401Response
     */
    code: string;
    /**
     * Error message
     * @type {string}
     * @memberof V1FileDetailsGet401Response
     */
    message: string;
    /**
     * Localization Key Name
     * @type {string}
     * @memberof V1FileDetailsGet401Response
     */
    localizationKey?: string;
    /**
     * Correlation Id
     * @type {string}
     * @memberof V1FileDetailsGet401Response
     */
    correlationId?: string;
    /**
     * Error Detail
     * @type {string}
     * @memberof V1FileDetailsGet401Response
     */
    detail?: string;
    /**
     * Error fields List
     * @type {Array<InlineResponse4001Fields>}
     * @memberof V1FileDetailsGet401Response
     */
    fields?: Array<InlineResponse4001Fields>;
}
