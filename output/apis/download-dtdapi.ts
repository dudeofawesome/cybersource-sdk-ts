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
/**
 * DownloadDTDApi - axios parameter creator
 * @export
 */
export const DownloadDTDApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Used to download DTDs for reports on no-auth.
         * @summary Download DTD for Report
         * @param {string} reportDefinitionNameVersion Name and version of DTD file to download. Some DTDs only have one version. In that case version name is not needed. Some example values are ctdr-1.0, tdr, pbdr-1.1
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDTDV2: async (reportDefinitionNameVersion: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'reportDefinitionNameVersion' is not null or undefined
            if (reportDefinitionNameVersion === null || reportDefinitionNameVersion === undefined) {
                throw new RequiredError('reportDefinitionNameVersion','Required parameter reportDefinitionNameVersion was null or undefined when calling getDTDV2.');
            }
            const localVarPath = `/reporting/v3/dtds/{reportDefinitionNameVersion}`
                .replace(`{${"reportDefinitionNameVersion"}}`, encodeURIComponent(String(reportDefinitionNameVersion)));
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
    }
};

/**
 * DownloadDTDApi - functional programming interface
 * @export
 */
export const DownloadDTDApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Used to download DTDs for reports on no-auth.
         * @summary Download DTD for Report
         * @param {string} reportDefinitionNameVersion Name and version of DTD file to download. Some DTDs only have one version. In that case version name is not needed. Some example values are ctdr-1.0, tdr, pbdr-1.1
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDTDV2(reportDefinitionNameVersion: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await DownloadDTDApiAxiosParamCreator(configuration).getDTDV2(reportDefinitionNameVersion, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * DownloadDTDApi - factory interface
 * @export
 */
export const DownloadDTDApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Used to download DTDs for reports on no-auth.
         * @summary Download DTD for Report
         * @param {string} reportDefinitionNameVersion Name and version of DTD file to download. Some DTDs only have one version. In that case version name is not needed. Some example values are ctdr-1.0, tdr, pbdr-1.1
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDTDV2(reportDefinitionNameVersion: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return DownloadDTDApiFp(configuration).getDTDV2(reportDefinitionNameVersion, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DownloadDTDApi - object-oriented interface
 * @export
 * @class DownloadDTDApi
 * @extends {BaseAPI}
 */
export class DownloadDTDApi extends BaseAPI {
    /**
     * Used to download DTDs for reports on no-auth.
     * @summary Download DTD for Report
     * @param {string} reportDefinitionNameVersion Name and version of DTD file to download. Some DTDs only have one version. In that case version name is not needed. Some example values are ctdr-1.0, tdr, pbdr-1.1
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DownloadDTDApi
     */
    public async getDTDV2(reportDefinitionNameVersion: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return DownloadDTDApiFp(this.configuration).getDTDV2(reportDefinitionNameVersion, options).then((request) => request(this.axios, this.basePath));
    }
}
