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
 * @interface Ptsv2paymentsRiskInformationBuyerHistoryCustomerAccount
 */
export interface Ptsv2paymentsRiskInformationBuyerHistoryCustomerAccount {
    /**
     * Date the cardholder’s account was last changed. This includes changes to the billing or shipping address, new payment accounts or new users added. Recommended for Discover ProtectBuy. 
     * @type {string}
     * @memberof Ptsv2paymentsRiskInformationBuyerHistoryCustomerAccount
     */
    lastChangeDate?: string;
    /**
     * The values from the enum can be: - GUEST - NEW_ACCOUNT - EXISTING_ACCOUNT 
     * @type {string}
     * @memberof Ptsv2paymentsRiskInformationBuyerHistoryCustomerAccount
     */
    creationHistory?: string;
    /**
     * This field is applicable only in case of EXISTING_ACCOUNT in creationHistory. Possible values: - ACCOUNT_UPDATED_NOW - ACCOUNT_UPDATED_PAST 
     * @type {string}
     * @memberof Ptsv2paymentsRiskInformationBuyerHistoryCustomerAccount
     */
    modificationHistory?: string;
    /**
     * This only applies for EXISTING_ACCOUNT in creationHistory. The values from the enum can be: - PASSWORD_CHANGED_NOW - PASSWORD_CHANGED_PAST - PASSWORD_NEVER_CHANGED 
     * @type {string}
     * @memberof Ptsv2paymentsRiskInformationBuyerHistoryCustomerAccount
     */
    passwordHistory?: string;
    /**
     * Date the cardholder opened the account. Recommended for Discover ProtectBuy. This only applies for EXISTING_ACCOUNT in creationHistory. 
     * @type {string}
     * @memberof Ptsv2paymentsRiskInformationBuyerHistoryCustomerAccount
     */
    createDate?: string;
    /**
     * Date the cardholder last changed or reset password on account. Recommended for Discover ProtectBuy. This only applies for PASSWORD_CHANGED_PAST in passwordHistory. 
     * @type {string}
     * @memberof Ptsv2paymentsRiskInformationBuyerHistoryCustomerAccount
     */
    passwordChangeDate?: string;
}
