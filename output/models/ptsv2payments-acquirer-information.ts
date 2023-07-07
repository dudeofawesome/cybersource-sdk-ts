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
 * @interface Ptsv2paymentsAcquirerInformation
 */
export interface Ptsv2paymentsAcquirerInformation {
    /**
     * Acquirer bank ID number that  corresponds to a certificate that Cybersource already has.This ID has this format. 4XXXXX for Visa and 5XXXXX for Mastercard. 
     * @type {string}
     * @memberof Ptsv2paymentsAcquirerInformation
     */
    acquirerBin?: string;
    /**
     * Issuers need to be aware of the Acquirer's Country Code when the Acquirer country differs from the Merchant country and the Acquirer is in the EEA (European Economic Area). 
     * @type {string}
     * @memberof Ptsv2paymentsAcquirerInformation
     */
    country?: string;
    /**
     * Registered password for the Visa directory server. 
     * @type {string}
     * @memberof Ptsv2paymentsAcquirerInformation
     */
    password?: string;
    /**
     * Username for the visa directory server that is created when your acquirer sets up your account. This ID might be the same as your merchant ID. the username can be 15 or 23 characters. 
     * @type {string}
     * @memberof Ptsv2paymentsAcquirerInformation
     */
    merchantId?: string;
}
