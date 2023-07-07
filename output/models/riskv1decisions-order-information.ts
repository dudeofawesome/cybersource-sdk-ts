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
import { Riskv1decisionsOrderInformationAmountDetails } from './riskv1decisions-order-information-amount-details';
import { Riskv1decisionsOrderInformationBillTo } from './riskv1decisions-order-information-bill-to';
import { Riskv1decisionsOrderInformationLineItems } from './riskv1decisions-order-information-line-items';
import { Riskv1decisionsOrderInformationShipTo } from './riskv1decisions-order-information-ship-to';
import { Riskv1decisionsOrderInformationShippingDetails } from './riskv1decisions-order-information-shipping-details';
/**
 * Contains detailed order-level information.
 * @export
 * @interface Riskv1decisionsOrderInformation
 */
export interface Riskv1decisionsOrderInformation {
    /**
     * 
     * @type {Riskv1decisionsOrderInformationAmountDetails}
     * @memberof Riskv1decisionsOrderInformation
     */
    amountDetails?: Riskv1decisionsOrderInformationAmountDetails;
    /**
     * Indicates whether cardholder is placing an order with a future availability or release date. This field can contain one of these values: - MERCHANDISE_AVAILABLE: Merchandise available - FUTURE_AVAILABILITY: Future availability 
     * @type {string}
     * @memberof Riskv1decisionsOrderInformation
     */
    preOrder?: string;
    /**
     * Expected date that a pre-ordered purchase will be available. Format: YYYYMMDD 
     * @type {string}
     * @memberof Riskv1decisionsOrderInformation
     */
    preOrderDate?: string;
    /**
     * Indicates whether the cardholder is reordering previously purchased merchandise. This field can contain one of these values: - false: First time ordered - true: Reordered 
     * @type {boolean}
     * @memberof Riskv1decisionsOrderInformation
     */
    reordered?: boolean;
    /**
     * 
     * @type {Riskv1decisionsOrderInformationShippingDetails}
     * @memberof Riskv1decisionsOrderInformation
     */
    shippingDetails?: Riskv1decisionsOrderInformationShippingDetails;
    /**
     * 
     * @type {Riskv1decisionsOrderInformationShipTo}
     * @memberof Riskv1decisionsOrderInformation
     */
    shipTo?: Riskv1decisionsOrderInformationShipTo;
    /**
     * Boolean that indicates whether returns are accepted for this order. This field can contain one of the following values: - true: Returns are accepted for this order. - false: Returns are not accepted for this order. 
     * @type {boolean}
     * @memberof Riskv1decisionsOrderInformation
     */
    returnsAccepted?: boolean;
    /**
     * This array contains detailed information about individual products in the order.
     * @type {Array<Riskv1decisionsOrderInformationLineItems>}
     * @memberof Riskv1decisionsOrderInformation
     */
    lineItems?: Array<Riskv1decisionsOrderInformationLineItems>;
    /**
     * 
     * @type {Riskv1decisionsOrderInformationBillTo}
     * @memberof Riskv1decisionsOrderInformation
     */
    billTo?: Riskv1decisionsOrderInformationBillTo;
    /**
     * Total number of articles/items in the order as a numeric decimal count. Possible values: 00 - 99 
     * @type {string}
     * @memberof Riskv1decisionsOrderInformation
     */
    totalOffersCount?: string;
}
