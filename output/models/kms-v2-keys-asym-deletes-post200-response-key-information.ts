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
import { KmsV2KeysAsymGet200ResponseKeyInformationErrorInformation } from './kms-v2-keys-asym-get200-response-key-information-error-information';
/**
 * key information 
 * @export
 * @interface KmsV2KeysAsymDeletesPost200ResponseKeyInformation
 */
export interface KmsV2KeysAsymDeletesPost200ResponseKeyInformation {
    /**
     * Merchant Id 
     * @type {string}
     * @memberof KmsV2KeysAsymDeletesPost200ResponseKeyInformation
     */
    organizationId?: string;
    /**
     * Reference number is a unique identifier provided by the client along with the organization Id. This is an optional field provided solely for the client’s convenience. If client specifies value for this field in the request, it is expected to be available in the response. 
     * @type {string}
     * @memberof KmsV2KeysAsymDeletesPost200ResponseKeyInformation
     */
    referenceNumber?: string;
    /**
     * Key Serial Number 
     * @type {string}
     * @memberof KmsV2KeysAsymDeletesPost200ResponseKeyInformation
     */
    keyId?: string;
    /**
     * The status of the key.  Possible values:  - FAILED  - ACTIVE  - INACTIVE  - EXPIRED 
     * @type {string}
     * @memberof KmsV2KeysAsymDeletesPost200ResponseKeyInformation
     */
    status?: string;
    /**
     * message in case of failed key
     * @type {string}
     * @memberof KmsV2KeysAsymDeletesPost200ResponseKeyInformation
     */
    message?: string;
    /**
     * 
     * @type {KmsV2KeysAsymGet200ResponseKeyInformationErrorInformation}
     * @memberof KmsV2KeysAsymDeletesPost200ResponseKeyInformation
     */
    errorInformation?: KmsV2KeysAsymGet200ResponseKeyInformationErrorInformation;
}
