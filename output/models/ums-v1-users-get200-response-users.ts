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
import { UmsV1UsersGet200ResponseAccountInformation } from './ums-v1-users-get200-response-account-information';
import { UmsV1UsersGet200ResponseContactInformation } from './ums-v1-users-get200-response-contact-information';
import { UmsV1UsersGet200ResponseOrganizationInformation } from './ums-v1-users-get200-response-organization-information';
/**
 * 
 * @export
 * @interface UmsV1UsersGet200ResponseUsers
 */
export interface UmsV1UsersGet200ResponseUsers {
    /**
     * 
     * @type {UmsV1UsersGet200ResponseAccountInformation}
     * @memberof UmsV1UsersGet200ResponseUsers
     */
    accountInformation?: UmsV1UsersGet200ResponseAccountInformation;
    /**
     * 
     * @type {UmsV1UsersGet200ResponseOrganizationInformation}
     * @memberof UmsV1UsersGet200ResponseUsers
     */
    organizationInformation?: UmsV1UsersGet200ResponseOrganizationInformation;
    /**
     * 
     * @type {UmsV1UsersGet200ResponseContactInformation}
     * @memberof UmsV1UsersGet200ResponseUsers
     */
    contactInformation?: UmsV1UsersGet200ResponseContactInformation;
    /**
     * 
     * @type {any}
     * @memberof UmsV1UsersGet200ResponseUsers
     */
    customFields?: any;
}
