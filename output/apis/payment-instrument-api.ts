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
import { InlineResponse2011 } from '../models';
import { InlineResponse400 } from '../models';
import { PaymentinstrumentsPaymentInstrumentTokenIdBody1 } from '../models';
import { V1PaymentinstrumentsBody } from '../models';
/**
 * PaymentInstrumentApi - axios parameter creator
 * @export
 */
export const PaymentInstrumentApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Delete a Payment Instrument
         * @param {string} paymentInstrumentTokenId The TokenId of a payment instrument.
         * @param {string} [profileId] The id of a profile containing user specific TMS configuration.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deletePaymentInstrument: async (paymentInstrumentTokenId: string, profileId?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'paymentInstrumentTokenId' is not null or undefined
            if (paymentInstrumentTokenId === null || paymentInstrumentTokenId === undefined) {
                throw new RequiredError('paymentInstrumentTokenId','Required parameter paymentInstrumentTokenId was null or undefined when calling deletePaymentInstrument.');
            }
            const localVarPath = `/tms/v1/paymentinstruments/{paymentInstrumentTokenId}`
                .replace(`{${"paymentInstrumentTokenId"}}`, encodeURIComponent(String(paymentInstrumentTokenId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (profileId !== undefined && profileId !== null) {
                localVarHeaderParameter['profile-id'] = String(profileId);
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
         * 
         * @summary Retrieve a Payment Instrument
         * @param {string} paymentInstrumentTokenId The TokenId of a payment instrument.
         * @param {string} [profileId] The id of a profile containing user specific TMS configuration.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPaymentInstrument: async (paymentInstrumentTokenId: string, profileId?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'paymentInstrumentTokenId' is not null or undefined
            if (paymentInstrumentTokenId === null || paymentInstrumentTokenId === undefined) {
                throw new RequiredError('paymentInstrumentTokenId','Required parameter paymentInstrumentTokenId was null or undefined when calling getPaymentInstrument.');
            }
            const localVarPath = `/tms/v1/paymentinstruments/{paymentInstrumentTokenId}`
                .replace(`{${"paymentInstrumentTokenId"}}`, encodeURIComponent(String(paymentInstrumentTokenId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (profileId !== undefined && profileId !== null) {
                localVarHeaderParameter['profile-id'] = String(profileId);
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
         * 
         * @summary Update a Payment Instrument
         * @param {PaymentinstrumentsPaymentInstrumentTokenIdBody1} body 
         * @param {string} paymentInstrumentTokenId The TokenId of a payment instrument.
         * @param {string} [profileId] The id of a profile containing user specific TMS configuration.
         * @param {string} [ifMatch] Contains an ETag value from a GET request to make the request conditional.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchPaymentInstrument: async (body: PaymentinstrumentsPaymentInstrumentTokenIdBody1, paymentInstrumentTokenId: string, profileId?: string, ifMatch?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling patchPaymentInstrument.');
            }
            // verify required parameter 'paymentInstrumentTokenId' is not null or undefined
            if (paymentInstrumentTokenId === null || paymentInstrumentTokenId === undefined) {
                throw new RequiredError('paymentInstrumentTokenId','Required parameter paymentInstrumentTokenId was null or undefined when calling patchPaymentInstrument.');
            }
            const localVarPath = `/tms/v1/paymentinstruments/{paymentInstrumentTokenId}`
                .replace(`{${"paymentInstrumentTokenId"}}`, encodeURIComponent(String(paymentInstrumentTokenId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (profileId !== undefined && profileId !== null) {
                localVarHeaderParameter['profile-id'] = String(profileId);
            }

            if (ifMatch !== undefined && ifMatch !== null) {
                localVarHeaderParameter['if-match'] = String(ifMatch);
            }

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
         * Include an existing TMS Instrument Identifier id in the request body. * An Instrument Identifier token can be created by calling: **POST *_/tms/v1/instrumentidentifiers*** 
         * @summary Create a Payment Instrument
         * @param {V1PaymentinstrumentsBody} body 
         * @param {string} [profileId] The id of a profile containing user specific TMS configuration.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postPaymentInstrument: async (body: V1PaymentinstrumentsBody, profileId?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling postPaymentInstrument.');
            }
            const localVarPath = `/tms/v1/paymentinstruments`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (profileId !== undefined && profileId !== null) {
                localVarHeaderParameter['profile-id'] = String(profileId);
            }

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
 * PaymentInstrumentApi - functional programming interface
 * @export
 */
export const PaymentInstrumentApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Delete a Payment Instrument
         * @param {string} paymentInstrumentTokenId The TokenId of a payment instrument.
         * @param {string} [profileId] The id of a profile containing user specific TMS configuration.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deletePaymentInstrument(paymentInstrumentTokenId: string, profileId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await PaymentInstrumentApiAxiosParamCreator(configuration).deletePaymentInstrument(paymentInstrumentTokenId, profileId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Retrieve a Payment Instrument
         * @param {string} paymentInstrumentTokenId The TokenId of a payment instrument.
         * @param {string} [profileId] The id of a profile containing user specific TMS configuration.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPaymentInstrument(paymentInstrumentTokenId: string, profileId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse2011>>> {
            const localVarAxiosArgs = await PaymentInstrumentApiAxiosParamCreator(configuration).getPaymentInstrument(paymentInstrumentTokenId, profileId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Update a Payment Instrument
         * @param {PaymentinstrumentsPaymentInstrumentTokenIdBody1} body 
         * @param {string} paymentInstrumentTokenId The TokenId of a payment instrument.
         * @param {string} [profileId] The id of a profile containing user specific TMS configuration.
         * @param {string} [ifMatch] Contains an ETag value from a GET request to make the request conditional.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchPaymentInstrument(body: PaymentinstrumentsPaymentInstrumentTokenIdBody1, paymentInstrumentTokenId: string, profileId?: string, ifMatch?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse2011>>> {
            const localVarAxiosArgs = await PaymentInstrumentApiAxiosParamCreator(configuration).patchPaymentInstrument(body, paymentInstrumentTokenId, profileId, ifMatch, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Include an existing TMS Instrument Identifier id in the request body. * An Instrument Identifier token can be created by calling: **POST *_/tms/v1/instrumentidentifiers*** 
         * @summary Create a Payment Instrument
         * @param {V1PaymentinstrumentsBody} body 
         * @param {string} [profileId] The id of a profile containing user specific TMS configuration.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postPaymentInstrument(body: V1PaymentinstrumentsBody, profileId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse2011>>> {
            const localVarAxiosArgs = await PaymentInstrumentApiAxiosParamCreator(configuration).postPaymentInstrument(body, profileId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * PaymentInstrumentApi - factory interface
 * @export
 */
export const PaymentInstrumentApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Delete a Payment Instrument
         * @param {string} paymentInstrumentTokenId The TokenId of a payment instrument.
         * @param {string} [profileId] The id of a profile containing user specific TMS configuration.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deletePaymentInstrument(paymentInstrumentTokenId: string, profileId?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return PaymentInstrumentApiFp(configuration).deletePaymentInstrument(paymentInstrumentTokenId, profileId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Retrieve a Payment Instrument
         * @param {string} paymentInstrumentTokenId The TokenId of a payment instrument.
         * @param {string} [profileId] The id of a profile containing user specific TMS configuration.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPaymentInstrument(paymentInstrumentTokenId: string, profileId?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse2011>> {
            return PaymentInstrumentApiFp(configuration).getPaymentInstrument(paymentInstrumentTokenId, profileId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update a Payment Instrument
         * @param {PaymentinstrumentsPaymentInstrumentTokenIdBody1} body 
         * @param {string} paymentInstrumentTokenId The TokenId of a payment instrument.
         * @param {string} [profileId] The id of a profile containing user specific TMS configuration.
         * @param {string} [ifMatch] Contains an ETag value from a GET request to make the request conditional.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchPaymentInstrument(body: PaymentinstrumentsPaymentInstrumentTokenIdBody1, paymentInstrumentTokenId: string, profileId?: string, ifMatch?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse2011>> {
            return PaymentInstrumentApiFp(configuration).patchPaymentInstrument(body, paymentInstrumentTokenId, profileId, ifMatch, options).then((request) => request(axios, basePath));
        },
        /**
         * Include an existing TMS Instrument Identifier id in the request body. * An Instrument Identifier token can be created by calling: **POST *_/tms/v1/instrumentidentifiers*** 
         * @summary Create a Payment Instrument
         * @param {V1PaymentinstrumentsBody} body 
         * @param {string} [profileId] The id of a profile containing user specific TMS configuration.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postPaymentInstrument(body: V1PaymentinstrumentsBody, profileId?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse2011>> {
            return PaymentInstrumentApiFp(configuration).postPaymentInstrument(body, profileId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PaymentInstrumentApi - object-oriented interface
 * @export
 * @class PaymentInstrumentApi
 * @extends {BaseAPI}
 */
export class PaymentInstrumentApi extends BaseAPI {
    /**
     * 
     * @summary Delete a Payment Instrument
     * @param {string} paymentInstrumentTokenId The TokenId of a payment instrument.
     * @param {string} [profileId] The id of a profile containing user specific TMS configuration.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentInstrumentApi
     */
    public async deletePaymentInstrument(paymentInstrumentTokenId: string, profileId?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return PaymentInstrumentApiFp(this.configuration).deletePaymentInstrument(paymentInstrumentTokenId, profileId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Retrieve a Payment Instrument
     * @param {string} paymentInstrumentTokenId The TokenId of a payment instrument.
     * @param {string} [profileId] The id of a profile containing user specific TMS configuration.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentInstrumentApi
     */
    public async getPaymentInstrument(paymentInstrumentTokenId: string, profileId?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse2011>> {
        return PaymentInstrumentApiFp(this.configuration).getPaymentInstrument(paymentInstrumentTokenId, profileId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Update a Payment Instrument
     * @param {PaymentinstrumentsPaymentInstrumentTokenIdBody1} body 
     * @param {string} paymentInstrumentTokenId The TokenId of a payment instrument.
     * @param {string} [profileId] The id of a profile containing user specific TMS configuration.
     * @param {string} [ifMatch] Contains an ETag value from a GET request to make the request conditional.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentInstrumentApi
     */
    public async patchPaymentInstrument(body: PaymentinstrumentsPaymentInstrumentTokenIdBody1, paymentInstrumentTokenId: string, profileId?: string, ifMatch?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse2011>> {
        return PaymentInstrumentApiFp(this.configuration).patchPaymentInstrument(body, paymentInstrumentTokenId, profileId, ifMatch, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Include an existing TMS Instrument Identifier id in the request body. * An Instrument Identifier token can be created by calling: **POST *_/tms/v1/instrumentidentifiers*** 
     * @summary Create a Payment Instrument
     * @param {V1PaymentinstrumentsBody} body 
     * @param {string} [profileId] The id of a profile containing user specific TMS configuration.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentInstrumentApi
     */
    public async postPaymentInstrument(body: V1PaymentinstrumentsBody, profileId?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse2011>> {
        return PaymentInstrumentApiFp(this.configuration).postPaymentInstrument(body, profileId, options).then((request) => request(this.axios, this.basePath));
    }
}
