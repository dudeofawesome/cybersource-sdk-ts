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
import { Vasv2taxBuyerInformation } from './vasv2tax-buyer-information';
import { Vasv2taxClientReferenceInformation } from './vasv2tax-client-reference-information';
import { Vasv2taxMerchantInformation } from './vasv2tax-merchant-information';
import { Vasv2taxOrderInformation } from './vasv2tax-order-information';
import { Vasv2taxTaxInformation } from './vasv2tax-tax-information';
/**
 * 
 * @export
 * @interface V2TaxBody
 */
export interface V2TaxBody {
    /**
     * 
     * @type {Vasv2taxClientReferenceInformation}
     * @memberof V2TaxBody
     */
    clientReferenceInformation?: Vasv2taxClientReferenceInformation;
    /**
     * 
     * @type {Vasv2taxTaxInformation}
     * @memberof V2TaxBody
     */
    taxInformation?: Vasv2taxTaxInformation;
    /**
     * 
     * @type {Vasv2taxOrderInformation}
     * @memberof V2TaxBody
     */
    orderInformation?: Vasv2taxOrderInformation;
    /**
     * 
     * @type {Vasv2taxMerchantInformation}
     * @memberof V2TaxBody
     */
    merchantInformation?: Vasv2taxMerchantInformation;
    /**
     * 
     * @type {Vasv2taxBuyerInformation}
     * @memberof V2TaxBody
     */
    buyerInformation?: Vasv2taxBuyerInformation;
}
