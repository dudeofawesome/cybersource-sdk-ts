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
import { Ptsv2paymentsAggregatorInformationSubMerchant } from './ptsv2payments-aggregator-information-sub-merchant';
/**
 * 
 * @export
 * @interface Ptsv2paymentsAggregatorInformation
 */
export interface Ptsv2paymentsAggregatorInformation {
    /**
     * Value that identifies you as a payment aggregator. Get this value from the processor.  #### CyberSource through VisaNet The value for this field corresponds to the following data in the TC 33 capture file5: - Record: CP01 TCR6 - Position: 95-105 - Field: MasterCard Payment Facilitator ID  **FDC Compass**\\ This value must consist of uppercase characters.  For processor-specific information, see the `aggregator_id` field in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html) 
     * @type {string}
     * @memberof Ptsv2paymentsAggregatorInformation
     */
    aggregatorId?: string;
    /**
     * Your payment aggregator business name.  **American Express Direct**\\ The maximum length of the aggregator name depends on the length of the sub-merchant name. The combined length for both values must not exceed 36 characters.\\  #### CyberSource through VisaNet With American Express, the maximum length of the aggregator name depends on the length of the sub-merchant name. The combined length for both values must not exceed 36 characters. The value for this field does not map to the TC 33 capture file5.  **FDC Compass**\\ This value must consist of uppercase characters.  For processor-specific information, see the aggregator_name field in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html) 
     * @type {string}
     * @memberof Ptsv2paymentsAggregatorInformation
     */
    name?: string;
    /**
     * 
     * @type {Ptsv2paymentsAggregatorInformationSubMerchant}
     * @memberof Ptsv2paymentsAggregatorInformation
     */
    subMerchant?: Ptsv2paymentsAggregatorInformationSubMerchant;
}
