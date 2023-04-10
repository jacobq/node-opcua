// ----- this file has been automatically generated - do not edit
import { UAObject, UAProperty } from "node-opcua-address-space-base"
import { DataType } from "node-opcua-variant"
import { UAString } from "node-opcua-basic-types"
import { UAAnalogItem } from "node-opcua-nodeset-ua/source/ua_analog_item"
import { UAWeighingItem } from "./ua_weighing_item"
import { UAStatisticCounter } from "./ua_statistic_counter"
/**
 * Container for the different statisticvalues. All
 * variables are optional, so that the statistics
 * can be instanced application-specific.
 *
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/Scales                |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |23:StatisticType ns=23;i=25                       |
 * |isAbstract      |false                                             |
 */
export interface UAStatistic_Base {
    lastItem?: UAWeighingItem;
    resetCondition?: UAProperty<UAString, DataType.String>;
    /**
     * startTime
     * Defines the duration of the statistic analysis.
     * This value is relevant for time statistics.
     */
    startTime?: UAProperty<Date, DataType.DateTime>;
    /**
     * tare
     * Defines the last occurring tare value at time of
     * statistic.
     */
    tare?: UAAnalogItem<number, DataType.Double>;
    /**
     * throughput
     * Defines the number of items registered over
     * period of the statistic.
     */
    throughput?: UAAnalogItem<number, DataType.UInteger>;
    totalPackages?: UAStatisticCounter;
    totalPackagesWeighed?: UAStatisticCounter;
}
export interface UAStatistic extends UAObject, UAStatistic_Base {
}