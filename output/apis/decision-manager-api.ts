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
import { IdMarkingBody } from '../models';
import { RiskV1DecisionsPost201Response } from '../models';
import { RiskV1DecisionsPost400Response } from '../models';
import { RiskV1DecisionsPost400Response1 } from '../models';
import { RiskV1DecisionsPost502Response } from '../models';
import { RiskV1UpdatePost201Response } from '../models';
import { TypeEntriesBody } from '../models';
import { V1DecisionsBody } from '../models';
/**
 * DecisionManagerApi - axios parameter creator
 * @export
 */
export const DecisionManagerApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This call adds/deletes/converts the request information in the negative list.  Provide the list to be updated as the path parameter. This value can be 'postiive', 'negative' or 'review'. 
         * @summary List Management
         * @param {TypeEntriesBody} body 
         * @param {string} type The list to be updated. It can be &#x27;positive&#x27;, &#x27;negative&#x27; or &#x27;review&#x27;.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addNegative: async (body: TypeEntriesBody, type: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling addNegative.');
            }
            // verify required parameter 'type' is not null or undefined
            if (type === null || type === undefined) {
                throw new RequiredError('type','Required parameter type was null or undefined when calling addNegative.');
            }
            const localVarPath = `/risk/v1/lists/{type}/entries`
                .replace(`{${"type"}}`, encodeURIComponent(String(type)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json;charset=utf-8';

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
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Decision Manager can help you automate and streamline your fraud operations. Decision Manager will return a decision based on the request values.
         * @summary Create Decision Manager
         * @param {V1DecisionsBody} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createBundledDecisionManagerCase: async (body: V1DecisionsBody, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling createBundledDecisionManagerCase.');
            }
            const localVarPath = `/risk/v1/decisions`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json;charset=utf-8';

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
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * This can be used to - 1. Add known fraudulent data to the fraud history 2. Remove data added to history with Transaction Marking Tool or by uploading chargeback files 3. Remove chargeback data from history that was automatically added. For detailed information, contact your Cybersource representative  Place the request ID of the transaction you want to mark as suspect (or remove from history) as the path parameter in this request. 
         * @summary Fraud Marking
         * @param {IdMarkingBody} body 
         * @param {string} id Request ID of the transaction that you want to mark as suspect or remove from history.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fraudUpdate: async (body: IdMarkingBody, id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling fraudUpdate.');
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling fraudUpdate.');
            }
            const localVarPath = `/risk/v1/decisions/{id}/marking`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json;charset=utf-8';

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
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DecisionManagerApi - functional programming interface
 * @export
 */
export const DecisionManagerApiFp = function(configuration?: Configuration) {
    return {
        /**
         * This call adds/deletes/converts the request information in the negative list.  Provide the list to be updated as the path parameter. This value can be 'postiive', 'negative' or 'review'. 
         * @summary List Management
         * @param {TypeEntriesBody} body 
         * @param {string} type The list to be updated. It can be &#x27;positive&#x27;, &#x27;negative&#x27; or &#x27;review&#x27;.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addNegative(body: TypeEntriesBody, type: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<RiskV1UpdatePost201Response>>> {
            const localVarAxiosArgs = await DecisionManagerApiAxiosParamCreator(configuration).addNegative(body, type, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Decision Manager can help you automate and streamline your fraud operations. Decision Manager will return a decision based on the request values.
         * @summary Create Decision Manager
         * @param {V1DecisionsBody} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createBundledDecisionManagerCase(body: V1DecisionsBody, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<RiskV1DecisionsPost201Response>>> {
            const localVarAxiosArgs = await DecisionManagerApiAxiosParamCreator(configuration).createBundledDecisionManagerCase(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * This can be used to - 1. Add known fraudulent data to the fraud history 2. Remove data added to history with Transaction Marking Tool or by uploading chargeback files 3. Remove chargeback data from history that was automatically added. For detailed information, contact your Cybersource representative  Place the request ID of the transaction you want to mark as suspect (or remove from history) as the path parameter in this request. 
         * @summary Fraud Marking
         * @param {IdMarkingBody} body 
         * @param {string} id Request ID of the transaction that you want to mark as suspect or remove from history.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async fraudUpdate(body: IdMarkingBody, id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<RiskV1UpdatePost201Response>>> {
            const localVarAxiosArgs = await DecisionManagerApiAxiosParamCreator(configuration).fraudUpdate(body, id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * DecisionManagerApi - factory interface
 * @export
 */
export const DecisionManagerApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * This call adds/deletes/converts the request information in the negative list.  Provide the list to be updated as the path parameter. This value can be 'postiive', 'negative' or 'review'. 
         * @summary List Management
         * @param {TypeEntriesBody} body 
         * @param {string} type The list to be updated. It can be &#x27;positive&#x27;, &#x27;negative&#x27; or &#x27;review&#x27;.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addNegative(body: TypeEntriesBody, type: string, options?: AxiosRequestConfig): Promise<AxiosResponse<RiskV1UpdatePost201Response>> {
            return DecisionManagerApiFp(configuration).addNegative(body, type, options).then((request) => request(axios, basePath));
        },
        /**
         * Decision Manager can help you automate and streamline your fraud operations. Decision Manager will return a decision based on the request values.
         * @summary Create Decision Manager
         * @param {V1DecisionsBody} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createBundledDecisionManagerCase(body: V1DecisionsBody, options?: AxiosRequestConfig): Promise<AxiosResponse<RiskV1DecisionsPost201Response>> {
            return DecisionManagerApiFp(configuration).createBundledDecisionManagerCase(body, options).then((request) => request(axios, basePath));
        },
        /**
         * This can be used to - 1. Add known fraudulent data to the fraud history 2. Remove data added to history with Transaction Marking Tool or by uploading chargeback files 3. Remove chargeback data from history that was automatically added. For detailed information, contact your Cybersource representative  Place the request ID of the transaction you want to mark as suspect (or remove from history) as the path parameter in this request. 
         * @summary Fraud Marking
         * @param {IdMarkingBody} body 
         * @param {string} id Request ID of the transaction that you want to mark as suspect or remove from history.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async fraudUpdate(body: IdMarkingBody, id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<RiskV1UpdatePost201Response>> {
            return DecisionManagerApiFp(configuration).fraudUpdate(body, id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DecisionManagerApi - object-oriented interface
 * @export
 * @class DecisionManagerApi
 * @extends {BaseAPI}
 */
export class DecisionManagerApi extends BaseAPI {
    /**
     * This call adds/deletes/converts the request information in the negative list.  Provide the list to be updated as the path parameter. This value can be 'postiive', 'negative' or 'review'. 
     * @summary List Management
     * @param {TypeEntriesBody} body 
     * @param {string} type The list to be updated. It can be &#x27;positive&#x27;, &#x27;negative&#x27; or &#x27;review&#x27;.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DecisionManagerApi
     */
    public async addNegative(body: TypeEntriesBody, type: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<RiskV1UpdatePost201Response>> {
        return DecisionManagerApiFp(this.configuration).addNegative(body, type, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Decision Manager can help you automate and streamline your fraud operations. Decision Manager will return a decision based on the request values.
     * @summary Create Decision Manager
     * @param {V1DecisionsBody} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DecisionManagerApi
     */
    public async createBundledDecisionManagerCase(body: V1DecisionsBody, options?: AxiosRequestConfig) : Promise<AxiosResponse<RiskV1DecisionsPost201Response>> {
        return DecisionManagerApiFp(this.configuration).createBundledDecisionManagerCase(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * This can be used to - 1. Add known fraudulent data to the fraud history 2. Remove data added to history with Transaction Marking Tool or by uploading chargeback files 3. Remove chargeback data from history that was automatically added. For detailed information, contact your Cybersource representative  Place the request ID of the transaction you want to mark as suspect (or remove from history) as the path parameter in this request. 
     * @summary Fraud Marking
     * @param {IdMarkingBody} body 
     * @param {string} id Request ID of the transaction that you want to mark as suspect or remove from history.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DecisionManagerApi
     */
    public async fraudUpdate(body: IdMarkingBody, id: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<RiskV1UpdatePost201Response>> {
        return DecisionManagerApiFp(this.configuration).fraudUpdate(body, id, options).then((request) => request(this.axios, this.basePath));
    }
}
