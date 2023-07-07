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
import { Vasv2taxidClientReferenceInformationPartner } from './vasv2taxid-client-reference-information-partner';
/**
 * 
 * @export
 * @interface Vasv2taxidClientReferenceInformation
 */
export interface Vasv2taxidClientReferenceInformation {
    /**
     * Merchant-generated order reference or tracking number. It is recommended that you send a unique value for each transaction so that you can perform meaningful searches for the transaction.  #### Used by **Authorization** Required field.  #### PIN Debit Requests for PIN debit reversals need to use the same merchant reference number that was used in the transaction that is being reversed.  Required field for all PIN Debit requests (purchase, credit, and reversal).  #### FDC Nashville Global Certain circumstances can cause the processor to truncate this value to 15 or 17 characters for Level II and Level III processing, which can cause a discrepancy between the value you submit and the value included in some processor reports. 
     * @type {string}
     * @memberof Vasv2taxidClientReferenceInformation
     */
    code?: string;
    /**
     * Comments
     * @type {string}
     * @memberof Vasv2taxidClientReferenceInformation
     */
    comments?: string;
    /**
     * 
     * @type {Vasv2taxidClientReferenceInformationPartner}
     * @memberof Vasv2taxidClientReferenceInformation
     */
    partner?: Vasv2taxidClientReferenceInformationPartner;
}
