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
 * @interface PtsV2PaymentsPost201ResponseConsumerAuthenticationInformationStrongAuthenticationIssuerInformation
 */
export interface PtsV2PaymentsPost201ResponseConsumerAuthenticationInformationStrongAuthenticationIssuerInformation {
    /**
     * Possible values: Visa Platform Connect - `8401` Merchant not participating in Visa Trusted Listing Program. - `8402` Issuer not participating in Visa Trusted Listing Program. - `8403` Cardholder has not trusted the merchant (supplied by Visa Net). - `8404` Indeterminate or invalid issuer response. - `8473` Cardholder has not trusted the merchant (issuer-supplied). - `8474` Did not meet the exemption criteria (issuer-supplied).  Upto 20 Values may be received in a transaction. 
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseConsumerAuthenticationInformationStrongAuthenticationIssuerInformation
     */
    riskAnalysisExemptionResult?: string;
    /**
     * Possible values: Visa Platform Connect - `2` Trusted merchant exemption validated/honored. - `3` Trusted merchant exemption failed validation/not honored. 
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseConsumerAuthenticationInformationStrongAuthenticationIssuerInformation
     */
    trustedMerchantExemptionResult?: string;
}
