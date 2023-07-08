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
import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { ReportingV3RetrievalDetailsGet200Response } from '../models';
/**
 * RetrievalDetailsApi - axios parameter creator
 * @export
 */
export const RetrievalDetailsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retrieval Detail Report Description
         * @summary Get Retrieval Details
         * @param {Date} startTime Valid report Start Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**   - yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ (e.g. 2018-01-01T00:00:00.000Z) 
         * @param {Date} endTime Valid report End Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**   - yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ (e.g. 2018-01-01T00:00:00.000Z) 
         * @param {string} [organizationId] Valid Organization Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRetrievalDetails: async (startTime: Date, endTime: Date, organizationId?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'startTime' is not null or undefined
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling getRetrievalDetails.');
            }
            // verify required parameter 'endTime' is not null or undefined
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling getRetrievalDetails.');
            }
            const localVarPath = `/reporting/v3/retrieval-details`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (startTime !== undefined) {
                localVarQueryParameter['startTime'] = (startTime as any instanceof Date) ?
                    (startTime as any).toISOString() :
                    startTime;
            }

            if (endTime !== undefined) {
                localVarQueryParameter['endTime'] = (endTime as any instanceof Date) ?
                    (endTime as any).toISOString() :
                    endTime;
            }

            if (organizationId !== undefined) {
                localVarQueryParameter['organizationId'] = organizationId;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * RetrievalDetailsApi - functional programming interface
 * @export
 */
export const RetrievalDetailsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Retrieval Detail Report Description
         * @summary Get Retrieval Details
         * @param {Date} startTime Valid report Start Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**   - yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ (e.g. 2018-01-01T00:00:00.000Z) 
         * @param {Date} endTime Valid report End Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**   - yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ (e.g. 2018-01-01T00:00:00.000Z) 
         * @param {string} [organizationId] Valid Organization Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRetrievalDetails(startTime: Date, endTime: Date, organizationId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ReportingV3RetrievalDetailsGet200Response>>> {
            const localVarAxiosArgs = await RetrievalDetailsApiAxiosParamCreator(configuration).getRetrievalDetails(startTime, endTime, organizationId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * RetrievalDetailsApi - factory interface
 * @export
 */
export const RetrievalDetailsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Retrieval Detail Report Description
         * @summary Get Retrieval Details
         * @param {Date} startTime Valid report Start Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**   - yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ (e.g. 2018-01-01T00:00:00.000Z) 
         * @param {Date} endTime Valid report End Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**   - yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ (e.g. 2018-01-01T00:00:00.000Z) 
         * @param {string} [organizationId] Valid Organization Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRetrievalDetails(startTime: Date, endTime: Date, organizationId?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<ReportingV3RetrievalDetailsGet200Response>> {
            return RetrievalDetailsApiFp(configuration).getRetrievalDetails(startTime, endTime, organizationId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * RetrievalDetailsApi - object-oriented interface
 * @export
 * @class RetrievalDetailsApi
 * @extends {BaseAPI}
 */
export class RetrievalDetailsApi extends BaseAPI {
    /**
     * Retrieval Detail Report Description
     * @summary Get Retrieval Details
     * @param {Date} startTime Valid report Start Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**   - yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ (e.g. 2018-01-01T00:00:00.000Z) 
     * @param {Date} endTime Valid report End Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**   - yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ (e.g. 2018-01-01T00:00:00.000Z) 
     * @param {string} [organizationId] Valid Organization Id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RetrievalDetailsApi
     */
    public async getRetrievalDetails(startTime: Date, endTime: Date, organizationId?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<ReportingV3RetrievalDetailsGet200Response>> {
        return RetrievalDetailsApiFp(this.configuration).getRetrievalDetails(startTime, endTime, organizationId, options).then((request) => request(this.axios, this.basePath));
    }
}
