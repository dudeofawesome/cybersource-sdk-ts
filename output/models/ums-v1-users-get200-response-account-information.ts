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
 * @interface UmsV1UsersGet200ResponseAccountInformation
 */
export interface UmsV1UsersGet200ResponseAccountInformation {
    /**
     * 
     * @type {string}
     * @memberof UmsV1UsersGet200ResponseAccountInformation
     */
    userName?: string;
    /**
     * 
     * @type {string}
     * @memberof UmsV1UsersGet200ResponseAccountInformation
     */
    roleId?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof UmsV1UsersGet200ResponseAccountInformation
     */
    permissions?: Array<string>;
    /**
     * Valid values: - active - inactive - locked - disabled - forgotpassword - deleted 
     * @type {string}
     * @memberof UmsV1UsersGet200ResponseAccountInformation
     */
    status?: string;
    /**
     * 
     * @type {Date}
     * @memberof UmsV1UsersGet200ResponseAccountInformation
     */
    createdTime?: Date;
    /**
     * 
     * @type {Date}
     * @memberof UmsV1UsersGet200ResponseAccountInformation
     */
    lastAccessTime?: Date;
    /**
     * 
     * @type {string}
     * @memberof UmsV1UsersGet200ResponseAccountInformation
     */
    languagePreference?: string;
    /**
     * 
     * @type {string}
     * @memberof UmsV1UsersGet200ResponseAccountInformation
     */
    timezone?: string;
}
