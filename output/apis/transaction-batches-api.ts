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
import { PtsV1TransactionBatchDetailsGet400Response } from '../models';
import { PtsV1TransactionBatchDetailsGet401Response } from '../models';
import { PtsV1TransactionBatchDetailsGet403Response } from '../models';
import { PtsV1TransactionBatchDetailsGet404Response } from '../models';
import { PtsV1TransactionBatchDetailsGet502Response } from '../models';
import { PtsV1TransactionBatchesGet200Response } from '../models';
import { PtsV1TransactionBatchesGet400Response } from '../models';
import { PtsV1TransactionBatchesGet401Response } from '../models';
import { PtsV1TransactionBatchesGet403Response } from '../models';
import { PtsV1TransactionBatchesGet404Response } from '../models';
import { PtsV1TransactionBatchesGet500Response } from '../models';
import { PtsV1TransactionBatchesGet502Response } from '../models';
import { PtsV1TransactionBatchesIdGet200Response } from '../models';
/**
 * TransactionBatchesApi - axios parameter creator
 * @export
 */
export const TransactionBatchesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Provides real-time detailed status information about the transactions that you previously uploaded in the Business Center or processed with the Offline Transaction File Submission service. 
         * @summary Get Transaction Details for a given Batch Id
         * @param {string} id The batch id assigned for the template.
         * @param {string} [uploadDate] Date in which the original batch file was uploaded. Date must be in ISO-8601 format. Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14) **Example date format:**  - yyyy-MM-dd 
         * @param {string} [status] Allows you to filter by rejected response.  Valid values: - Rejected 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTransactionBatchDetails: async (id: string, uploadDate?: string, status?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getTransactionBatchDetails.');
            }
            const localVarPath = `/pts/v1/transaction-batch-details/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication jwt required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            if (uploadDate !== undefined) {
                localVarQueryParameter['uploadDate'] = (uploadDate as any instanceof Date) ?
                    (uploadDate as any).toISOString().substr(0,10) :
                    uploadDate;
            }

            if (status !== undefined) {
                localVarQueryParameter['status'] = status;
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
        /**
         * Provide the search range
         * @summary Get Individual Batch File
         * @param {string} id The batch id assigned for the template.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTransactionBatchId: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getTransactionBatchId.');
            }
            const localVarPath = `/pts/v1/transaction-batches/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication jwt required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
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
        /**
         * Provide the search range
         * @summary Get a List of Batch Files
         * @param {Date} startTime Valid report Start Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)   **Example date format:**   - yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZZ 
         * @param {Date} endTime Valid report End Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)   **Example date format:**   - yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZZ 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTransactionBatches: async (startTime: Date, endTime: Date, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'startTime' is not null or undefined
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling getTransactionBatches.');
            }
            // verify required parameter 'endTime' is not null or undefined
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling getTransactionBatches.');
            }
            const localVarPath = `/pts/v1/transaction-batches`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication jwt required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

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
 * TransactionBatchesApi - functional programming interface
 * @export
 */
export const TransactionBatchesApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Provides real-time detailed status information about the transactions that you previously uploaded in the Business Center or processed with the Offline Transaction File Submission service. 
         * @summary Get Transaction Details for a given Batch Id
         * @param {string} id The batch id assigned for the template.
         * @param {string} [uploadDate] Date in which the original batch file was uploaded. Date must be in ISO-8601 format. Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14) **Example date format:**  - yyyy-MM-dd 
         * @param {string} [status] Allows you to filter by rejected response.  Valid values: - Rejected 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTransactionBatchDetails(id: string, uploadDate?: string, status?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await TransactionBatchesApiAxiosParamCreator(configuration).getTransactionBatchDetails(id, uploadDate, status, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Provide the search range
         * @summary Get Individual Batch File
         * @param {string} id The batch id assigned for the template.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTransactionBatchId(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<PtsV1TransactionBatchesIdGet200Response>>> {
            const localVarAxiosArgs = await TransactionBatchesApiAxiosParamCreator(configuration).getTransactionBatchId(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Provide the search range
         * @summary Get a List of Batch Files
         * @param {Date} startTime Valid report Start Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)   **Example date format:**   - yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZZ 
         * @param {Date} endTime Valid report End Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)   **Example date format:**   - yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZZ 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTransactionBatches(startTime: Date, endTime: Date, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<PtsV1TransactionBatchesGet200Response>>> {
            const localVarAxiosArgs = await TransactionBatchesApiAxiosParamCreator(configuration).getTransactionBatches(startTime, endTime, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * TransactionBatchesApi - factory interface
 * @export
 */
export const TransactionBatchesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Provides real-time detailed status information about the transactions that you previously uploaded in the Business Center or processed with the Offline Transaction File Submission service. 
         * @summary Get Transaction Details for a given Batch Id
         * @param {string} id The batch id assigned for the template.
         * @param {string} [uploadDate] Date in which the original batch file was uploaded. Date must be in ISO-8601 format. Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14) **Example date format:**  - yyyy-MM-dd 
         * @param {string} [status] Allows you to filter by rejected response.  Valid values: - Rejected 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTransactionBatchDetails(id: string, uploadDate?: string, status?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return TransactionBatchesApiFp(configuration).getTransactionBatchDetails(id, uploadDate, status, options).then((request) => request(axios, basePath));
        },
        /**
         * Provide the search range
         * @summary Get Individual Batch File
         * @param {string} id The batch id assigned for the template.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTransactionBatchId(id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<PtsV1TransactionBatchesIdGet200Response>> {
            return TransactionBatchesApiFp(configuration).getTransactionBatchId(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Provide the search range
         * @summary Get a List of Batch Files
         * @param {Date} startTime Valid report Start Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)   **Example date format:**   - yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZZ 
         * @param {Date} endTime Valid report End Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)   **Example date format:**   - yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZZ 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTransactionBatches(startTime: Date, endTime: Date, options?: AxiosRequestConfig): Promise<AxiosResponse<PtsV1TransactionBatchesGet200Response>> {
            return TransactionBatchesApiFp(configuration).getTransactionBatches(startTime, endTime, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TransactionBatchesApi - object-oriented interface
 * @export
 * @class TransactionBatchesApi
 * @extends {BaseAPI}
 */
export class TransactionBatchesApi extends BaseAPI {
    /**
     * Provides real-time detailed status information about the transactions that you previously uploaded in the Business Center or processed with the Offline Transaction File Submission service. 
     * @summary Get Transaction Details for a given Batch Id
     * @param {string} id The batch id assigned for the template.
     * @param {string} [uploadDate] Date in which the original batch file was uploaded. Date must be in ISO-8601 format. Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14) **Example date format:**  - yyyy-MM-dd 
     * @param {string} [status] Allows you to filter by rejected response.  Valid values: - Rejected 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionBatchesApi
     */
    public async getTransactionBatchDetails(id: string, uploadDate?: string, status?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return TransactionBatchesApiFp(this.configuration).getTransactionBatchDetails(id, uploadDate, status, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Provide the search range
     * @summary Get Individual Batch File
     * @param {string} id The batch id assigned for the template.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionBatchesApi
     */
    public async getTransactionBatchId(id: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<PtsV1TransactionBatchesIdGet200Response>> {
        return TransactionBatchesApiFp(this.configuration).getTransactionBatchId(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Provide the search range
     * @summary Get a List of Batch Files
     * @param {Date} startTime Valid report Start Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)   **Example date format:**   - yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZZ 
     * @param {Date} endTime Valid report End Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)   **Example date format:**   - yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZZ 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionBatchesApi
     */
    public async getTransactionBatches(startTime: Date, endTime: Date, options?: AxiosRequestConfig) : Promise<AxiosResponse<PtsV1TransactionBatchesGet200Response>> {
        return TransactionBatchesApiFp(this.configuration).getTransactionBatches(startTime, endTime, options).then((request) => request(this.axios, this.basePath));
    }
}
