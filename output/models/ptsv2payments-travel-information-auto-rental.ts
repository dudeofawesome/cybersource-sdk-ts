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
import { Ptsv2paymentsTravelInformationAutoRentalRentalAddress } from './ptsv2payments-travel-information-auto-rental-rental-address';
import { Ptsv2paymentsTravelInformationAutoRentalReturnAddress } from './ptsv2payments-travel-information-auto-rental-return-address';
import { Ptsv2paymentsTravelInformationAutoRentalTaxDetails } from './ptsv2payments-travel-information-auto-rental-tax-details';
/**
 * 
 * @export
 * @interface Ptsv2paymentsTravelInformationAutoRental
 */
export interface Ptsv2paymentsTravelInformationAutoRental {
    /**
     * No Show Indicator provides an indicator noting that the individual did not show up after making a reservation for a vehicle. Possible values: - true - false 
     * @type {boolean}
     * @memberof Ptsv2paymentsTravelInformationAutoRental
     */
    noShowIndicator?: boolean;
    /**
     * Name of the individual making the rental agreement.  Valid data lengths by card:  |Card Specific Validation|VISA|MasterCard|Discover|AMEX| |--- |--- |--- |--- | | Filed Length| 40| 40| 29| 26| | Field Type| AN| ANS| AN| AN| | M/O/C| O| M| M| M| 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationAutoRental
     */
    customerName?: string;
    /**
     * Classification of the rented auto.  **NOTE** For VISA, this is a 2-byte optional code.  Valid values for American Express & MasterCard:  |American Express |MasterCard |Description| |--- |--- |--- | | 0001| 0001| Mini| | 0002| 0002| Subcompact| | 0003| 0003| Economy| | 0004| 0004| Compact| | 0005| 0005| Midsize| | 0006| 0006| Intermediate| | 0007| 0007| Standard| | 0008| 0008| Fulll size| | 0009| 0009| Luxury| | 0010| 0010| Premium| | 0011| 0011| Minivan| | 0012| 0012| 12-passenger van| | 0013| 0013| Moving van| | 0014| 0014| 15-passenger van| | 0015| 0015| Cargo van| | 0016| 0016| 12-foot truck| | 0017| 0017| 20-foot truck| | 0018| 0018| 24-foot truck| | 0019| 0019| 26-foot truck| | 0020| 0020| Moped| | 0021| 0021| Stretch| | 0022| 0022| Regular| | 0023| 0023| Unique| | 0024| 0024| Exotic| | 0025| 0025| Small/medium truck| | 0026| 0026| Large truck| | 0027| 0027| Small SUV| | 0028| 0028| Medium SUV| | 0029| 0029| Large SUV| | 0030| 0030| Exotic SUV| | 9999| 9999| Miscellaneous|  Additional Values allowed **only** for `American Express`:  |American Express|MasterCard|Description| |--- |--- |--- | | 0031| NA| Four Wheel Drive| | 0032| NA| Special| | 0099| NA| Taxi| 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationAutoRental
     */
    vehicleClass?: string;
    /**
     * Total number of miles driven by the customer. This field is supported only for MasterCard and American Express. 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationAutoRental
     */
    distanceTravelled?: string;
    /**
     * Miles/Kilometers Indicator shows whether the “miles” fields are expressed in miles or kilometers.  Allowed values: - `K` - Kilometers - `M` - Miles 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationAutoRental
     */
    distanceUnit?: string;
    /**
     * Date/time the auto was returned to the rental agency. Format: ``yyyy-MM-dd HH-mm-ss z`` This field is supported for Visa, MasterCard, and American Express. 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationAutoRental
     */
    returnDateTime?: string;
    /**
     * Date/time the auto was picked up from the rental agency. Format: `yyyy-MM-dd HH-mm-ss z` This field is supported for Visa, MasterCard, and American Express. 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationAutoRental
     */
    rentalDateTime?: string;
    /**
     * Maximum number of free miles or kilometers allowed to a customer for the duration of the auto rental agreement. This field is supported only for MasterCard and American Express. 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationAutoRental
     */
    maxFreeDistance?: string;
    /**
     * Used for MC and Discover  Valid values: - `true` - Yes (insurance was purchased) - `false` - No (insurance was not purchased) 
     * @type {boolean}
     * @memberof Ptsv2paymentsTravelInformationAutoRental
     */
    insuranceIndicator?: boolean;
    /**
     * Used to identify special circumstances applicable to the Card Transaction or Cardholder, such as \"renter” or ”show”.  This code is `2 digit` value agreed by Merchant and processor. 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationAutoRental
     */
    programCode?: string;
    /**
     * 
     * @type {Ptsv2paymentsTravelInformationAutoRentalReturnAddress}
     * @memberof Ptsv2paymentsTravelInformationAutoRental
     */
    returnAddress?: Ptsv2paymentsTravelInformationAutoRentalReturnAddress;
    /**
     * 
     * @type {Ptsv2paymentsTravelInformationAutoRentalRentalAddress}
     * @memberof Ptsv2paymentsTravelInformationAutoRental
     */
    rentalAddress?: Ptsv2paymentsTravelInformationAutoRentalRentalAddress;
    /**
     * Auto rental agency’s agreement (invoice) number provided to the customer. It is used to trace any inquiries about transactions. This field is supported for Visa, MasterCard, and American Express. This Merchant-defined value, which may be composed of any combination of characters and/or numerals, may become part of the descriptive bill on the Cardmember's statement. 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationAutoRental
     */
    agreementNumber?: string;
    /**
     * Odometer reading at time of vehicle rental. 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationAutoRental
     */
    odometerReading?: string;
    /**
     * This field contains a unique identifier assigned by the company to the vehicle. 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationAutoRental
     */
    vehicleIdentificationNumber?: string;
    /**
     * Corporate Identifier provides the unique identifier of the corporation or entity renting the vehicle:  |Card Specific Validation|VISA|MasterCard|Discover|AMEX| |--- |--- |--- |--- | | Filed Length| NA| 12| NA| NA| | Field Type| NA| AN| NA| NA| | M/O/C| NA| O| NA| NA| 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationAutoRental
     */
    companyId?: string;
    /**
     * The number of additional drivers included on the rental agreement not including the individual who signed the rental agreement. 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationAutoRental
     */
    numberOfAdditionalDrivers?: string;
    /**
     * Age of the driver renting the vehicle. 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationAutoRental
     */
    driverAge?: string;
    /**
     * Program code used to identify special circumstances, such as “frequent renter” or “no show” status for the renter. Possible values: - `0`: not applicable (default) - `1`: frequent renter - `2`: no show  For authorizations, this field is supported only for Visa.  For captures, this field is supported for Visa, MasterCard, and American Express.  Code for special programs applicable to the Card Transaction or the Cardholder. 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationAutoRental
     */
    specialProgramCode?: string;
    /**
     * Make of the vehicle being rented (e.g., Chevrolet or Ford). 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationAutoRental
     */
    vehicleMake?: string;
    /**
     * Model of the vehicle being rented (e.g., Cavalier or Focus). 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationAutoRental
     */
    vehicleModel?: string;
    /**
     * Indicates the time period for which the vehicle rental rate applies (e.g., daily, weekly or monthly). Daily, Weekly and Monthly are valid values. 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationAutoRental
     */
    timePeriod?: string;
    /**
     * Commodity code or International description code used to classify the item. Contact your acquirer for a list of codes. 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationAutoRental
     */
    commodityCode?: string;
    /**
     * Customer service telephone number that is used to resolve questions or disputes. Include the area code, exchange, and number. This field is supported only for MasterCard and American Express. 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationAutoRental
     */
    customerServicePhoneNumber?: string;
    /**
     * 
     * @type {Ptsv2paymentsTravelInformationAutoRentalTaxDetails}
     * @memberof Ptsv2paymentsTravelInformationAutoRental
     */
    taxDetails?: Ptsv2paymentsTravelInformationAutoRentalTaxDetails;
    /**
     * Insurance charges. Field is conditional and can include decimal point. 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationAutoRental
     */
    insuranceAmount?: string;
    /**
     * Extra charges incurred for a one-way rental agreement for the auto. This field is supported only for Visa. 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationAutoRental
     */
    oneWayDropOffAmount?: string;
    /**
     * For **MasterCard** and **Discover**: Adjusted amount indicator code that indicates any miscellaneous charges incurred after the auto was returned. Possible values: - `A` - Drop-off charges - `B` - Delivery charges - `C` - Parking expenses - `D` - Extra hours - `E` - Violations - `X` - More than one of the above charges  For **American Express**: Audit indicator code that indicates any adjustment for mileage, fuel, auto damage, etc. made to a rental agreement and whether the cardholder was notified.  Possible value for the authorization service: - `A` (default): adjustment amount greater than 0 (zero)  Possible values for the capture service: - `X` - Multiple adjustments - `Y` - One adjustment only; Cardmember notified - `Z` - One adjustment only; Cardmember not notified. This value is used as the default if the request does not include this field and includes an adjustment amount greater than 0 (zero). This is an optional field. 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationAutoRental
     */
    adjustedAmountIndicator?: string;
    /**
     * Adjusted Amount indicates whether any miscellaneous charges were incurred after the vehicle was returned.  For authorizations, this field is supported only for American Express.  For captures, this field is supported only for MasterCard and American Express. **NOTE** For American Express, this field is required if the `travelInformation.autoRental.adjustedAmountIndicator` field is included in the request and has a value; otherwise, this field is optional.  For all other card types, this field is ignored. 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationAutoRental
     */
    adjustedAmount?: string;
    /**
     * Extra gasoline charges that extend beyond the basic rental agreement. This field is supported only for Visa. 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationAutoRental
     */
    fuelCharges?: string;
    /**
     * Weekly Rental Amount provides the amount charged for a seven-day rental period. Field - Time Period needs to be populated with Weekly if this field is present 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationAutoRental
     */
    weeklyRentalRate?: string;
    /**
     * Daily auto rental rate charged. This field is supported only for MasterCard and American Express.  Field - Time Period needs to be populated with Daily if this field is present 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationAutoRental
     */
    dailyRentalRate?: string;
    /**
     * Rate charged for each mile. This field is supported only for MasterCard and American Express. 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationAutoRental
     */
    ratePerMile?: string;
    /**
     * Regular Mileage Charge provides the amount charged for regular miles traveled during vehicle rental. Two decimal places 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationAutoRental
     */
    mileageCharge?: string;
    /**
     * Extra mileage charges that extend beyond the basic rental agreement. This field is supported only for Visa. 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationAutoRental
     */
    extraMileageCharge?: string;
    /**
     * Extra charges related to a late return of the rented auto. This field is supported only for Visa. 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationAutoRental
     */
    lateFeeAmount?: string;
    /**
     * (Towing Charges) provides the amount charged to tow the rental vehicle. 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationAutoRental
     */
    towingCharge?: string;
    /**
     * (Extra Charges) provides the extra charges associated with the vehicle rental. 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationAutoRental
     */
    extraCharge?: string;
    /**
     * Amount charged for renting a Global Positioning Service (GPS). 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationAutoRental
     */
    gpsCharge?: string;
    /**
     * Additional charges incurred for phone usage included on the total bill. 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationAutoRental
     */
    phoneCharge?: string;
    /**
     * Extra charges incurred due to a parking violation for the auto. This field is supported only for Visa. 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationAutoRental
     */
    parkingViolationCharge?: string;
    /**
     * Total amount charged for all other miscellaneous charges not previously defined. 
     * @type {string}
     * @memberof Ptsv2paymentsTravelInformationAutoRental
     */
    otherCharges?: string;
}
