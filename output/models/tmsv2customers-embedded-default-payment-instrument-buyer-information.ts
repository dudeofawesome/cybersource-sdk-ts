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
import { Tmsv2customersEmbeddedDefaultPaymentInstrumentBuyerInformationPersonalIdentification } from './tmsv2customers-embedded-default-payment-instrument-buyer-information-personal-identification';
/**
 * 
 * @export
 * @interface Tmsv2customersEmbeddedDefaultPaymentInstrumentBuyerInformation
 */
export interface Tmsv2customersEmbeddedDefaultPaymentInstrumentBuyerInformation {
    /**
     * Company’s tax identifier. This is only used for eCheck service. 
     * @type {string}
     * @memberof Tmsv2customersEmbeddedDefaultPaymentInstrumentBuyerInformation
     */
    companyTaxID?: string;
    /**
     * Currency used for the order. Use the three-character I[ISO Standard Currency Codes.](http://apps.cybersource.com/library/documentation/sbc/quickref/currencies.pdf)  For details about currency as used in partial authorizations, see \"Features for Debit Cards and Prepaid Cards\" in the [Credit Card Services Using the SCMP API Guide](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  For an authorization reversal (`reversalInformation`) or a capture (`processingOptions.capture` is set to `true`), you must use the same currency that you used in your payment authorization request.  #### DCC for First Data Your local currency. For details, see the `currency` field description in [Dynamic Currency Conversion For First Data Using the SCMP API](http://apps.cybersource.com/library/documentation/dev_guides/DCC_FirstData_SCMP/DCC_FirstData_SCMP_API.pdf). 
     * @type {string}
     * @memberof Tmsv2customersEmbeddedDefaultPaymentInstrumentBuyerInformation
     */
    currency?: string;
    /**
     * Date of birth of the customer. Format: YYYY-MM-DD 
     * @type {string}
     * @memberof Tmsv2customersEmbeddedDefaultPaymentInstrumentBuyerInformation
     */
    dateOfBirth?: string;
    /**
     * 
     * @type {Array<Tmsv2customersEmbeddedDefaultPaymentInstrumentBuyerInformationPersonalIdentification>}
     * @memberof Tmsv2customersEmbeddedDefaultPaymentInstrumentBuyerInformation
     */
    personalIdentification?: Array<Tmsv2customersEmbeddedDefaultPaymentInstrumentBuyerInformationPersonalIdentification>;
}
