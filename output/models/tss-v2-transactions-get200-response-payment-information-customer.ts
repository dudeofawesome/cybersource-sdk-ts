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
 * @interface TssV2TransactionsGet200ResponsePaymentInformationCustomer
 */
export interface TssV2TransactionsGet200ResponsePaymentInformationCustomer {
    /**
     * Unique identifier for the customer's card and billing information.  When you use Payment Tokenization or Recurring Billing and you include this value in your request, many of the fields that are normally required for an authorization or credit become optional.  **NOTE** When you use Payment Tokenization or Recurring Billing, the value for the Customer ID is actually the Cybersource payment token for a customer. This token stores information such as the consumer’s card number so it can be applied towards bill payments, recurring payments, or one-time payments. By using this token in a payment API request, the merchant doesn't need to pass in data such as the card number or expiration date in the request itself.  For details, see the `subscription_id` field description in [Credit Card Services Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/) 
     * @type {string}
     * @memberof TssV2TransactionsGet200ResponsePaymentInformationCustomer
     */
    customerId?: string;
    /**
     * Unique identifier for the Customer token that was created as part of a bundled TOKEN_CREATE action. 
     * @type {string}
     * @memberof TssV2TransactionsGet200ResponsePaymentInformationCustomer
     */
    id?: string;
}
