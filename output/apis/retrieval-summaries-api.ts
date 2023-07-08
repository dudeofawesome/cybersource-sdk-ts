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
import { ReportingV3RetrievalSummariesGet200Response } from '../models';
/**
 * RetrievalSummariesApi - axios parameter creator
 * @export
 */
export const RetrievalSummariesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retrieval Summary Report Description
         * @summary Get Retrieval Summaries
         * @param {Date} startTime Valid report Start Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**   - yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ (e.g. 2018-01-01T00:00:00.000Z) 
         * @param {Date} endTime Valid report End Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**   - yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ (e.g. 2018-01-01T00:00:00.000Z) 
         * @param {string} [organizationId] Valid Organization Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRetrievalSummary: async (startTime: Date, endTime: Date, organizationId?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'startTime' is not null or undefined
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling getRetrievalSummary.');
            }
            // verify required parameter 'endTime' is not null or undefined
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling getRetrievalSummary.');
            }
            const localVarPath = `/reporting/v3/retrieval-summaries`;
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
 * RetrievalSummariesApi - functional programming interface
 * @export
 */
export const RetrievalSummariesApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Retrieval Summary Report Description
         * @summary Get Retrieval Summaries
         * @param {Date} startTime Valid report Start Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**   - yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ (e.g. 2018-01-01T00:00:00.000Z) 
         * @param {Date} endTime Valid report End Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**   - yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ (e.g. 2018-01-01T00:00:00.000Z) 
         * @param {string} [organizationId] Valid Organization Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRetrievalSummary(startTime: Date, endTime: Date, organizationId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ReportingV3RetrievalSummariesGet200Response>>> {
            const localVarAxiosArgs = await RetrievalSummariesApiAxiosParamCreator(configuration).getRetrievalSummary(startTime, endTime, organizationId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * RetrievalSummariesApi - factory interface
 * @export
 */
export const RetrievalSummariesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Retrieval Summary Report Description
         * @summary Get Retrieval Summaries
         * @param {Date} startTime Valid report Start Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**   - yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ (e.g. 2018-01-01T00:00:00.000Z) 
         * @param {Date} endTime Valid report End Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**   - yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ (e.g. 2018-01-01T00:00:00.000Z) 
         * @param {string} [organizationId] Valid Organization Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRetrievalSummary(startTime: Date, endTime: Date, organizationId?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<ReportingV3RetrievalSummariesGet200Response>> {
            return RetrievalSummariesApiFp(configuration).getRetrievalSummary(startTime, endTime, organizationId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * RetrievalSummariesApi - object-oriented interface
 * @export
 * @class RetrievalSummariesApi
 * @extends {BaseAPI}
 */
export class RetrievalSummariesApi extends BaseAPI {
    /**
     * Retrieval Summary Report Description
     * @summary Get Retrieval Summaries
     * @param {Date} startTime Valid report Start Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**   - yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ (e.g. 2018-01-01T00:00:00.000Z) 
     * @param {Date} endTime Valid report End Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**   - yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ (e.g. 2018-01-01T00:00:00.000Z) 
     * @param {string} [organizationId] Valid Organization Id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RetrievalSummariesApi
     */
    public async getRetrievalSummary(startTime: Date, endTime: Date, organizationId?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<ReportingV3RetrievalSummariesGet200Response>> {
        return RetrievalSummariesApiFp(this.configuration).getRetrievalSummary(startTime, endTime, organizationId, options).then((request) => request(this.axios, this.basePath));
    }
}
