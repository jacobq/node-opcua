// ----- this file has been automatically generated - do not edit
import { UAProperty } from "node-opcua-address-space-base"
import { DataType } from "node-opcua-variant"
import { UInt32 } from "node-opcua-basic-types"
import { UAStatistic, UAStatistic_Base } from "./ua_statistic"
/**
 * Container for the different statisticvalues. All
 * variables are optional, so that the statistics
 * can be instanced application-specific. Should be
 * used for application-specific statistics.
 *
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/Scales                |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |23:FloatingStatisticType ns=23;i=26               |
 * |isAbstract      |false                                             |
 */
export interface UAFloatingStatistic_Base extends UAStatistic_Base {
    /**
     * numberOfValues
     * Defines the number of values that are considered
     * for this floating statistics.
     */
    numberOfValues: UAProperty<UInt32, DataType.UInt32>;
}
export interface UAFloatingStatistic extends UAStatistic, UAFloatingStatistic_Base {
}