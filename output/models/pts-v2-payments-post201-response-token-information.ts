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
import { PtsV2PaymentsPost201ResponseTokenInformationInstrumentIdentifier } from './pts-v2-payments-post201-response-token-information-instrument-identifier';
import { TssV2TransactionsGet200ResponsePaymentInformationPaymentInstrument } from './tss-v2-transactions-get200-response-payment-information-payment-instrument';
import { TssV2TransactionsGet200ResponsePaymentInformationShippingAddress } from './tss-v2-transactions-get200-response-payment-information-shipping-address';
import { TssV2TransactionsGet200ResponseTokenInformationCustomer } from './tss-v2-transactions-get200-response-token-information-customer';
/**
 * 
 * @export
 * @interface PtsV2PaymentsPost201ResponseTokenInformation
 */
export interface PtsV2PaymentsPost201ResponseTokenInformation {
    /**
     * A value of true means the card number or bank account used to create an Instrument Identifier was new and did not already exist in the token vault. A value of false means the card number or bank account used to create an Instrument Identifier already existed in the token vault. 
     * @type {boolean}
     * @memberof PtsV2PaymentsPost201ResponseTokenInformation
     */
    instrumentidentifierNew?: boolean;
    /**
     * 
     * @type {TssV2TransactionsGet200ResponseTokenInformationCustomer}
     * @memberof PtsV2PaymentsPost201ResponseTokenInformation
     */
    customer?: TssV2TransactionsGet200ResponseTokenInformationCustomer;
    /**
     * 
     * @type {TssV2TransactionsGet200ResponsePaymentInformationPaymentInstrument}
     * @memberof PtsV2PaymentsPost201ResponseTokenInformation
     */
    paymentInstrument?: TssV2TransactionsGet200ResponsePaymentInformationPaymentInstrument;
    /**
     * 
     * @type {TssV2TransactionsGet200ResponsePaymentInformationShippingAddress}
     * @memberof PtsV2PaymentsPost201ResponseTokenInformation
     */
    shippingAddress?: TssV2TransactionsGet200ResponsePaymentInformationShippingAddress;
    /**
     * 
     * @type {PtsV2PaymentsPost201ResponseTokenInformationInstrumentIdentifier}
     * @memberof PtsV2PaymentsPost201ResponseTokenInformation
     */
    instrumentIdentifier?: PtsV2PaymentsPost201ResponseTokenInformationInstrumentIdentifier;
}
