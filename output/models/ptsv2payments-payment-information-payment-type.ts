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
import { Ptsv2paymentsPaymentInformationPaymentTypeMethod } from './ptsv2payments-payment-information-payment-type-method';
/**
 * 
 * @export
 * @interface Ptsv2paymentsPaymentInformationPaymentType
 */
export interface Ptsv2paymentsPaymentInformationPaymentType {
    /**
     * A Payment Type is an agreed means for a payee to receive legal tender from a payer. The way one pays for a commercial financial transaction. Examples: Card, Bank Transfer, Digital, Direct Debit. Possible values: - `CARD` (use this for a PIN debit transaction) - `CHECK` (use this for all eCheck payment transactions - ECP Debit, ECP Follow-on Credit, ECP StandAlone Credit) 
     * @type {string}
     * @memberof Ptsv2paymentsPaymentInformationPaymentType
     */
    name?: string;
    /**
     * Detailed information about the Payment Type. Possible values: - `DEBIT`: Use this value to indicate a PIN debit transaction.  Examples: For Card, if Credit or Debit or PrePaid. For Bank Transfer, if Online Bank Transfer or Wire Transfers. 
     * @type {string}
     * @memberof Ptsv2paymentsPaymentInformationPaymentType
     */
    subTypeName?: string;
    /**
     * 
     * @type {Ptsv2paymentsPaymentInformationPaymentTypeMethod}
     * @memberof Ptsv2paymentsPaymentInformationPaymentType
     */
    method?: Ptsv2paymentsPaymentInformationPaymentTypeMethod;
}
