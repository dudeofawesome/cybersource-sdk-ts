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
import { Riskv1addressverificationsOrderInformationBillTo } from './riskv1addressverifications-order-information-bill-to';
import { Riskv1addressverificationsOrderInformationLineItems } from './riskv1addressverifications-order-information-line-items';
import { Riskv1addressverificationsOrderInformationShipTo } from './riskv1addressverifications-order-information-ship-to';
/**
 * 
 * @export
 * @interface Riskv1addressverificationsOrderInformation
 */
export interface Riskv1addressverificationsOrderInformation {
    /**
     * 
     * @type {Riskv1addressverificationsOrderInformationBillTo}
     * @memberof Riskv1addressverificationsOrderInformation
     */
    billTo?: Riskv1addressverificationsOrderInformationBillTo;
    /**
     * 
     * @type {Riskv1addressverificationsOrderInformationShipTo}
     * @memberof Riskv1addressverificationsOrderInformation
     */
    shipTo?: Riskv1addressverificationsOrderInformationShipTo;
    /**
     * 
     * @type {Array<Riskv1addressverificationsOrderInformationLineItems>}
     * @memberof Riskv1addressverificationsOrderInformation
     */
    lineItems?: Array<Riskv1addressverificationsOrderInformationLineItems>;
}
