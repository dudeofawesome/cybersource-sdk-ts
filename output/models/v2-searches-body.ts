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
 * @interface V2SearchesBody
 */
export interface V2SearchesBody {
    /**
     * Indicates whether or not you want to save this search request for future use. The options are:  * `true` * `false` (default value)  If set to `true`, this field returns `searchID` in the response. You can use this value to retrieve the details of the saved search. 
     * @type {boolean}
     * @memberof V2SearchesBody
     */
    save?: boolean;
    /**
     * Name of this search. When `save` is set to `true`, this search is saved with this name. 
     * @type {string}
     * @memberof V2SearchesBody
     */
    name?: string;
    /**
     * Merchant’s time zone in ISO standard, using the TZ database format. For example: `America/Chicago` 
     * @type {string}
     * @memberof V2SearchesBody
     */
    timezone?: string;
    /**
     * String that contains the filters and variables for which you want to search. For information about supported field-filters and operators, see the [Query Filters]( https://developer.cybersource.com/api/developer-guides/dita-txn-search-details-rest-api-dev-guide-102718/txn-search-intro/txn-filtering.html) section of the Transaction Search Developer Guide. 
     * @type {string}
     * @memberof V2SearchesBody
     */
    query?: string;
    /**
     * Controls the starting point within the collection of results, which defaults to 0. The first item in the collection is retrieved by setting a zero offset.  For example, if you have a collection of 15 items to be retrieved from a resource and you specify limit=5, you can retrieve the entire set of results in 3 successive requests by varying the offset value like this:  `offset=0` `offset=5` `offset=10`  **Note:** If an offset larger than the number of results is provided, this will result in no embedded object being returned. 
     * @type {number}
     * @memberof V2SearchesBody
     */
    offset?: number;
    /**
     * Controls the maximum number of items that may be returned for a single request. The default is 20, the maximum is 2000. 
     * @type {number}
     * @memberof V2SearchesBody
     */
    limit?: number;
    /**
     * A comma separated list of the following form:  `submitTimeUtc:desc` 
     * @type {string}
     * @memberof V2SearchesBody
     */
    sort?: string;
}
