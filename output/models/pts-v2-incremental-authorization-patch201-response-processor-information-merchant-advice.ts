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
 * @interface PtsV2IncrementalAuthorizationPatch201ResponseProcessorInformationMerchantAdvice
 */
export interface PtsV2IncrementalAuthorizationPatch201ResponseProcessorInformationMerchantAdvice {
    /**
     * Reason the recurring payment transaction was declined. For some processors, this field is used only for Mastercard. For other processors, this field is used for Visa and Mastercard. And for other processors, this field is not implemented.  Possible values:   - `00`: Response not provided.  - `01`: New account information is available. Obtain the new information.  - `02`: Try again later.  - `03`: Do not try again. Obtain another type of payment from the customer.  - `04`: Problem with a token or a partial shipment indicator.  - `21`: Recurring payment cancellation service.  - `99`: An unknown value was returned from the processor.  For processor-specific information, see the `auth_merchant_advice_code` field in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html) 
     * @type {string}
     * @memberof PtsV2IncrementalAuthorizationPatch201ResponseProcessorInformationMerchantAdvice
     */
    code?: string;
    /**
     * Raw merchant advice code sent directly from the processor. This field is used only for Mastercard.  #### CyberSource through VisaNet The value for this field corresponds to the following data in the TC 33 capture file1: - Record: CP01 TCR7 - Position: 96-99 - Field: Response Data-Merchant Advice Code   For processor-specific information, see the `auth_merchant_advice_code_raw` field in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html) 
     * @type {string}
     * @memberof PtsV2IncrementalAuthorizationPatch201ResponseProcessorInformationMerchantAdvice
     */
    codeRaw?: string;
    /**
     * #### Visa Platform Connect The field contains will contain the Account Name Request Result for zero amount Authorization request. Valid values are:  00 = Name Match Performed 01 = Name Match not Performed 02 = Name Match not supported 
     * @type {string}
     * @memberof PtsV2IncrementalAuthorizationPatch201ResponseProcessorInformationMerchantAdvice
     */
    nameMatch?: string;
}
