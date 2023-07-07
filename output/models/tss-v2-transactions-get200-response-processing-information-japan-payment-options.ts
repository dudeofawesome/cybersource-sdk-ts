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
 * @interface TssV2TransactionsGet200ResponseProcessingInformationJapanPaymentOptions
 */
export interface TssV2TransactionsGet200ResponseProcessingInformationJapanPaymentOptions {
    /**
     * This value is a 2-digit code indicating the payment method. Use Payment Method Code value that applies to the tranasction. - 10 (One-time payment) - 21, 22, 23, 24  (Bonus(one-time)payment) - 61 (Installment payment) - 31, 32, 33, 34  (Integrated (Bonus + Installment)payment) - 80 (Revolving payment) 
     * @type {string}
     * @memberof TssV2TransactionsGet200ResponseProcessingInformationJapanPaymentOptions
     */
    paymentMethod?: string;
    /**
     * Unique Japan Credit Card Association (JCCA) terminal identifier.  The difference between this field and the `pointOfSaleInformation.terminalID` field is that you can define `pointOfSaleInformation.terminalID`, but `processingInformation.japanPaymentOptions.terminalId` is defined by the JCCA and is used only in Japan.  This field is supported only on CyberSource through VisaNet and JCN Gateway.  Optional field. 
     * @type {string}
     * @memberof TssV2TransactionsGet200ResponseProcessingInformationJapanPaymentOptions
     */
    terminalId?: string;
    /**
     * Business name in Japanese characters. This field is supported only on JCN Gateway and for the Sumitomo Mitsui Card Co. acquirer on CyberSource through VisaNet. 
     * @type {string}
     * @memberof TssV2TransactionsGet200ResponseProcessingInformationJapanPaymentOptions
     */
    businessName?: string;
    /**
     * Business name in Katakana characters. This field is supported only on JCN Gateway and for the Sumitomo Mitsui Card Co. acquirer on CyberSource through VisaNet. 
     * @type {string}
     * @memberof TssV2TransactionsGet200ResponseProcessingInformationJapanPaymentOptions
     */
    businessNameKatakana?: string;
}
