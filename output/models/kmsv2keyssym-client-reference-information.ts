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
import { Riskv1decisionsClientReferenceInformationPartner } from './riskv1decisions-client-reference-information-partner';
/**
 * 
 * @export
 * @interface Kmsv2keyssymClientReferenceInformation
 */
export interface Kmsv2keyssymClientReferenceInformation {
    /**
     * Client-generated order reference or tracking number. CyberSource recommends that you send a unique value. 
     * @type {string}
     * @memberof Kmsv2keyssymClientReferenceInformation
     */
    code?: string;
    /**
     * Comments
     * @type {string}
     * @memberof Kmsv2keyssymClientReferenceInformation
     */
    comments?: string;
    /**
     * 
     * @type {Riskv1decisionsClientReferenceInformationPartner}
     * @memberof Kmsv2keyssymClientReferenceInformation
     */
    partner?: Riskv1decisionsClientReferenceInformationPartner;
}
