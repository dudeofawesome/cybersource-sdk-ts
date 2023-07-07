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
 * @interface ReportingV3ConversionDetailsGet200ResponseNotes
 */
export interface ReportingV3ConversionDetailsGet200ResponseNotes {
    /**
     * Time of the note added by reviewer
     * @type {Date}
     * @memberof ReportingV3ConversionDetailsGet200ResponseNotes
     */
    time?: Date;
    /**
     * Note added by reviewer
     * @type {string}
     * @memberof ReportingV3ConversionDetailsGet200ResponseNotes
     */
    addedBy?: string;
    /**
     * Comments given by the reviewer
     * @type {string}
     * @memberof ReportingV3ConversionDetailsGet200ResponseNotes
     */
    comments?: string;
}
