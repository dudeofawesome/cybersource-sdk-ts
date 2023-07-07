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
import { V1FileDetailsGet200ResponseLinksFiles } from './v1-file-details-get200-response-links-files';
import { V1FileDetailsGet200ResponseLinksSelf } from './v1-file-details-get200-response-links-self';
/**
 * 
 * @export
 * @interface V1FileDetailsGet200ResponseLinks
 */
export interface V1FileDetailsGet200ResponseLinks {
    /**
     * 
     * @type {V1FileDetailsGet200ResponseLinksSelf}
     * @memberof V1FileDetailsGet200ResponseLinks
     */
    self?: V1FileDetailsGet200ResponseLinksSelf;
    /**
     * 
     * @type {Array<V1FileDetailsGet200ResponseLinksFiles>}
     * @memberof V1FileDetailsGet200ResponseLinks
     */
    files?: Array<V1FileDetailsGet200ResponseLinksFiles>;
}
