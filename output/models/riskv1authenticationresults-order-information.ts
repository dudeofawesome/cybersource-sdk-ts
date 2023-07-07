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
import { Riskv1authenticationresultsOrderInformationAmountDetails } from './riskv1authenticationresults-order-information-amount-details';
import { Riskv1authenticationresultsOrderInformationLineItems } from './riskv1authenticationresults-order-information-line-items';
/**
 * 
 * @export
 * @interface Riskv1authenticationresultsOrderInformation
 */
export interface Riskv1authenticationresultsOrderInformation {
    /**
     * 
     * @type {Riskv1authenticationresultsOrderInformationAmountDetails}
     * @memberof Riskv1authenticationresultsOrderInformation
     */
    amountDetails?: Riskv1authenticationresultsOrderInformationAmountDetails;
    /**
     * 
     * @type {Array<Riskv1authenticationresultsOrderInformationLineItems>}
     * @memberof Riskv1authenticationresultsOrderInformation
     */
    lineItems?: Array<Riskv1authenticationresultsOrderInformationLineItems>;
}
