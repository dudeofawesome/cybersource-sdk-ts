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
 * @interface RiskV1DecisionsPost201ResponseRiskInformationInfoCodes
 */
export interface RiskV1DecisionsPost201ResponseRiskInformationInfoCodes {
    /**
     * List of information codes triggered by the order. These information codes were generated when you created the order and product velocity rules and are returned so that you can associate them with the rules. 
     * @type {Array<string>}
     * @memberof RiskV1DecisionsPost201ResponseRiskInformationInfoCodes
     */
    velocity?: Array<string>;
    /**
     * Indicates a mismatch between the customer’s billing and shipping addresses. 
     * @type {Array<string>}
     * @memberof RiskV1DecisionsPost201ResponseRiskInformationInfoCodes
     */
    address?: Array<string>;
    /**
     * Indicates that customer information is associated with transactions that are either on the negative or the positive list. 
     * @type {Array<string>}
     * @memberof RiskV1DecisionsPost201ResponseRiskInformationInfoCodes
     */
    customerList?: Array<string>;
    /**
     * Indicates the device behavior information code(s) returned from device fingerprinting. 
     * @type {Array<string>}
     * @memberof RiskV1DecisionsPost201ResponseRiskInformationInfoCodes
     */
    deviceBehavior?: Array<string>;
    /**
     * Indicates excessive identity changes. The threshold is variable depending on the identity elements being compared. 
     * @type {Array<string>}
     * @memberof RiskV1DecisionsPost201ResponseRiskInformationInfoCodes
     */
    identityChange?: Array<string>;
    /**
     * Indicates a problem with the customer’s email address, IP address, or billing address. 
     * @type {Array<string>}
     * @memberof RiskV1DecisionsPost201ResponseRiskInformationInfoCodes
     */
    internet?: Array<string>;
    /**
     * Indicates a problem with the customer’s phone number. 
     * @type {Array<string>}
     * @memberof RiskV1DecisionsPost201ResponseRiskInformationInfoCodes
     */
    phone?: Array<string>;
    /**
     * Indicates that the customer provided potentially suspicious information. 
     * @type {Array<string>}
     * @memberof RiskV1DecisionsPost201ResponseRiskInformationInfoCodes
     */
    suspicious?: Array<string>;
    /**
     * Indicates that the customer has a high purchase frequency. 
     * @type {Array<string>}
     * @memberof RiskV1DecisionsPost201ResponseRiskInformationInfoCodes
     */
    globalVelocity?: Array<string>;
}
