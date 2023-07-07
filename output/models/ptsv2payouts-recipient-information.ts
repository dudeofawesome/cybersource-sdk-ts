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
 * @interface Ptsv2payoutsRecipientInformation
 */
export interface Ptsv2payoutsRecipientInformation {
    /**
     * First name of recipient. characters. * CTV (14) * Paymentech (30) 
     * @type {string}
     * @memberof Ptsv2payoutsRecipientInformation
     */
    firstName?: string;
    /**
     * Middle Initial of recipient. Required only for FDCCompass. 
     * @type {string}
     * @memberof Ptsv2payoutsRecipientInformation
     */
    middleInitial?: string;
    /**
     * Recipient’s middle name. This field is a _passthrough_, which means that CyberSource does not verify the value or modify it in any way before sending it to the processor. If the field is not required for the transaction, CyberSource does not forward it to the processor. 
     * @type {string}
     * @memberof Ptsv2payoutsRecipientInformation
     */
    middleName?: string;
    /**
     * Last name of recipient. characters. * CTV (14) * Paymentech (30) 
     * @type {string}
     * @memberof Ptsv2payoutsRecipientInformation
     */
    lastName?: string;
    /**
     * Recipient address information. Required only for FDCCompass.
     * @type {string}
     * @memberof Ptsv2payoutsRecipientInformation
     */
    address1?: string;
    /**
     * Recipient city. Required only for FDCCompass.
     * @type {string}
     * @memberof Ptsv2payoutsRecipientInformation
     */
    locality?: string;
    /**
     * Recipient State. Required only for FDCCompass.
     * @type {string}
     * @memberof Ptsv2payoutsRecipientInformation
     */
    administrativeArea?: string;
    /**
     * Recipient country code. Required only for FDCCompass.
     * @type {string}
     * @memberof Ptsv2payoutsRecipientInformation
     */
    country?: string;
    /**
     * Recipient postal code. Required only for FDCCompass.
     * @type {string}
     * @memberof Ptsv2payoutsRecipientInformation
     */
    postalCode?: string;
    /**
     * Recipient phone number. Required only for FDCCompass.
     * @type {string}
     * @memberof Ptsv2payoutsRecipientInformation
     */
    phoneNumber?: string;
    /**
     * Recipient date of birth in YYYYMMDD format. Required only for FDCCompass.
     * @type {string}
     * @memberof Ptsv2payoutsRecipientInformation
     */
    dateOfBirth?: string;
}
