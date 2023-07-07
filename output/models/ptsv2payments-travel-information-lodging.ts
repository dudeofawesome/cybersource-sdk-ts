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
import { Ptsv2paymentsTravelInformationLodgingRoom } from './ptsv2payments-travel-information-lodging-room';
/**
 * 
 * @export
 * @interface Ptsv2paymentsTravelInformationLodging
 */
export interface Ptsv2paymentsTravelInformationLodging {
    /**
     * Date on which the guest checked in. In the case of a no-show or a reservation, the scheduled arrival date. Format: `MMDDYY`. For best interchange rates, make sure it is a valid date. 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationLodging
     */
    checkInDate?: string;
    /**
     * Date on which the guest checked out. Format: `MMDDYY`. For best interchange rates, make sure it is a valid date. 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationLodging
     */
    checkOutDate?: string;
    /**
     * The object containing the number of nights and the daily rate that applies for that no of nights. 
     * @type {Array<Ptsv2paymentsTravelInformationLodgingRoom>}
     * @memberof Ptsv2paymentsTravelInformationLodging
     */
    room?: Array<Ptsv2paymentsTravelInformationLodgingRoom>;
    /**
     * Smoking preference of the guest. Possible values: - `Y`: smoking room - `N`: non-smoking room 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationLodging
     */
    smokingPreference?: string;
    /**
     * Number of rooms booked by the cardholder. 
     * @type {number}
     * @memberof Ptsv2paymentsTravelInformationLodging
     */
    numberOfRooms?: number;
    /**
     * Number of guests staying in the room. 
     * @type {number}
     * @memberof Ptsv2paymentsTravelInformationLodging
     */
    numberOfGuests?: number;
    /**
     * Type of room, such as queen, king, or two doubles. 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationLodging
     */
    roomBedType?: string;
    /**
     * Type of tax, such as tourist or hotel. 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationLodging
     */
    roomTaxType?: string;
    /**
     * Type of rate, such as corporate or senior citizen. 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationLodging
     */
    roomRateType?: string;
    /**
     * Name of the guest under which the room is reserved. 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationLodging
     */
    guestName?: string;
    /**
     * Your toll-free customer service phone number. 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationLodging
     */
    customerServicePhoneNumber?: string;
    /**
     * Code assigned to a business. You can use this code to identify corporate rates and discounts for guests. 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationLodging
     */
    corporateClientCode?: string;
    /**
     * Amount of an additional coupon or discount. 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationLodging
     */
    additionalDiscountAmount?: string;
    /**
     * Location of room, such as lake view or ocean view. 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationLodging
     */
    roomLocation?: string;
    /**
     * Code that identifies special circumstances. Possible values: - `1`: lodging (default) - `2`: no show reservation - `3`: advanced deposit 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationLodging
     */
    specialProgramCode?: string;
    /**
     * Total tax amount. 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationLodging
     */
    totalTaxAmount?: string;
    /**
     * Prepaid amount, such as a deposit. 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationLodging
     */
    prepaidCost?: string;
    /**
     * Cost for all food and beverages. 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationLodging
     */
    foodAndBeverageCost?: string;
    /**
     * Total tax for the room. 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationLodging
     */
    roomTaxAmount?: string;
    /**
     * Adjusted amount charged in addition to the reservation amount after the stay is complete. 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationLodging
     */
    adjustmentAmount?: string;
    /**
     * Cost of telephone services. 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationLodging
     */
    phoneCost?: string;
    /**
     * Cost of restaurant purchases 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationLodging
     */
    restaurantCost?: string;
    /**
     * Cost of room service. 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationLodging
     */
    roomServiceCost?: string;
    /**
     * Cost of mini-bar purchases. 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationLodging
     */
    miniBarCost?: string;
    /**
     * Cost of laundry services. 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationLodging
     */
    laundryCost?: string;
    /**
     * Miscellaneous costs. 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationLodging
     */
    miscellaneousCost?: string;
    /**
     * Cost of gift shop purchases. 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationLodging
     */
    giftShopCost?: string;
    /**
     * Cost of movies. 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationLodging
     */
    movieCost?: string;
    /**
     * Cost of health club services. 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationLodging
     */
    healthClubCost?: string;
    /**
     * Cost of valet parking services. 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationLodging
     */
    valetParkingCost?: string;
    /**
     * Cost of the cash that was disbursed plus any associated service fees 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationLodging
     */
    cashDisbursementCost?: string;
    /**
     * Cost of non-room purchases, such as meals and gifts. 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationLodging
     */
    nonRoomCost?: string;
    /**
     * Cost of business center services. 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationLodging
     */
    businessCenterCost?: string;
    /**
     * Cost of lounge and bar purchases. 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationLodging
     */
    loungeBarCost?: string;
    /**
     * Cost of transportation services. 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationLodging
     */
    transportationCost?: string;
    /**
     * Gratuity. 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationLodging
     */
    gratuityAmount?: string;
    /**
     * Cost of conference room services. 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationLodging
     */
    conferenceRoomCost?: string;
    /**
     * Cost of audio visual services. 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationLodging
     */
    audioVisualCost?: string;
    /**
     * Cost of banquet services. 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationLodging
     */
    banquestCost?: string;
    /**
     * Tax on non-room purchases. 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationLodging
     */
    nonRoomTaxAmount?: string;
    /**
     * Service fee for early departure. 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationLodging
     */
    earlyCheckOutCost?: string;
    /**
     * Cost of Internet access. 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationLodging
     */
    internetAccessCost?: string;
}
