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
import { Ptsv2paymentsPaymentInformationCustomer } from './ptsv2payments-payment-information-customer';
import { Ptsv2payoutsPaymentInformationCard } from './ptsv2payouts-payment-information-card';
/**
 * 
 * @export
 * @interface Ptsv2payoutsPaymentInformation
 */
export interface Ptsv2payoutsPaymentInformation {
    /**
     * 
     * @type {Ptsv2payoutsPaymentInformationCard}
     * @memberof Ptsv2payoutsPaymentInformation
     */
    card?: Ptsv2payoutsPaymentInformationCard;
    /**
     * 
     * @type {Ptsv2paymentsPaymentInformationCustomer}
     * @memberof Ptsv2payoutsPaymentInformation
     */
    customer?: Ptsv2paymentsPaymentInformationCustomer;
}
