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
 * @interface Ptsv2creditsProcessingInformationElectronicBenefitsTransfer
 */
export interface Ptsv2creditsProcessingInformationElectronicBenefitsTransfer {
    /**
     * Flag that specifies the category for the EBT transaction.  Possible values: - `CASH`: Cash benefits, which can be used to purchase any item at a participating retailer, as well as to obtain cash-back or make a cash withdrawal from a participating ATM. - `FOOD`: Food stamp benefits, which can be used only to purchase food items authorized by the USDA SNAP program.  #### PIN debit Required field for EBT transactions that use PIN debit credit or PIN debit purchase; otherwise, not used. 
     * @type {string}
     * @memberof Ptsv2creditsProcessingInformationElectronicBenefitsTransfer
     */
    category?: string;
}
