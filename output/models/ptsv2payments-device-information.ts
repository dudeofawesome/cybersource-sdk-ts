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
import { Ptsv2paymentsDeviceInformationRawData } from './ptsv2payments-device-information-raw-data';
/**
 * 
 * @export
 * @interface Ptsv2paymentsDeviceInformation
 */
export interface Ptsv2paymentsDeviceInformation {
    /**
     * DNS resolved hostname from `ipAddress`.
     * @type {string}
     * @memberof Ptsv2paymentsDeviceInformation
     */
    hostName?: string;
    /**
     * IP address of the customer.  #### Used by **Authorization, Capture, and Credit** Optional field. 
     * @type {string}
     * @memberof Ptsv2paymentsDeviceInformation
     */
    ipAddress?: string;
    /**
     * Customer’s browser as identified from the HTTP header data. For example, `Mozilla` is the value that identifies the Netscape browser. 
     * @type {string}
     * @memberof Ptsv2paymentsDeviceInformation
     */
    userAgent?: string;
    /**
     * Field that contains the session ID that you send to Decision Manager to obtain the device fingerprint information. The string can contain uppercase and lowercase letters, digits, hyphen (-), and underscore (_). However, do not use the same uppercase and lowercase letters to indicate different session IDs.  The session ID must be unique for each merchant ID. You can use any string that you are already generating, such as an order number or web session ID.  The session ID must be unique for each page load, regardless of an individual’s web session ID. If a user navigates to a profiled page and is assigned a web session, navigates away from the profiled page, then navigates back to the profiled page, the generated session ID should be different and unique. You may use a web session ID, but it is preferable to use an application GUID (Globally Unique Identifier). This measure ensures that a unique ID is generated every time the page is loaded, even if it is the same user reloading the page. 
     * @type {string}
     * @memberof Ptsv2paymentsDeviceInformation
     */
    fingerprintSessionId?: string;
    /**
     * Boolean that indicates whether request contains the device fingerprint information. Values: - `true`: Use raw fingerprintSessionId when looking up device details. - `false` (default): Use merchant id + fingerprintSessionId as the session id for Device detail collection. 
     * @type {boolean}
     * @memberof Ptsv2paymentsDeviceInformation
     */
    useRawFingerprintSessionId?: boolean;
    /**
     * The device type at the client side.
     * @type {string}
     * @memberof Ptsv2paymentsDeviceInformation
     */
    deviceType?: string;
    /**
     * 
     * @type {Array<Ptsv2paymentsDeviceInformationRawData>}
     * @memberof Ptsv2paymentsDeviceInformation
     */
    rawData?: Array<Ptsv2paymentsDeviceInformationRawData>;
    /**
     * Value of the Accept header sent by the customer’s web browser. **Note** If the customer’s browser provides a value, you must include it in your request. 
     * @type {string}
     * @memberof Ptsv2paymentsDeviceInformation
     */
    httpAcceptBrowserValue?: string;
    /**
     * The exact content of the HTTP accept header. 
     * @type {string}
     * @memberof Ptsv2paymentsDeviceInformation
     */
    httpAcceptContent?: string;
    /**
     * Email address set in the customer’s browser, which may differ from customer email. 
     * @type {string}
     * @memberof Ptsv2paymentsDeviceInformation
     */
    httpBrowserEmail?: string;
    /**
     * Value represents the browser language as defined in IETF BCP47. Example:en-US, refer  https://en.wikipedia.org/wiki/IETF_language_tag for more details. 
     * @type {string}
     * @memberof Ptsv2paymentsDeviceInformation
     */
    httpBrowserLanguage?: string;
    /**
     * A Boolean value that represents the ability of the cardholder browser to execute Java. Value is returned from the navigator.javaEnabled property. Possible Values:True/False 
     * @type {boolean}
     * @memberof Ptsv2paymentsDeviceInformation
     */
    httpBrowserJavaEnabled?: boolean;
    /**
     * A Boolean value that represents the ability of the cardholder browser to execute JavaScript. Possible Values:True/False. **Note**: Merchants should be able to know the values from fingerprint details of cardholder's browser. 
     * @type {boolean}
     * @memberof Ptsv2paymentsDeviceInformation
     */
    httpBrowserJavaScriptEnabled?: boolean;
    /**
     * Value represents the bit depth of the color palette for displaying images, in bits per pixel. Example : 24, refer https://en.wikipedia.org/wiki/Color_depth for more details 
     * @type {string}
     * @memberof Ptsv2paymentsDeviceInformation
     */
    httpBrowserColorDepth?: string;
    /**
     * Total height of the Cardholder's scree in pixels, example: 864. 
     * @type {string}
     * @memberof Ptsv2paymentsDeviceInformation
     */
    httpBrowserScreenHeight?: string;
    /**
     * Total width of the cardholder's screen in pixels. Example: 1536. 
     * @type {string}
     * @memberof Ptsv2paymentsDeviceInformation
     */
    httpBrowserScreenWidth?: string;
    /**
     * Time difference between UTC time and the cardholder browser local time, in minutes, Example:300 
     * @type {string}
     * @memberof Ptsv2paymentsDeviceInformation
     */
    httpBrowserTimeDifference?: string;
    /**
     * Value of the User-Agent header sent by the customer’s web browser. Note If the customer’s browser provides a value, you must include it in your request. 
     * @type {string}
     * @memberof Ptsv2paymentsDeviceInformation
     */
    userAgentBrowserValue?: string;
}
