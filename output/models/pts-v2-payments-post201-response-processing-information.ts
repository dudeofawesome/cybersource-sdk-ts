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
import { PtsV2PaymentsPost201ResponseProcessingInformationBankTransferOptions } from './pts-v2-payments-post201-response-processing-information-bank-transfer-options';
/**
 * 
 * @export
 * @interface PtsV2PaymentsPost201ResponseProcessingInformation
 */
export interface PtsV2PaymentsPost201ResponseProcessingInformation {
    /**
     * 
     * @type {PtsV2PaymentsPost201ResponseProcessingInformationBankTransferOptions}
     * @memberof PtsV2PaymentsPost201ResponseProcessingInformation
     */
    bankTransferOptions?: PtsV2PaymentsPost201ResponseProcessingInformationBankTransferOptions;
    /**
     * Type of digital payment solution for the transaction. Possible Values:   - `visacheckout`: Visa Checkout. This value is required for Visa Checkout transactions. For details, see `payment_solution` field description in [Visa Checkout Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/VCO_SCMP_API/html/)  - `001`: Apple Pay.  - `004`: Cybersource In-App Solution.  - `005`: Masterpass. This value is required for Masterpass transactions on OmniPay Direct. For details, see \"Masterpass\" in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  - `006`: Android Pay.  - `007`: Chase Pay.  - `008`: Samsung Pay.  - `012`: Google Pay.  - `013`: Cybersource P2PE Decryption  - `014`: Mastercard credential on file (COF) payment network token. Returned in authorizations that use a payment network token associated with a TMS token.  - `015`: Visa credential on file (COF) payment network token. Returned in authorizations that use a payment network token associated with a TMS token.  - `027`: Click to Pay. 
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseProcessingInformation
     */
    paymentSolution?: string;
    /**
     * The possible values for the reply field are: - `true` : the airline data was included in the request to the processor. - `false` : the airline data was not included in the request to the processor.  Returned by authorization, capture, or credit services. 
     * @type {boolean}
     * @memberof PtsV2PaymentsPost201ResponseProcessingInformation
     */
    enhancedDataEnabled?: boolean;
}
