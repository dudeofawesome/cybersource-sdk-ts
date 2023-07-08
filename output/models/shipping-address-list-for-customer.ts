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
 * A paginated container of Shipping Addresses. 
 * @export
 * @interface ShippingAddressListForCustomer
 */
export interface ShippingAddressListForCustomer {
    /**
     * 
     * @type {any}
     * @memberof ShippingAddressListForCustomer
     */
    links?: any;
    /**
     * The offset parameter supplied in the request.
     * @type {number}
     * @memberof ShippingAddressListForCustomer
     */
    offset?: number;
    /**
     * The limit parameter supplied in the request.
     * @type {number}
     * @memberof ShippingAddressListForCustomer
     */
    limit?: number;
    /**
     * The number of Shipping Addresses returned in the array.
     * @type {number}
     * @memberof ShippingAddressListForCustomer
     */
    count?: number;
    /**
     * The total number of Shipping Addresses associated with the Customer.
     * @type {number}
     * @memberof ShippingAddressListForCustomer
     */
    total?: number;
    /**
     * Shipping Address Resources. 
     * @type {any}
     * @memberof ShippingAddressListForCustomer
     */
    embedded?: any;
}
