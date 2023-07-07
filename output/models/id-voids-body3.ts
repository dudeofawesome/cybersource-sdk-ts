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
import { Ptsv2paymentsidreversalsClientReferenceInformation } from './ptsv2paymentsidreversals-client-reference-information';
import { Ptsv2paymentsidvoidsOrderInformation } from './ptsv2paymentsidvoids-order-information';
import { Ptsv2paymentsidvoidsPaymentInformation } from './ptsv2paymentsidvoids-payment-information';
/**
 * 
 * @export
 * @interface IdVoidsBody3
 */
export interface IdVoidsBody3 {
    /**
     * 
     * @type {Ptsv2paymentsidreversalsClientReferenceInformation}
     * @memberof IdVoidsBody3
     */
    clientReferenceInformation?: Ptsv2paymentsidreversalsClientReferenceInformation;
    /**
     * 
     * @type {Ptsv2paymentsidvoidsPaymentInformation}
     * @memberof IdVoidsBody3
     */
    paymentInformation?: Ptsv2paymentsidvoidsPaymentInformation;
    /**
     * 
     * @type {Ptsv2paymentsidvoidsOrderInformation}
     * @memberof IdVoidsBody3
     */
    orderInformation?: Ptsv2paymentsidvoidsOrderInformation;
}
