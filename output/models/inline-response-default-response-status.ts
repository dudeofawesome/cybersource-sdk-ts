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
import { InlineResponseDefaultResponseStatusDetails } from './inline-response-default-response-status-details';
/**
 * 
 * @export
 * @interface InlineResponseDefaultResponseStatus
 */
export interface InlineResponseDefaultResponseStatus {
    /**
     * HTTP Status code.
     * @type {number}
     * @memberof InlineResponseDefaultResponseStatus
     */
    status?: number;
    /**
     * Error Reason Code.
     * @type {string}
     * @memberof InlineResponseDefaultResponseStatus
     */
    reason?: string;
    /**
     * Error Message.
     * @type {string}
     * @memberof InlineResponseDefaultResponseStatus
     */
    message?: string;
    /**
     * API correlation ID.
     * @type {string}
     * @memberof InlineResponseDefaultResponseStatus
     */
    correlationId?: string;
    /**
     * 
     * @type {Array<InlineResponseDefaultResponseStatusDetails>}
     * @memberof InlineResponseDefaultResponseStatus
     */
    details?: Array<InlineResponseDefaultResponseStatusDetails>;
}
