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
import { TssV2TransactionsGet200ResponseProcessorInformationAchVerification } from './tss-v2-transactions-get200-response-processor-information-ach-verification';
/**
 * 
 * @export
 * @interface PtsV2PaymentsRefundPost201ResponseProcessorInformation
 */
export interface PtsV2PaymentsRefundPost201ResponseProcessorInformation {
    /**
     * Authorization code. Returned only when the processor returns this value.  The length of this value depends on your processor.  Returned by authorization service.  #### PIN debit Authorization code that is returned by the processor.  Returned by PIN debit credit.  #### Elavon Encrypted Account Number Program The returned value is OFFLINE.  #### TSYS Acquiring Solutions The returned value for a successful zero amount authorization is 000000. 
     * @type {string}
     * @memberof PtsV2PaymentsRefundPost201ResponseProcessorInformation
     */
    approvalCode?: string;
    /**
     * Processor transaction ID.  This value identifies the transaction on a host system. This value is supported only for Moneris. It contains this information:   - Terminal used to process the transaction  - Shift during which the transaction took place  - Batch number  - Transaction number within the batch  You must store this value. If you give the customer a receipt, display this value on the receipt.  Example For the value 66012345001069003:   - Terminal ID = 66012345  - Shift number = 001  - Batch number = 069  - Transaction number = 003 
     * @type {string}
     * @memberof PtsV2PaymentsRefundPost201ResponseProcessorInformation
     */
    transactionId?: string;
    /**
     * Name of the Japanese acquirer that processed the transaction. Returned only for JCN Gateway. Please contact the CyberSource Japan Support Group for more information. 
     * @type {string}
     * @memberof PtsV2PaymentsRefundPost201ResponseProcessorInformation
     */
    forwardedAcquirerCode?: string;
    /**
     * Identifier that was assigned to you by your acquirer. This value must be printed on the receipt.  #### Returned by Authorizations and Credits.  This reply field is only supported by merchants who have installed client software on their POS terminals and use these processors: - American Express Direct - Credit Mutuel-CIC - FDC Nashville Global - OmniPay Direct - SIX 
     * @type {string}
     * @memberof PtsV2PaymentsRefundPost201ResponseProcessorInformation
     */
    merchantNumber?: string;
    /**
     * For most processors, this is the error message sent directly from the bank. Returned only when the processor returns this value.  **Important** Do not use this field to evaluate the result of the authorization.  #### PIN debit Response value that is returned by the processor or bank. **Important** Do not use this field to evaluate the results of the transaction request.  Returned by PIN debit credit, PIN debit purchase, and PIN debit reversal.  #### AIBMS If this value is `08`, you can accept the transaction if the customer provides you with identification.  #### Atos This value is the response code sent from Atos and it might also include the response code from the bank. Format: `aa,bb` with the two values separated by a comma and where: - `aa` is the two-digit error message from Atos. - `bb` is the optional two-digit error message from the bank.  #### Comercio Latino This value is the status code and the error or response code received from the processor separated by a colon. Format: [status code]:E[error code] or [status code]:R[response code] Example `2:R06`  #### JCN Gateway Processor-defined detail error code. The associated response category code is in the `processorInformation.responseCategoryCode` field. String (3) 
     * @type {string}
     * @memberof PtsV2PaymentsRefundPost201ResponseProcessorInformation
     */
    responseCode?: string;
    /**
     * 
     * @type {TssV2TransactionsGet200ResponseProcessorInformationAchVerification}
     * @memberof PtsV2PaymentsRefundPost201ResponseProcessorInformation
     */
    achVerification?: TssV2TransactionsGet200ResponseProcessorInformationAchVerification;
    /**
     * Same value as `processorInformation.transactionId`
     * @type {string}
     * @memberof PtsV2PaymentsRefundPost201ResponseProcessorInformation
     */
    networkTransactionId?: string;
}
