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
import { ReportingV3ReportsGet200Response } from '../models';
import { ReportingV3ReportsGet400Response } from '../models';
import { ReportingV3ReportsIdGet200Response } from '../models';
import { ReportingV3ReportsIdPost400Response } from '../models';
import { ReportingV3ReportsPost400Response } from '../models';
import { V3ReportsBody } from '../models';
/**
 * ReportsApi - axios parameter creator
 * @export
 */
export const ReportsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a one-time report. You must specify the type of report in reportDefinitionName. For a list of values for reportDefinitionName, see the [Reporting Developer Guide](https://www.cybersource.com/developers/documentation/reporting_and_reconciliation) 
         * @summary Create Adhoc Report
         * @param {V3ReportsBody} body Report subscription request payload
         * @param {string} [organizationId] Valid Organization Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createReport: async (body: V3ReportsBody, organizationId?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling createReport.');
            }
            const localVarPath = `/reporting/v3/reports`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
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

            if (organizationId !== undefined) {
                localVarQueryParameter['organizationId'] = organizationId;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json';

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
         * Download a report using the reportId value. If you don’t already know this value, you can obtain it using the Retrieve available reports call. 
         * @summary Get Report Based on Report Id
         * @param {string} reportId Valid Report Id
         * @param {string} [organizationId] Valid Organization Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getReportByReportId: async (reportId: string, organizationId?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'reportId' is not null or undefined
            if (reportId === null || reportId === undefined) {
                throw new RequiredError('reportId','Required parameter reportId was null or undefined when calling getReportByReportId.');
            }
            const localVarPath = `/reporting/v3/reports/{reportId}`
                .replace(`{${"reportId"}}`, encodeURIComponent(String(reportId)));
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
        /**
         * Retrieve a list of the available reports to which you are subscribed. This will also give you the reportId value, which you can also use to download a report. 
         * @summary Retrieve Available Reports
         * @param {Date} startTime Valid report Start Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**   - yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ (e.g. 2018-01-01T00:00:00.000Z) 
         * @param {Date} endTime Valid report End Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**   - yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ (e.g. 2018-01-01T00:00:00.000Z) 
         * @param {string} timeQueryType Specify time you would like to search  Valid values: - reportTimeFrame - executedTime 
         * @param {string} [organizationId] Valid Organization Id
         * @param {string} [reportMimeType] Valid Report Format  Valid values: - application/xml - text/csv 
         * @param {string} [reportFrequency] Valid Report Frequency  Valid values: - DAILY - WEEKLY - MONTHLY - USER_DEFINED - ADHOC 
         * @param {string} [reportName] Valid Report Name
         * @param {number} [reportDefinitionId] Valid Report Definition Id
         * @param {string} [reportStatus] Valid Report Status  Valid values: - COMPLETED - PENDING - QUEUED - RUNNING - ERROR - NO_DATA 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        searchReports: async (startTime: Date, endTime: Date, timeQueryType: string, organizationId?: string, reportMimeType?: string, reportFrequency?: string, reportName?: string, reportDefinitionId?: number, reportStatus?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'startTime' is not null or undefined
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling searchReports.');
            }
            // verify required parameter 'endTime' is not null or undefined
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling searchReports.');
            }
            // verify required parameter 'timeQueryType' is not null or undefined
            if (timeQueryType === null || timeQueryType === undefined) {
                throw new RequiredError('timeQueryType','Required parameter timeQueryType was null or undefined when calling searchReports.');
            }
            const localVarPath = `/reporting/v3/reports`;
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

            if (organizationId !== undefined) {
                localVarQueryParameter['organizationId'] = organizationId;
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

            if (timeQueryType !== undefined) {
                localVarQueryParameter['timeQueryType'] = timeQueryType;
            }

            if (reportMimeType !== undefined) {
                localVarQueryParameter['reportMimeType'] = reportMimeType;
            }

            if (reportFrequency !== undefined) {
                localVarQueryParameter['reportFrequency'] = reportFrequency;
            }

            if (reportName !== undefined) {
                localVarQueryParameter['reportName'] = reportName;
            }

            if (reportDefinitionId !== undefined) {
                localVarQueryParameter['reportDefinitionId'] = reportDefinitionId;
            }

            if (reportStatus !== undefined) {
                localVarQueryParameter['reportStatus'] = reportStatus;
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
 * ReportsApi - functional programming interface
 * @export
 */
export const ReportsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Create a one-time report. You must specify the type of report in reportDefinitionName. For a list of values for reportDefinitionName, see the [Reporting Developer Guide](https://www.cybersource.com/developers/documentation/reporting_and_reconciliation) 
         * @summary Create Adhoc Report
         * @param {V3ReportsBody} body Report subscription request payload
         * @param {string} [organizationId] Valid Organization Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createReport(body: V3ReportsBody, organizationId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await ReportsApiAxiosParamCreator(configuration).createReport(body, organizationId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Download a report using the reportId value. If you don’t already know this value, you can obtain it using the Retrieve available reports call. 
         * @summary Get Report Based on Report Id
         * @param {string} reportId Valid Report Id
         * @param {string} [organizationId] Valid Organization Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getReportByReportId(reportId: string, organizationId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ReportingV3ReportsIdGet200Response>>> {
            const localVarAxiosArgs = await ReportsApiAxiosParamCreator(configuration).getReportByReportId(reportId, organizationId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Retrieve a list of the available reports to which you are subscribed. This will also give you the reportId value, which you can also use to download a report. 
         * @summary Retrieve Available Reports
         * @param {Date} startTime Valid report Start Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**   - yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ (e.g. 2018-01-01T00:00:00.000Z) 
         * @param {Date} endTime Valid report End Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**   - yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ (e.g. 2018-01-01T00:00:00.000Z) 
         * @param {string} timeQueryType Specify time you would like to search  Valid values: - reportTimeFrame - executedTime 
         * @param {string} [organizationId] Valid Organization Id
         * @param {string} [reportMimeType] Valid Report Format  Valid values: - application/xml - text/csv 
         * @param {string} [reportFrequency] Valid Report Frequency  Valid values: - DAILY - WEEKLY - MONTHLY - USER_DEFINED - ADHOC 
         * @param {string} [reportName] Valid Report Name
         * @param {number} [reportDefinitionId] Valid Report Definition Id
         * @param {string} [reportStatus] Valid Report Status  Valid values: - COMPLETED - PENDING - QUEUED - RUNNING - ERROR - NO_DATA 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async searchReports(startTime: Date, endTime: Date, timeQueryType: string, organizationId?: string, reportMimeType?: string, reportFrequency?: string, reportName?: string, reportDefinitionId?: number, reportStatus?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ReportingV3ReportsGet200Response>>> {
            const localVarAxiosArgs = await ReportsApiAxiosParamCreator(configuration).searchReports(startTime, endTime, timeQueryType, organizationId, reportMimeType, reportFrequency, reportName, reportDefinitionId, reportStatus, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ReportsApi - factory interface
 * @export
 */
export const ReportsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Create a one-time report. You must specify the type of report in reportDefinitionName. For a list of values for reportDefinitionName, see the [Reporting Developer Guide](https://www.cybersource.com/developers/documentation/reporting_and_reconciliation) 
         * @summary Create Adhoc Report
         * @param {V3ReportsBody} body Report subscription request payload
         * @param {string} [organizationId] Valid Organization Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createReport(body: V3ReportsBody, organizationId?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return ReportsApiFp(configuration).createReport(body, organizationId, options).then((request) => request(axios, basePath));
        },
        /**
         * Download a report using the reportId value. If you don’t already know this value, you can obtain it using the Retrieve available reports call. 
         * @summary Get Report Based on Report Id
         * @param {string} reportId Valid Report Id
         * @param {string} [organizationId] Valid Organization Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getReportByReportId(reportId: string, organizationId?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<ReportingV3ReportsIdGet200Response>> {
            return ReportsApiFp(configuration).getReportByReportId(reportId, organizationId, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieve a list of the available reports to which you are subscribed. This will also give you the reportId value, which you can also use to download a report. 
         * @summary Retrieve Available Reports
         * @param {Date} startTime Valid report Start Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**   - yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ (e.g. 2018-01-01T00:00:00.000Z) 
         * @param {Date} endTime Valid report End Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**   - yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ (e.g. 2018-01-01T00:00:00.000Z) 
         * @param {string} timeQueryType Specify time you would like to search  Valid values: - reportTimeFrame - executedTime 
         * @param {string} [organizationId] Valid Organization Id
         * @param {string} [reportMimeType] Valid Report Format  Valid values: - application/xml - text/csv 
         * @param {string} [reportFrequency] Valid Report Frequency  Valid values: - DAILY - WEEKLY - MONTHLY - USER_DEFINED - ADHOC 
         * @param {string} [reportName] Valid Report Name
         * @param {number} [reportDefinitionId] Valid Report Definition Id
         * @param {string} [reportStatus] Valid Report Status  Valid values: - COMPLETED - PENDING - QUEUED - RUNNING - ERROR - NO_DATA 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async searchReports(startTime: Date, endTime: Date, timeQueryType: string, organizationId?: string, reportMimeType?: string, reportFrequency?: string, reportName?: string, reportDefinitionId?: number, reportStatus?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<ReportingV3ReportsGet200Response>> {
            return ReportsApiFp(configuration).searchReports(startTime, endTime, timeQueryType, organizationId, reportMimeType, reportFrequency, reportName, reportDefinitionId, reportStatus, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ReportsApi - object-oriented interface
 * @export
 * @class ReportsApi
 * @extends {BaseAPI}
 */
export class ReportsApi extends BaseAPI {
    /**
     * Create a one-time report. You must specify the type of report in reportDefinitionName. For a list of values for reportDefinitionName, see the [Reporting Developer Guide](https://www.cybersource.com/developers/documentation/reporting_and_reconciliation) 
     * @summary Create Adhoc Report
     * @param {V3ReportsBody} body Report subscription request payload
     * @param {string} [organizationId] Valid Organization Id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReportsApi
     */
    public async createReport(body: V3ReportsBody, organizationId?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return ReportsApiFp(this.configuration).createReport(body, organizationId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Download a report using the reportId value. If you don’t already know this value, you can obtain it using the Retrieve available reports call. 
     * @summary Get Report Based on Report Id
     * @param {string} reportId Valid Report Id
     * @param {string} [organizationId] Valid Organization Id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReportsApi
     */
    public async getReportByReportId(reportId: string, organizationId?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<ReportingV3ReportsIdGet200Response>> {
        return ReportsApiFp(this.configuration).getReportByReportId(reportId, organizationId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Retrieve a list of the available reports to which you are subscribed. This will also give you the reportId value, which you can also use to download a report. 
     * @summary Retrieve Available Reports
     * @param {Date} startTime Valid report Start Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**   - yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ (e.g. 2018-01-01T00:00:00.000Z) 
     * @param {Date} endTime Valid report End Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**   - yyyy-MM-dd&#x27;T&#x27;HH:mm:ss.SSSZ (e.g. 2018-01-01T00:00:00.000Z) 
     * @param {string} timeQueryType Specify time you would like to search  Valid values: - reportTimeFrame - executedTime 
     * @param {string} [organizationId] Valid Organization Id
     * @param {string} [reportMimeType] Valid Report Format  Valid values: - application/xml - text/csv 
     * @param {string} [reportFrequency] Valid Report Frequency  Valid values: - DAILY - WEEKLY - MONTHLY - USER_DEFINED - ADHOC 
     * @param {string} [reportName] Valid Report Name
     * @param {number} [reportDefinitionId] Valid Report Definition Id
     * @param {string} [reportStatus] Valid Report Status  Valid values: - COMPLETED - PENDING - QUEUED - RUNNING - ERROR - NO_DATA 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReportsApi
     */
    public async searchReports(startTime: Date, endTime: Date, timeQueryType: string, organizationId?: string, reportMimeType?: string, reportFrequency?: string, reportName?: string, reportDefinitionId?: number, reportStatus?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<ReportingV3ReportsGet200Response>> {
        return ReportsApiFp(this.configuration).searchReports(startTime, endTime, timeQueryType, organizationId, reportMimeType, reportFrequency, reportName, reportDefinitionId, reportStatus, options).then((request) => request(this.axios, this.basePath));
    }
}
