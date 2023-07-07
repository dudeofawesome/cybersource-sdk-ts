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
 * @interface PtsV2PaymentsPost201ResponseInstallmentInformation
 */
export interface PtsV2PaymentsPost201ResponseInstallmentInformation {
    /**
     * Additional costs charged by the issuer to fund the installment payments.  This field is included in the authorization reply for the Crediario eligibility request when the issuer approves the cardholder's request for Crediario installment payments in Brazil.  For details, see \"Installment Payments on CyberSource through VisaNet\" in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  This field is supported only for Crediario installment payments in Brazil on **CyberSource through VisaNet**.  The value for this field corresponds to the following data in the TC 33 capture file1: - Record: CP01 TCR9 - Position: 128-139 - Field: Total Other Costs 
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseInstallmentInformation
     */
    additionalCosts?: string;
    /**
     * Additional costs divided by the amount funded.  For example: - A value of 1.0 specifies 1%. - A value of 4.0 specifies 4%.  This field is included in the authorization reply for the Crediario eligibility request when the issuer approves the cardholder's request for Crediario installment payments in Brazil.  For details, see \"Installment Payments on CyberSource through VisaNet\" in [Credit Card Services Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  This field is supported only for Crediario installment payments in Brazil on **CyberSource through VisaNet**.  The value for this field corresponds to the following data in the TC 33 capture file1: - Record: CP01 TCR9 - Position: 140-143 - Field: Percent of Total Other Costs 
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseInstallmentInformation
     */
    additionalCostsPercentage?: string;
    /**
     * Amount for the current installment payment.  This field is supported only for CyberSource through VisaNet.  For details, see `installment_amount` field description in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/) 
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseInstallmentInformation
     */
    amount?: string;
    /**
     * Amount funded.  This field is included in the authorization reply for the Crediario eligibility request when the issuer approves the cardholder's request for Crediario installment payments in Brazil.  For details, see \"Installment Payments on CyberSource through VisaNet\" in [Credit Card Services Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  This field is supported only for Crediario installment payments in Brazil on **CyberSource through VisaNet**.  The value for this field corresponds to the following data in the TC 33 capture file1: - Record: CP01 TCR9 - Position: 48-59 - Field: Total Amount Funded 
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseInstallmentInformation
     */
    amountFunded?: string;
    /**
     * Amount requested divided by the amount funded.  For example: - A value of 90.0 specifies 90%. - A value of 93.7 specifies 93.7%.  This field is included in the authorization reply for the Crediario eligibility request when the issuer approves the cardholder's request for Crediario installment payments in Brazil.  For details, see \"Installment Payments on CyberSource through VisaNet\" in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  This field is supported only for Crediario installment payments in Brazil on **CyberSource through VisaNet**.  The value for this field corresponds to the following data in the TC 33 capture file1: - Record: CP01 TCR9 - Position: 60-63 - Field: Percent of Amount Requested 
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseInstallmentInformation
     */
    amountRequestedPercentage?: string;
    /**
     * Annual cost of financing the installment payments.  This field is included in the authorization reply for the Crediario eligibility request when the issuer approves the cardholder's request for Crediario installment payments in Brazil.  For details, see \"Installment Payments on CyberSource through VisaNet\" in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  This field is supported only for Crediario installment payments in Brazil on **CyberSource through VisaNet**.  The value for this field corresponds to the following data in the TC 33 capture file1: - Record: CP01 TCR9 - Position: 158-164 - Field: Annual Total Cost of Financing 
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseInstallmentInformation
     */
    annualFinancingCost?: string;
    /**
     * Annual interest rate.  For example: - A value of 1.0 specifies 1%. - A value of 4.0 specifies 4%.  This field is included in the authorization reply for the Crediario eligibility request when the issuer approves the cardholder's request for Crediario installment payments in Brazil.  For details, see \"Installment Payments on CyberSource through VisaNet\" in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  This field is supported only for Crediario installment payments in Brazil on **CyberSource through VisaNet**.  The value for this field corresponds to the following data in the TC 33 capture file1: - Record: CP01 TCR9 - Position: 151-157 - Field: Annual Interest Rate 
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseInstallmentInformation
     */
    annualInterestRate?: string;
    /**
     * Expenses charged by the issuer to fund the installment payments.  This field is included in the authorization reply for the Crediario eligibility request when the issuer approves the cardholder's request for Crediario installment payments in Brazil.  For details, see \"Installment Payments on CyberSource through VisaNet\" in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  This field is supported only for Crediario installment payments in Brazil on **CyberSource through VisaNet**.  The value for this field corresponds to the following data in the TC 33 capture file1: - Record: CP01 TCR9 - Position: 64-75 - Field: Total Expenses 
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseInstallmentInformation
     */
    expenses?: string;
    /**
     * Expenses divided by the amount funded.  For example: - A value of 1.0 specifies 1%. - A value of 4.0 specifies 4%.  This field is included in the authorization reply for the Crediario eligibility request when the issuer approves the cardholder's request for Crediario installment payments in Brazil.  For details, see \"Installment Payments on CyberSource through VisaNet\" in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  This field is supported only for Crediario installment payments in Brazil on **CyberSource through VisaNet**.  The value for this field corresponds to the following data in the TC 33 capture file1: - Record: CP01 TCR9 - Position: 76-79 - Field: Percent of Total Expenses 
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseInstallmentInformation
     */
    expensesPercentage?: string;
    /**
     * Fees charged by the issuer to fund the installment payments.  This field is included in the authorization reply for the Crediario eligibility request when the issuer approves the cardholder's request for Crediario installment payments in Brazil.  For details, see \"Installment Payments on CyberSource through VisaNet\" in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  This field is supported only for Crediario installment payments in Brazil on **CyberSource through VisaNet**.  The value for this field corresponds to the following data in the TC 33 capture file1: - Record: CP01 TCR9 - Position: 80-91 - Field: Total Fees 
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseInstallmentInformation
     */
    fees?: string;
    /**
     * Fees divided by the amount funded.  For example: - A value of 1.0 specifies 1%. - A value of 4.0 specifies 4%.  This field is included in the authorization reply for the Crediario eligibility request when the issuer approves the cardholder's request for Crediario installment payments in Brazil.  For details, see \"Installment Payments on CyberSource through VisaNet\" in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  This field is supported only for Crediario installment payments in Brazil on CyberSource through VisaNet.  The value for this field corresponds to the following data in the TC 33 capture file1: - Record: CP01 TCR9 - Position: 92-95 - Field: Percent of Total Fees 
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseInstallmentInformation
     */
    feesPercentage?: string;
    /**
     * Frequency of the installment payments. When you do not include this field in a request for a Crediario installment payment, CyberSource sends a space character to the processor.  For details, see `installment_frequency` field description in the [Credit Card Services Using the SCMP API Guide](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  This field is supported only for CyberSource through VisaNet. Possible values: - `B`: Biweekly - `M`: Monthly - `W`: Weekly  For Crediario installment payments, the value for this field corresponds to the following data in the TC 33 capture file5: - Record: CP01 TCR9 - Position: 41 - Field: Installment Frequency  For details, see \"Installment Payments\" in the [Credit Card Services Using the SCMP API Guide](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/) 
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseInstallmentInformation
     */
    frequency?: string;
    /**
     * Insurance charged by the issuer to fund the installment payments.  This field is included in the authorization reply for the Crediario eligibility request when the issuer approves the cardholder's request for Crediario installment payments in Brazil.  For details, see \"Installment Payments on CyberSource through VisaNet\" in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  This field is supported only for Crediario installment payments in Brazil on **CyberSource through VisaNet**.  The value for this field corresponds to the following data in the TC 33 capture file1: - Record: CP01 TCR9 - Position: 112-123 - Field: Total Insurance 
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseInstallmentInformation
     */
    insurance?: string;
    /**
     * Insurance costs divided by the amount funded.  For example: - A value of 1.0 specifies 1%. - A value of 4.0 specifies 4%.  This field is included in the authorization reply for the Crediario eligibility request when the issuer approves the cardholder's request for Crediario installment payments in Brazil.  For details, see \"Installment Payments on CyberSource through VisaNet\" in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  This field is supported only for Crediario installment payments in Brazil on **CyberSource through VisaNet**.  The value for this field corresponds to the following data in the TC 33 capture file1: - Record: CP01 TCR9 - Position: 124-127 - Field: Percent Of Total Insurance 
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseInstallmentInformation
     */
    insurancePercentage?: string;
    /**
     * Invoice information that you want to provide to the issuer. This value is similar to a tracking number and is the same for all installment payments for one purchase.  This field is supported only for installment payments with Mastercard on CyberSource through VisaNet in Brazil.  For details, see \"Installment Payments on CyberSource through VisaNet\" in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  The value for this field corresponds to the following data in the TC 33 capture file5: - Record: CP07 TCR4 - Position: 51-70 - Field: Purchase Identification 
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseInstallmentInformation
     */
    invoiceData?: string;
    /**
     * Monthly interest rate.  For example: - A value of 1.0 specifies 1%. - A value of 4.0 specifies 4%.  This field is included in the authorization reply for the Crediario eligibility request when the issuer approves the cardholder's request for Crediario installment payments in Brazil.  For details, see \"Installment Payments on CyberSource through VisaNet\" in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  This field is supported only for Crediario installment payments in Brazil on **CyberSource through VisaNet**.  The value for this field corresponds to the following data in the TC 33 capture file1: - Record: CP01 TCR9 - Position: 144-150 - Field: Monthly Interest Rate 
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseInstallmentInformation
     */
    monthlyInterestRate?: string;
    /**
     * #### American Express Direct, Cielo, and CyberSource Latin American Processing Flag that indicates the type of funding for the installment plan associated with the payment.  Possible values: - `1`: Merchant-funded installment plan - `2`: Issuer-funded installment plan If you do not include this field in the request, CyberSource uses the value in your CyberSource account.  To change the value in your CyberSource account, contact CyberSource Customer Service. For details, see `installment_plan_type` field description in the [Credit Card Services Using the SCMP API Guide](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  #### CyberSource through VisaNet and American Express Defined code that indicates the type of installment plan for this transaction.  Contact American Express for: - Information about the kinds of installment plans that American Express provides - Values for this field  For installment payments with American Express in Brazil, the value for this field corresponds to the following data in the TC 33 capture file*: - Record: CP07 TCR3 - Position: 5-6 - Field: Plan Type  * The TC 33 Capture file contains information about the purchases and refunds that a merchant submits to CyberSource. CyberSource through VisaNet creates the TC 33 Capture file at the end of the day and sends it to the merchant’s acquirer, who uses this information to facilitate end-of-day clearing processing with payment card companies.  #### CyberSource through VisaNet with Visa or Mastercard Flag indicating the type of funding for the installment plan associated with the payment. Possible values: - 1 or 01: Merchant-funded installment plan - 2 or 02: Issuer-funded installment plan - 43: Crediario installment plan—only with Visa in Brazil For details, see \"Installment Payments on CyberSource through VisaNet\" in the [Credit Card Services Using the SCMP API Guide](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  For installment payments with Visa in Brazil, the value for this field corresponds to the following data in the TC 33 capture file5: - Record: CP07 TCR1 - Position: 5-6 - Field: Installment Type  For all other kinds of installment payments, the value for this field corresponds to the following data in the TC 33 capture file5: - Record: CP01 TCR5 - Position: 39-40 - Field: Installment Plan Type (Issuer or Merchant) 
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseInstallmentInformation
     */
    planType?: string;
    /**
     * Installment number when making payments in installments. Used along with `totalCount` to track which payment is being processed.  For example, the second of 5 payments would be passed to CyberSource as `sequence` = 2 and `totalCount` = 5.  For details, see \"Installment Payments\" in the [Credit Card Services Using the SCMP API Guide](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  #### Chase Paymentech Solutions and FDC Compass This field is optional because this value is required in the merchant descriptors. For details, see \"Chase Paymentech Solutions Merchant Descriptors\" and \"FDC Compass Merchant Descriptors\" in the [Merchant Descriptors Using the SCMP API] (https://apps.cybersource.com/library/documentation/dev_guides/Merchant_Descriptors_SCMP_API/html/)  #### CyberSource through VisaNet When you do not include this field in a request for a Crediario installment payment, CyberSource sends a value of 0 to the processor.  For Crediario installment payments, the value for this field corresponds to the following data in the TC 33 capture file*: - Record: CP01 TCR9 - Position: 38-40 - Field: Installment Payment Number  * The TC 33 Capture file contains information about the purchases and refunds that a merchant submits to CyberSource. CyberSource through VisaNet creates the TC 33 Capture file at the end of the day and sends it to the merchant’s acquirer, who uses this information to facilitate end-of-day clearing processing with payment card companies. 
     * @type {number}
     * @memberof PtsV2PaymentsPost201ResponseInstallmentInformation
     */
    sequence?: number;
    /**
     * Taxes collected by the issuer to fund the installment payments.  This field is included in the authorization reply for the Crediario eligibility request when the issuer approves the cardholder's request for Crediario installment payments in Brazil.  For details, see \"Installment Payments on CyberSource through VisaNet\" in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  This field is supported only for Crediario installment payments in Brazil on **CyberSource through VisaNet**.  The value for this field corresponds to the following data in the TC 33 capture file1: - Record: CP01 TCR9 - Position: 96-107 - Field: Total Taxes 
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseInstallmentInformation
     */
    taxes?: string;
    /**
     * Taxes divided by the amount funded.  For example: - A value of 1.0 specifies 1%. - A value of 4.0 specifies 4%.  This field is included in the authorization reply for the Crediario eligibility request when the issuer approves the cardholder's request for Crediario installment payments in Brazil.  For details, see \"Installment Payments on CyberSource through VisaNet\" in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  This field is supported only for Crediario installment payments in Brazil on **CyberSource through VisaNet**.  The value for this field corresponds to the following data in the TC 33 capture file1: - Record: CP01 TCR9 - Position: 108-111 - Field: Percent of Total Taxes 
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseInstallmentInformation
     */
    taxesPercentage?: string;
    /**
     * Total amount of the loan that is being paid in installments. This field is supported only for CyberSource through VisaNet.  For details, see \"Installment Payments\" in [Credit Card Services Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/) 
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseInstallmentInformation
     */
    totalAmount?: string;
    /**
     * Total number of installments when making payments in installments.  For details, see \"Installment Payments\" in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  #### Chase Paymentech Solutions and FDC Compass This field is optional because this value is required in the merchant descriptors.  For details, see \"Chase Paymentech Solutions Merchant Descriptors\" and \"FDC Compass Merchant Descriptors\" in the [Merchant Descriptors Using the SCMP API.] (https://apps.cybersource.com/library/documentation/dev_guides/Merchant_Descriptors_SCMP_API/html/)  #### American Express Direct, Cielo, and Comercio Latino This value is the total number of installments you approved.  #### CyberSource Latin American Processing in Brazil This value is the total number of installments that you approved. The default is 1.  #### All Other Processors This value is used along with _sequence_ to track which payment is being processed.  For example, the second of 5 payments would be passed to CyberSource as _sequence_ = 2 and _totalCount_ = 5.  #### CyberSource through VisaNet For Crediario installment payments, the value for this field corresponds to the following data in the TC 33 capture file*: - Record: CP01 TCR9 - Position: 23-25 - Field: Number of Installments  For installment payments with American Express in Brazil, the value for this field corresponds to the following data in the TC 33 capture file*: - Record: CP07 TCR3 - Position: 7-8 - Field: Number of Installments  For installment payments with Visa in Brazil, the value for this field corresponds to the following data in the TC 33 capture file*: - Record: CP07 TCR1 - Position: 7-8 - Field: Number of Installments  For all other kinds of installment payments, the value for this field corresponds to the following data in the TC 33 capture file*: - Record: CP01 TCR5 - Position: 20-22 - Field: Installment Total Count  **Note** The TC 33 Capture file contains information about the purchases and refunds that a merchant submits to CyberSource. CyberSource through VisaNet creates the TC 33 Capture file at the end of the day and sends it to the merchant’s acquirer, who uses this information to facilitate end-of-day clearing processing with payment card companies. 
     * @type {number}
     * @memberof PtsV2PaymentsPost201ResponseInstallmentInformation
     */
    totalCount?: number;
    /**
     * \"Minimum number of installments offered by the issuer for this purchase. The issuer provides this value when the first installment payment is successful. This field is supported for installment payments with Mastercard on CyberSource through VisaNet in all countries except Brazil, Croatia, Georgia, and Greece. The value for this field corresponds to the following data in the TC 33 capture file: - Record: CP01 TCR5 - Position: 75-76 - Field: Mastercard Minimum Number Of Installments 
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseInstallmentInformation
     */
    minimumTotalCount?: string;
    /**
     * Maximum number of installments offered by the issuer for this purchase. The issuer provides this value when the first installment payment is successful. This field is supported for installment payments with Mastercard on CyberSource through VisaNet in all countries except Brazil, Croatia, Georgia, and Greece. The value for this field corresponds to the following data in the TC 33 capture file1: - Record: CP01 TCR5 - Position: 77-78 - Field: Mastercard Maximum Number Of Installments 
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseInstallmentInformation
     */
    maximumTotalCount?: string;
    /**
     * Amount of the first installment payment. The issuer provides this value when the first installment payment is successful. This field is supported for Mastercard installment payments on CyberSource through VisaNet in all countries except Brazil,Croatia, Georgia, and Greece. The value for this field corresponds to the following data in the TC 33 capture file: - Record: CP01 TCR5 - Position: 23-34 - Field: Amount of Each Installment 
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseInstallmentInformation
     */
    firstInstallmentAmount?: string;
    /**
     * Date of the first installment payment. Format: YYMMDD. When you do not include this field, CyberSource sends a string of six zeros (000000) to the processor. For details, see \"Installment Payments on CyberSource through VisaNet\" in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  This field is supported only for Crediario installment payments in Brazil on CyberSource through VisaNet.  The value for this field corresponds to the following data in the TC 33 capture file: - Record: CP01 TCR9 - Position: 42-47 - Field: Date of First Installment 
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseInstallmentInformation
     */
    firstInstallmentDate?: string;
}
