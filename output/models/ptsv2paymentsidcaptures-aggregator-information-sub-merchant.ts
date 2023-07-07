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
 * @interface Ptsv2paymentsidcapturesAggregatorInformationSubMerchant
 */
export interface Ptsv2paymentsidcapturesAggregatorInformationSubMerchant {
    /**
     * Sub-merchant’s business name.  #### American Express Direct The maximum length of the sub-merchant name depends on the length of the aggregator name. The combined length for both values must not exceed 36 characters.  #### CyberSource through VisaNet With American Express, the maximum length of the sub-merchant name depends on the length of the aggregator name. The combined length for both values must not exceed 36 characters. The value for this field does not map to the TC 33 capture file5.  #### FDC Compass This value must consist of uppercase characters.  #### FDC Nashville Global With Mastercard, the maximum length of the sub-merchant name depends on the length of the aggregator name: - If aggregator name length is 1 through 3, maximum sub-merchant name length is 21. - If aggregator name length is 4 through 7, maximum sub-merchant name length is 17. - If aggregator name length is 8 through 12, maximum sub-merchant name length is 12. 
     * @type {string}
     * @memberof Ptsv2paymentsidcapturesAggregatorInformationSubMerchant
     */
    name?: string;
    /**
     * First line of the sub-merchant’s street address.  For processor-specific details, see `submerchant_street` field description in [Credit Card Services Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  #### CyberSource through VisaNet The value for this field does not map to the TC 33 capture file5.  #### FDC Compass This value must consist of uppercase characters. 
     * @type {string}
     * @memberof Ptsv2paymentsidcapturesAggregatorInformationSubMerchant
     */
    address1?: string;
    /**
     * Sub-merchant’s city.  For processor-specific details, see `submerchant_city` request field description in [Credit Card Services Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  #### CyberSource through VisaNet The value for this field does not map to the TC 33 capture file5.  #### FDC Compass This value must consist of uppercase characters. 
     * @type {string}
     * @memberof Ptsv2paymentsidcapturesAggregatorInformationSubMerchant
     */
    locality?: string;
    /**
     * Sub-merchant’s state or province.  For possible values and also aggregator support, see `submerchant_state` request field description in [Credit Card Services Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  #### CyberSource through VisaNet The value for this field does not map to the TC 33 capture file5.  #### FDC Compass This value must consist of uppercase characters. 
     * @type {string}
     * @memberof Ptsv2paymentsidcapturesAggregatorInformationSubMerchant
     */
    administrativeArea?: string;
    /**
     * Partial postal code for the sub-merchant’s address.  For processor-specific details, see `submerchant_postal_code` request field description in [Credit Card Services Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  #### CyberSource through VisaNet The value for this field does not map to the TC 33 capture file5.  #### FDC Compass This value must consist of uppercase characters. 
     * @type {string}
     * @memberof Ptsv2paymentsidcapturesAggregatorInformationSubMerchant
     */
    postalCode?: string;
    /**
     * Sub-merchant’s country. Use the [ISO Standard Country Codes](https://developer.cybersource.com/library/documentation/sbc/quickref/countries_alpha_list.pdf).  #### CyberSource through VisaNet The value for this field does not map to the TC 33 capture file.  #### FDC Compass This value must consist of uppercase characters.  For details, see the `submerchant_country` request-level field description in [Credit Card Services Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/) 
     * @type {string}
     * @memberof Ptsv2paymentsidcapturesAggregatorInformationSubMerchant
     */
    country?: string;
    /**
     * Sub-merchant’s email address.  **Maximum length for processors**   - American Express Direct: 40  - CyberSource through VisaNet: 40  - FDC Compass: 40  - FDC Nashville Global: 19  #### CyberSource through VisaNet With American Express, the value for this field corresponds to the following data in the TC 33 capture file: - Record: CP01 TCRB - Position: 25-64 - Field: American Express Seller E-mail Address  **Note** The TC 33 Capture file contains information about the purchases and refunds that a merchant submits to CyberSource. CyberSource through VisaNet creates the TC 33 Capture file at the end of the day and sends it to the merchant’s acquirer, who uses this information to facilitate end-of-day clearing processing with payment card companies. 
     * @type {string}
     * @memberof Ptsv2paymentsidcapturesAggregatorInformationSubMerchant
     */
    email?: string;
    /**
     * Sub-merchant’s telephone number.  **Maximum length for procesors**   - American Express Direct: 20  - CyberSource through VisaNet: 20  - FDC Compass: 13  - FDC Nashville Global: 10  #### CyberSource through VisaNet With American Express, the value for this field corresponds to the following data in the TC 33 capture file5: - Record: CP01 TCRB - Position: 5-24 - Field: American Express Seller Telephone Number  **FDC Compass**\\ This value must consist of uppercase characters. Use one of these recommended formats:\\ `NNN-NNN-NNNN`\\ `NNN-AAAAAAA` 
     * @type {string}
     * @memberof Ptsv2paymentsidcapturesAggregatorInformationSubMerchant
     */
    phoneNumber?: string;
    /**
     * The ID you assigned to your sub-merchant. CyberSource through VisaNet: For American Express transaction, the value for this field corresponds to the following data in the TC 33 capture file: - Record: CP01 TCRB - Position: 65-84 - Field: American Express Seller ID For  Mastercard transactions, the value for this field corresponds to the following data in the TC 33 capture file: - Record: CP01 TCR6 - Position: 117-131 - Field: Mastercard Sub-Merchant ID FDC Compass: This value must consist of uppercase characters.  American Express Direct: String (20) CyberSource through VisaNet with American Express: String (20) CyberSource through VisaNet with Mastercard: String (15) FDC Compass: String (20) FDC Nashville Global: String (14) 
     * @type {string}
     * @memberof Ptsv2paymentsidcapturesAggregatorInformationSubMerchant
     */
    id?: string;
}
