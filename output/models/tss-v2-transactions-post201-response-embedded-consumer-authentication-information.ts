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
 * @interface TssV2TransactionsPost201ResponseEmbeddedConsumerAuthenticationInformation
 */
export interface TssV2TransactionsPost201ResponseEmbeddedConsumerAuthenticationInformation {
    /**
     * Transaction identifier.  For details, see `xid` request field description in [Credit Card Services Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/) 
     * @type {string}
     * @memberof TssV2TransactionsPost201ResponseEmbeddedConsumerAuthenticationInformation
     */
    xid?: string;
    /**
     * Payer auth Transaction identifier.
     * @type {string}
     * @memberof TssV2TransactionsPost201ResponseEmbeddedConsumerAuthenticationInformation
     */
    transactionId?: string;
    /**
     * Raw electronic commerce indicator (ECI).  For details, see `eci_raw` request field description in [Credit Card Services Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/) 
     * @type {string}
     * @memberof TssV2TransactionsPost201ResponseEmbeddedConsumerAuthenticationInformation
     */
    eciRaw?: string;
}
