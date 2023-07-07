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
import { Ptsv2paymentsOrderInformationAmountDetailsTaxDetails } from './ptsv2payments-order-information-amount-details-tax-details';
import { Ptsv2paymentsOrderInformationPassenger } from './ptsv2payments-order-information-passenger';
/**
 * 
 * @export
 * @interface Ptsv2paymentsOrderInformationLineItems
 */
export interface Ptsv2paymentsOrderInformationLineItems {
    /**
     * Type of product. The value for this field is used to identify the product category (electronic, handling, physical, service, or shipping). The default value is `default`.  If you are performing an authorization transaction (`processingOptions.capture` is set to `false`), and you set this field to a value other than `default` or one of the values related to shipping and/or handling, then `orderInformation.lineItems[].quantity`, `orderInformation.lineItems[].productName`, and `orderInformation.lineItems[].productSku` fields are required.  Optional field.  For details, see the `product_code` field description in the [Credit Card Services Using the SCMP API Guide](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/).  #### Tax Calculation Optional field for U.S., Canadian, international tax, and value added taxes.  To use the tax calculation service, use values listed in the Tax Product Code Guide. For information about this document, contact customer support. See \"Product Codes,\" page 14, for more information. 
     * @type {string}
     * @memberof Ptsv2paymentsOrderInformationLineItems
     */
    productCode?: string;
    /**
     * For an authorization or capture transaction (`processingOptions.capture` is `true` or `false`), this field is required when `orderInformation.lineItems[].productCode` is not `default` or one of the other values that are related to shipping and/or handling.  #### Tax Calculation Optional field for U.S., Canadian, international tax, and value added taxes. 
     * @type {string}
     * @memberof Ptsv2paymentsOrderInformationLineItems
     */
    productName?: string;
    /**
     * Product identifier code. Also known as the Stock Keeping Unit (SKU) code for the product.  For an authorization or capture transaction (`processingOptions.capture` is set to `true` or `false`), this field is required when `orderInformation.lineItems[].productCode` is not set to **default** or one of the other values that are related to shipping and/or handling.  #### Tax Calculation Optional field for U.S. and Canadian taxes. Not applicable to international and value added taxes. For an authorization or capture transaction (`processingOptions.capture` is set to `true` or `false`), this field is required when `orderInformation.lineItems[].productCode` is not `default` or one of the values related to shipping and/or handling. 
     * @type {string}
     * @memberof Ptsv2paymentsOrderInformationLineItems
     */
    productSku?: string;
    /**
     * Number of units for this order. Must be a non-negative integer.  The default is `1`. For an authorization or capture transaction (`processingOptions.capture` is set to `true` or `false`), this field is required when `orderInformation.lineItems[].productCode` is not `default` or one of the other values related to shipping and/or handling.  #### Tax Calculation Optional field for U.S., Canadian, international tax, and value added taxes. 
     * @type {number}
     * @memberof Ptsv2paymentsOrderInformationLineItems
     */
    quantity?: number;
    /**
     * Per-item price of the product. This value for this field cannot be negative.  You must include either this field or the request-level field `orderInformation.amountDetails.totalAmount` in your request.  You can include a decimal point (.), but you cannot include any other special characters. The value is truncated to the correct number of decimal places.  #### DCC with a Third-Party Provider Set this field to the converted amount that was returned by the DCC provider. You must include either the 1st line item in the order and this field, or the request-level field `orderInformation.amountDetails.totalAmount` in your request.  #### FDMS South If you accept IDR or CLP currencies, see the entry for FDMS South in the [Merchant Descriptors Using the SCMP API Guide.] (https://apps.cybersource.com/library/documentation/dev_guides/Merchant_Descriptors_SCMP_API/html/)  #### Tax Calculation Required field for U.S., Canadian, international and value added taxes.  #### Zero Amount Authorizations If your processor supports zero amount authorizations, you can set this field to 0 for the authorization to check if the card is lost or stolen.  #### Maximum Field Lengths For GPN and JCN Gateway: Decimal (10) All other processors: Decimal (15) 
     * @type {string}
     * @memberof Ptsv2paymentsOrderInformationLineItems
     */
    unitPrice?: string;
    /**
     * Unit of measure, or unit of measure code, for the item. 
     * @type {string}
     * @memberof Ptsv2paymentsOrderInformationLineItems
     */
    unitOfMeasure?: string;
    /**
     * Total amount for the item. Normally calculated as the unit price times quantity.  When `orderInformation.lineItems[].productCode` is \"gift_card\", this is the purchase amount total for prepaid gift cards in major units.  Example: 123.45 USD = 123 
     * @type {string}
     * @memberof Ptsv2paymentsOrderInformationLineItems
     */
    totalAmount?: string;
    /**
     * Total tax to apply to the product. This value cannot be negative. The tax amount and the offer amount must be in the same currency. The tax amount field is additive.  The following example uses a two-exponent currency such as USD:   1. You include each line item in your request.  ..- 1st line item has amount=10.00, quantity=1, and taxAmount=0.80  ..- 2nd line item has amount=20.00, quantity=1, and taxAmount=1.60  2. The total amount authorized will be 32.40, not 30.00 with 2.40 of tax included.  Optional field.  #### Airlines processing Tax portion of the order amount. This value cannot exceed 99999999999999 (fourteen 9s). Format: English characters only. Optional request field for a line item.  #### Tax Calculation Optional field for U.S., Canadian, international tax, and value added taxes.  Note if you send this field in your tax request, the value in the field will override the tax engine 
     * @type {string}
     * @memberof Ptsv2paymentsOrderInformationLineItems
     */
    taxAmount?: string;
    /**
     * Tax rate applied to the item.  For details, see `tax_rate` field description in the [Level II and Level III Processing Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/Level_2_3_SCMP_API/html/)  **Visa**: Valid range is 0.01 to 0.99 (1% to 99%, with only whole percentage values accepted; values with additional decimal places will be truncated).  **Mastercard**: Valid range is 0.00001 to 0.99999 (0.001% to 99.999%). 
     * @type {string}
     * @memberof Ptsv2paymentsOrderInformationLineItems
     */
    taxRate?: string;
    /**
     * Flag to indicate how you handle discount at the line item level.   - 0: no line level discount provided  - 1: tax was calculated on the post-discount line item total  - 2: tax was calculated on the pre-discount line item total  `Note` Visa will inset 0 (zero) if an invalid value is included in this field.  This field relates to the value in the _lineItems[].discountAmount_ field. 
     * @type {string}
     * @memberof Ptsv2paymentsOrderInformationLineItems
     */
    taxAppliedAfterDiscount?: string;
    /**
     * Flag to indicate whether tax is exempted or not included.   - 0: tax not included  - 1: tax included  - 2: transaction is not subject to tax 
     * @type {string}
     * @memberof Ptsv2paymentsOrderInformationLineItems
     */
    taxStatusIndicator?: string;
    /**
     * Type of tax being applied to the item.  For possible values, see the processor-specific field descriptions in [Level II and Level III Processing Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/Level_2_3_SCMP_API/html/):  #### FDC Nashville Global - `alternate_tax_type_applied` - `alternate_tax_type_identifier`  #### Worldpay VAP - `alternate_tax_type_identifier`  #### RBS WorldPay Atlanta - `tax_type_applied`  #### TSYS Acquiring Solutions - `tax_type_applied` - `local_tax_indicator`  #### Chase Paymentech Solutions - `tax_type_applied`  #### Elavon Americas - `local_tax_indicator`  #### FDC Compass - `tax_type_applied`  #### OmniPay Direct - `local_tax_indicator` 
     * @type {string}
     * @memberof Ptsv2paymentsOrderInformationLineItems
     */
    taxTypeCode?: string;
    /**
     * Flag that indicates whether the tax amount is included in the Line Item Total.  Possible values:  - **true**  - **false** 
     * @type {boolean}
     * @memberof Ptsv2paymentsOrderInformationLineItems
     */
    amountIncludesTax?: boolean;
    /**
     * Flag to indicate whether the purchase is categorized as goods or services. Possible values:   - 00: goods  - 01: services 
     * @type {string}
     * @memberof Ptsv2paymentsOrderInformationLineItems
     */
    typeOfSupply?: string;
    /**
     * Commodity code or International description code used to classify the item. Contact your acquirer for a list of codes. 
     * @type {string}
     * @memberof Ptsv2paymentsOrderInformationLineItems
     */
    commodityCode?: string;
    /**
     * Discount applied to the item.
     * @type {string}
     * @memberof Ptsv2paymentsOrderInformationLineItems
     */
    discountAmount?: string;
    /**
     * Flag that indicates whether the amount is discounted.  If you do not provide a value but you set Discount Amount to a value greater than zero, then CyberSource sets this field to **true**.  Possible values:  - **true**  - **false** 
     * @type {boolean}
     * @memberof Ptsv2paymentsOrderInformationLineItems
     */
    discountApplied?: boolean;
    /**
     * Rate the item is discounted. Maximum of 2 decimal places.  Example 5.25 (=5.25%) 
     * @type {string}
     * @memberof Ptsv2paymentsOrderInformationLineItems
     */
    discountRate?: string;
    /**
     * Field to support an invoice number for a transaction. You must specify the number of line items that will include an invoice number. By default, the first line item will include an invoice number field. The invoice number field can be included for up to 10 line items. 
     * @type {string}
     * @memberof Ptsv2paymentsOrderInformationLineItems
     */
    invoiceNumber?: string;
    /**
     * 
     * @type {Array<Ptsv2paymentsOrderInformationAmountDetailsTaxDetails>}
     * @memberof Ptsv2paymentsOrderInformationLineItems
     */
    taxDetails?: Array<Ptsv2paymentsOrderInformationAmountDetailsTaxDetails>;
    /**
     * Information about the product code used for the line item. Possible values: - `E`: The product code is `electronic_software`. - `P`: The product code is not `electronic_software`.  For details, see the `fulfillmentType` field description in [Business Center Reporting User Guide.] (https://apps.cybersource.com/library/documentation/dev_guides/reporting_and_reconciliation/Reporting_User/html/) 
     * @type {string}
     * @memberof Ptsv2paymentsOrderInformationLineItems
     */
    fulfillmentType?: string;
    /**
     * Weight of the item.  For details, see `weight_amount` field description in [Level II and Level III Processing Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/Level_2_3_SCMP_API/html/) 
     * @type {string}
     * @memberof Ptsv2paymentsOrderInformationLineItems
     */
    weight?: string;
    /**
     * Type of weight.  Possible values: - B: Billed weight - N: Actual net weight  For details, see `weight_identifier` offer-level field description in [Level II and Level III Processing Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/Level_2_3_SCMP_API/html/) 
     * @type {string}
     * @memberof Ptsv2paymentsOrderInformationLineItems
     */
    weightIdentifier?: string;
    /**
     * Code that specifies the unit of measurement for the weight amount. For example, `OZ` specifies ounce and `LB` specifies pound. The possible values are defined by the ANSI Accredited Standards Committee (ASC).  For details, see `weight_unit_measurement` offer-level field description in [Level II and Level III Processing Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/Level_2_3_SCMP_API/html/) 
     * @type {string}
     * @memberof Ptsv2paymentsOrderInformationLineItems
     */
    weightUnit?: string;
    /**
     * Code that identifies the value of the corresponding `orderInformation.lineItems[].referenceDataNumber` field.  Possible values: - AN: Client-defined asset code - MG: Manufacturer's part number - PO: Purchase order number - SK: Supplier stock keeping unit number - UP: Universal product code - VC: Supplier catalog number - VP: Vendor part number  This field is a pass-through, which means that CyberSource does not verify the value or modify it in any way before sending it to the processor.  For details, see `reference_data_#_code` field description in [Level II and Level III Processing Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/Level_2_3_SCMP_API/html/) 
     * @type {string}
     * @memberof Ptsv2paymentsOrderInformationLineItems
     */
    referenceDataCode?: string;
    /**
     * Reference number.  The meaning of this value is identified by the value of the corresponding `referenceDataCode` field. See Numbered Elements.  The maximum length for this field depends on the value of the corresponding `referenceDataCode` field: - When the code is `PO`, the maximum length for the reference number is 22. - When the code is `VC`, the maximum length for the reference number is 20. - For all other codes, the maximum length for the reference number is 30.  This field is a pass-through, which means that CyberSource does not verify the value or modify it in any way before sending it to the processor. 
     * @type {string}
     * @memberof Ptsv2paymentsOrderInformationLineItems
     */
    referenceDataNumber?: string;
    /**
     * Brief description of item.
     * @type {string}
     * @memberof Ptsv2paymentsOrderInformationLineItems
     */
    productDescription?: string;
    /**
     * When `orderInformation.lineItems[].productCode` is \"gift_card\", this is the currency used for the gift card purchase.  For details, see `pa_gift_card_currency` field description in [CyberSource Payer Authentication Using the SCMP API.] (https://apps.cybersource.com/library/documentation/dev_guides/Payer_Authentication_SCMP_API/Payer_Authentication_SCMP_API.pdf)  For the possible values, see the [ISO Standard Currency Codes.](http://apps.cybersource.com/library/documentation/sbc/quickref/currencies.pdf) 
     * @type {number}
     * @memberof Ptsv2paymentsOrderInformationLineItems
     */
    giftCardCurrency?: number;
    /**
     * Destination to where the item will be shipped. Example: Commercial, Residential, Store 
     * @type {string}
     * @memberof Ptsv2paymentsOrderInformationLineItems
     */
    shippingDestinationTypes?: string;
    /**
     * This field is only used in DM service.  Determines whether to assign risk to the order if the billing and shipping addresses specify different cities, states, or countries. This field can contain one of the following values: - true: Orders are assigned only slight additional risk if billing and shipping addresses are different. - false: Orders are assigned higher additional risk if billing and shipping addresses are different. 
     * @type {boolean}
     * @memberof Ptsv2paymentsOrderInformationLineItems
     */
    gift?: boolean;
    /**
     * 
     * @type {Ptsv2paymentsOrderInformationPassenger}
     * @memberof Ptsv2paymentsOrderInformationLineItems
     */
    passenger?: Ptsv2paymentsOrderInformationPassenger;
}
