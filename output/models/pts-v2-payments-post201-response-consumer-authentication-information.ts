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
import { PtsV2PaymentsPost201ResponseConsumerAuthenticationInformationStrongAuthentication } from './pts-v2-payments-post201-response-consumer-authentication-information-strong-authentication';
import { RiskV1DecisionsPost201ResponseConsumerAuthenticationInformationIvr } from './risk-v1-decisions-post201-response-consumer-authentication-information-ivr';
/**
 * 
 * @export
 * @interface PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation
 */
export interface PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation {
    /**
     * JSON Web Token (JWT) used to authenticate the consumer with the authentication provider, such as, CardinalCommerce or Rupay. Note - Max Length of this field is 2048 characters. 
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation
     */
    accessToken?: string;
    /**
     * Identifies the UI Type the ACS will use to complete the challenge. **NOTE**: Only available for App transactions using the Cardinal Mobile SDK. 
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation
     */
    acsRenderingType?: string;
    /**
     * Unique transaction identifier assigned by the ACS to identify a single transaction. 
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation
     */
    acsTransactionId?: string;
    /**
     * URL for the card-issuing bank’s authentication form that you receive when the card is enrolled. The value can be very large. 
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation
     */
    acsUrl?: string;
    /**
     * Indicates what displays to the customer during the authentication process. This field can contain one of these values: - `ADS`: (Card not enrolled) customer prompted to activate the card during the checkout process. - `ATTEMPTS`: (Attempts processing) Processing briefly displays before the checkout process is completed. - `ENROLLED`: (Card enrolled) the card issuer’s authentication window displays. - `UNKNOWN`: Card enrollment status cannot be determined. - `NOREDIRECT`: (Card not enrolled, authentication unavailable, or error occurred) nothing displays to the customer.  The following values can be returned if you are using rules-based payer authentication. - `RIBA`: The card-issuing bank supports risk-based authentication, but whether the cardholder is likely to be challenged cannot be determined. - `RIBA_PASS`: The card-issuing bank supports risk-based authentication and it is likely that the cardholder will not be challenged to provide credentials, also known as _silent authentication_.  For details about possible values, see `pa_enroll_authentication_path` field description and \"Rules-Based Payer Authentication\" in [CyberSource Payer Authentication Using the SCMP API.] (https://apps.cybersource.com/library/documentation/dev_guides/Payer_Authentication_SCMP_API/html/) 
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation
     */
    authenticationPath?: string;
    /**
     * The Base64 encoded JSON Payload of CB specific Authorization Values returned in the challenge Flow 
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation
     */
    authorizationPayload?: string;
    /**
     * Payer authentication transaction identifier is used to link the check enrollment and validate authentication messages. For Rupay, this field should be passed as request only for Resend OTP use case. 
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation
     */
    authenticationTransactionId?: string;
    /**
     * Text provided by the ACS/Issuer to Cardholder during a Frictionless or Decoupled transaction.The Issuer can provide information to Cardholder. For example, “Additional authentication is needed for this transaction, please contact (Issuer Name) at xxx-xxx-xxxx.”. The Issuing Bank can optionally support this value. 
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation
     */
    cardholderMessage?: string;
    /**
     * Unique identifier generated by the card-issuing bank for Visa, American Express, JCB, Diners Club, and Discover transactions after the customer is authenticated. The value is in base64. When you request the card authorization service, CyberSource automatically converts the value, not the field name, to the format required by your payment processor. 
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation
     */
    cavv?: string;
    /**
     * Field that is returned only when the CAVV is generated, which occurs when paresStatus contains the values Y (successful authentication) or A (attempted authentication). If you use the ATOS processor, send the value of this field in the `cavv_algorithm` request field of the authorization service. This field contains one of these values: - `2`: Visa, American Express, JCB, Diners Club, and Discover - `3`: Mastercard 
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation
     */
    cavvAlgorithm?: string;
    /**
     * An indicator as to why the transaction was canceled. Possible Values:  - `01`: Cardholder selected Cancel. - `02`: Reserved for future EMVCo use (values invalid until defined by EMVCo). - `03`: Transaction Timed Out—Decoupled Authentication - `04`: Transaction timed out at ACS—other timeouts - `05`: Transaction Timed out at ACS - First CReq not received by ACS - `06`: Transaction Error - `07`: Unknown - `08`: Transaction Timed Out at SDK 
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation
     */
    challengeCancelCode?: string;
    /**
     * Indicates whether a challenge is required in order to complete authentication. **Note** Regional mandates might determine that a challenge is required.  Possible values: - `Y`: Challenge required - `N`: Challenge not required **Note**  Used by the Hybrid integration. 
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation
     */
    challengeRequired?: string;
    /**
     * Indicates whether the 3DS Requestor requests the ACS to utilize Decoupled Authentication and agrees to utilize Decoupled Authentication if the ACS confirms its use.  Possible Values:  Y - Decoupled Authentication is supported and preferred if challenge is necessary  N - Do not use Decoupled Authentication  **Default Value**: N 
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation
     */
    decoupledAuthenticationIndicator?: string;
    /**
     * The directory server error code indicating a problem with this transaction. Note - Max Length of this field is typically 3 characters. 
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation
     */
    directoryServerErrorCode?: string;
    /**
     * Directory server text and additional detail about the error for this transaction. 
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation
     */
    directoryServerErrorDescription?: string;
    /**
     * Commerce indicator for cards not enrolled. This field contains one of these values: - `internet`: Card not enrolled, or card type not supported by payer authentication. No liability shift. - `js_attempted`: Card not enrolled, but attempt to authenticate is recorded. Liability shift. - `js_failure`: J/Secure directory service is not available. No liability shift. - `spa`: Mastercard card not enrolled in the SecureCode program. No liability shift. - `vbv_attempted`: Card not enrolled, but attempt to authenticate is recorded. Liability shift. - `vbv_failure`: For payment processor Barclays, Streamline, AIBMS, or FDC Germany, you receive this result if Visa’s directory service is not available. No liability shift. 
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation
     */
    ecommerceIndicator?: string;
    /**
     * Note This field applies only to non-U.S-issued cards.  For enroll, Numeric electronic commerce indicator (ECI) returned only for Visa, American Express, JCB, Diners Club, and Discover transactions when the card is not enrolled. For more information, see \"Interpreting the Reply,\" page 22.  If you are not using the CyberSource payment services, you must send this value to your payment processor in the subsequent request for card authorization. This field contains one of these values: - `06`: The card can be enrolled. Liability shift. - `07`: The card cannot be enrolled. No liability shift.  For validate, Numeric electronic commerce indicator (ECI) returned only for Visa, American Express, JCB, Diners Club, and Discover transactions. The field is absent when authentication fails. You must send this value to your payment processor in the subsequent request for card authorization. This field contains one of these values: - `05`: Successful authentication - `06`: Authentication attempted - `07`: Failed authentication (No response from the merchant because of a problem.) 
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation
     */
    eci?: string;
    /**
     * ECI value that can be returned for Visa, Mastercard, American Express, JCB, Diners Club, and Discover. The field is absent when authentication fails. If your payment processor is Streamline, you must pass the value of this field instead of the value of `eci` or `ucafCollectionIndicator`.  This field can contain one of these values: - `01`: Authentication attempted (Mastercard) - `02`: Successful authentication (Mastercard) - `05`: Successful authentication (Visa, American Express, JCB, Diners Club, and Discover) - `06`: Authentication attempted (Visa, American Express, JCB, Diners Club, and Discover) 
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation
     */
    eciRaw?: string;
    /**
     * This field describes the type of 3DS transaction flow that took place.  It can be one of three possible flows; CH - Challenge FR - Frictionless FD - Frictionless with delegation, (challenge not generated by the issuer but by the scheme on behalf of the issuer). 
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation
     */
    effectiveAuthenticationType?: string;
    /**
     * 
     * @type {RiskV1DecisionsPost201ResponseConsumerAuthenticationInformationIvr}
     * @memberof PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation
     */
    ivr?: RiskV1DecisionsPost201ResponseConsumerAuthenticationInformationIvr;
    /**
     * 
     * @type {PtsV2PaymentsPost201ResponseConsumerAuthenticationInformationStrongAuthentication}
     * @memberof PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation
     */
    strongAuthentication?: PtsV2PaymentsPost201ResponseConsumerAuthenticationInformationStrongAuthentication;
    /**
     * The global score calculated by the CB scoring platform and returned to merchants. 
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation
     */
    networkScore?: string;
    /**
     * Payer authentication request (PAReq) message that you need to forward to the ACS. The value can be very large. The value is in base64. 
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation
     */
    pareq?: string;
    /**
     * Raw result of the authentication check. If you are configured for Asia, Middle East, and Africa Gateway Processing, you need to send the value of this field in your authorization request. This field can contain one of these values: - `A`: Proof of authentication attempt was generated. - `N`: Customer failed or canceled authentication. Transaction denied. - `U`: Authentication not completed regardless of the reason. - `Y`: Customer was successfully authenticated. 
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation
     */
    paresStatus?: string;
    /**
     * Date and time of the enrollment check combined with the VEReq and VERes elements. If you ever need to show proof of enrollment checking, you may need to parse the string for the information required by the payment card company. The value can be very large. For details about possible values, see the `pa_enroll_proofxml` field description in [CyberSource Payer Authentication Using the SCMP API.] (https://apps.cybersource.com/library/documentation/dev_guides/Payer_Authentication_SCMP_API/html/) - For cards issued in the U.S. or Canada, Visa may require this data for specific merchant category codes. - For cards not issued in the U.S. or Canada, your bank may require this data as proof of enrollment checking for any payer authentication transaction that you re-present because of a chargeback. 
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation
     */
    proofXml?: string;
    /**
     * Encrypted version of the card number used in the payer authentication request message. 
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation
     */
    proxyPan?: string;
    /**
     * SDK unique transaction identifier that is generated on each new transaction. 
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation
     */
    sdkTransactionId?: string;
    /**
     * Provides additional information as to why the PAResStatus has a specific value. 
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation
     */
    signedParesStatusReason?: string;
    /**
     * This field contains the 3D Secure version that was used to process the transaction. For example, 1.0.2 or 2.0.0. 
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation
     */
    specificationVersion?: string;
    /**
     * The fully qualified URL that the merchant uses to post a form to the cardholder in order to complete the Consumer Authentication transaction for the Cardinal Cruise API integration. 
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation
     */
    stepUpUrl?: string;
    /**
     * Unique transaction identifier assigned by the 3DS Server to identify a single transaction. 
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation
     */
    threeDSServerTransactionId?: string;
    /**
     * AAV is a unique identifier generated by the card-issuing bank for Mastercard Identity Check transactions after the customer is authenticated. The value is in base64. Include the data in the card authorization request. 
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation
     */
    ucafAuthenticationData?: string;
    /**
     * For enroll, Returned only for Mastercard transactions. Indicates that authentication is not required because the customer is not enrolled. Add the value of this field to the authorization field ucaf_collection_indicator. This field can contain these values: 0, 1.  For validate, Numeric electronic commerce indicator (ECI) returned only for Mastercard Identity Check transactions. The field is absent when authentication fails. You must send this value to your payment processor in the request for card authorization. This field contain one of these values: - `0`: Authentication data not collected, and customer authentication was not completed. - `1`: Authentication data not collected because customer authentication was not completed. - `2`: Authentication data collected because customer completed authentication. 
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation
     */
    ucafCollectionIndicator?: string;
    /**
     * Result of the enrollment check. This field can contain one of these values: - `Y`: Card enrolled or can be enrolled; you must authenticate. Liability shift. - `N`: Card not enrolled; proceed with authorization. Liability shift. - `U`: Unable to authenticate regardless of the reason. No liability shift.  **Note** This field only applies to the Asia, Middle East, and Africa Gateway. If you are configured for this processor, you must send the value of this field in your authorization request.  The following value can be returned if you are using rules-based Payer Authentication: - `B`: Indicates that authentication was bypassed.  For details, see `pa_enroll_veres_enrolled` field description in [CyberSource Payer Authentication Using the SCMP API.] (https://apps.cybersource.com/library/documentation/dev_guides/Payer_Authentication_SCMP_API/html/) 
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation
     */
    veresEnrolled?: string;
    /**
     * This data element will be populated by the system setting Whitelist Status. Possible Values: 01 - 3DS/ Server/ 02 – DS/03 - ACS 
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation
     */
    whiteListStatusSource?: string;
    /**
     * Transaction identifier generated by CyberSource for successful enrollment or validation checks. Use this value, which is in base64, to match an outgoing PAReq with an incoming PARes. CyberSource forwards the XID with the card authorization service to these payment processors in these cases: - Barclays - Streamline (when the **ecommerceIndicator**`=spa`) 
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation
     */
    xid?: string;
    /**
     * The Directory Server Transaction ID is generated by the Mastercard Directory Server during the authentication transaction and passed back to the merchant with the authentication results. For Cybersource Through Visanet Gateway: The value for this field corresponds to the following data in the TC 33 capture file3: Record: CP01 TCR7, Position: 114-149, Field: MC AVV Verification—Directory Server Transaction ID 
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation
     */
    directoryServerTransactionId?: string;
    /**
     * Raw authentication data that comes from the cardissuing bank. Primary authentication field that indicates if authentication was successful and if liability shift occurred. You should examine first the result of this field. This field contains one of these values: - `-1`: Invalid PARes. - `0`: Successful validation. - `1`: Cardholder is not participating, but the attempt to authenticate was recorded. - `6`: Issuer unable to perform authentication. - `9`: Cardholder did not complete authentication. 
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation
     */
    authenticationResult?: string;
    /**
     * Message that explains the authenticationResult reply field. 
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation
     */
    authenticationStatusMsg?: string;
    /**
     * Indicator used to differentiate Internet transactions from other types. The authentication failed if this field is not returned. For Visa, if your payment processor is Streamline, Barclays, AIBMS, or FDC Germany, you receive the value vbv_failure instead of internet when eci is 07. The value of this field is passed automatically to the authorization service if you request the services together. This field contains one of these values: - `aesk`: American Express SafeKey authentication verified successfully. - `aesk_attempted`: Card not enrolled in American Express SafeKey, but the attempt to authenticate was recorded. - `dipb`: Discover ProtectBuy authentication verified successfully. - `dipb_attempted`: Card not enrolled in Discover ProtectBuy, but the attempt to authenticate was recorded. - `internet`: Authentication was not verified successfully. - `js`: J/Secure authentication verified successfully. - `js_attempted`: Card not enrolled in J/Secure, but the attempt to authenticate was recorded. - `moto`: Mail or telephone order. - `pb_attempted`: Card not enrolled in Diners Club ProtectBuy, but the attempt to authenticate was recorded. - `recurring`: Recurring transaction. - `spa`: Mastercard Identity Check authentication verified successfully. - `spa_failure`: Mastercard Identity Check failed authentication. - `vbv`: Visa Secure authentication verified successfully. - `vbv_attempted`: Card not enrolled in Visa Secure, but the attempt to authenticate was recorded. - `vbv_failure`: Visa Secure authentication unavailable. 
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation
     */
    indicator?: string;
    /**
     * Indicates the number of authentication cycles attempted by the cardholder and is tracked by the Issuing Banks ACS.Example: if customer gets the challenge window and enter in their one time password and hit submit then that interaction counter should just be 1. When customer gets the challenge window and the bank asks if they want to have the one time password  sent to their phone or their email and they have to choose before going to the next screen to enter in their one time password then this interaction count would be 2. One for the selection of how they want the one time password delivered and another with them actually entering in the one time password and hitting the submit button. 
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation
     */
    interactionCounter?: string;
    /**
     * Enables the communication of trusted beneficiary/whitelist status between the ACS, the DS and the 3DS Requestor.  Possible Values:  Y - 3DS Requestor is whitelisted by cardholder  N - 3DS Requestor is not whitelisted by cardholder 
     * @type {string}
     * @memberof PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation
     */
    whiteListStatus?: string;
}
