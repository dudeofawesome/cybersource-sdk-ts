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
import { Ptsv2paymentsBuyerInformationPersonalIdentification } from './ptsv2payments-buyer-information-personal-identification';
/**
 * 
 * @export
 * @interface PtsV2PaymentsPost201ResponseBuyerInformation
 */
export interface PtsV2PaymentsPost201ResponseBuyerInformation {
    /**
     * Your identifier for the customer.  When a subscription or customer profile is being created, the maximum length for this field for most processors is 30. Otherwise, the maximum length is 100.  #### Comercio Latino For recurring payments in Mexico, the value is the customer’s contract number. Note Before you request the authorization, you must inform the issuer of the customer contract numbers that will be used for recurring transactions.  #### Worldpay VAP For a follow-on credit with Worldpay VAP, CyberSource checks the following locations, in the order given, for a customer account ID value and uses the first value it finds: 1. `customer_account_id` value in the follow-on credit request 2. Customer account ID value that was used for the capture that is being credited 3. Customer account ID value that was used for the original authorization If a customer account ID value cannot be found in any of these locations, then no value is used.  For processor-specific information, see the `customer_account_id` field description in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html) 
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseBuyerInformation
     */
    merchantCustomerId?: string;
    /**
     * Recipient’s date of birth. **Format**: `YYYYMMDD`.  This field is a `pass-through`, which means that CyberSource ensures that the value is eight numeric characters but otherwise does not verify the value or modify it in any way before sending it to the processor. If the field is not required for the transaction, CyberSource does not forward it to the processor.  For more details, see `recipient_date_of_birth` field description in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/) 
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseBuyerInformation
     */
    dateOfBirth?: string;
    /**
     * Customer’s government-assigned tax identification number.  #### Tax Calculation Optional for international and value added taxes only. Not applicable to U.S. and Canadian taxes.  For processor-specific information, see the purchaser_vat_registration_number field in [Level II and Level III Processing Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/Level_2_3_SCMP_API/html) 
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseBuyerInformation
     */
    vatRegistrationNumber?: string;
    /**
     * 
     * @type {Array<Ptsv2paymentsBuyerInformationPersonalIdentification>}
     * @memberof PtsV2PaymentsPost201ResponseBuyerInformation
     */
    personalIdentification?: Array<Ptsv2paymentsBuyerInformationPersonalIdentification>;
    /**
     * The description for this field is not available.
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseBuyerInformation
     */
    taxId?: string;
}
