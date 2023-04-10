// ----- this file has been automatically generated - do not edit
import { UAObject, UAProperty } from "node-opcua-address-space-base"
import { DataType } from "node-opcua-variant"
import { UABaseDataVariable } from "node-opcua-nodeset-ua/source/ua_base_data_variable"
import { UAAnalogItem } from "node-opcua-nodeset-ua/source/ua_analog_item"
/**
 * Container for the different statisticvalues
 * needed in a Checkweigher.
 *
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/Scales                |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |23:StatisticCounterType ns=23;i=43                |
 * |isAbstract      |false                                             |
 */
export interface UAStatisticCounter_Base {
    /**
     * itemCount
     * Totalized count of measurements within the scope
     * of this statistic.
     */
    itemCount: UABaseDataVariable<number, DataType.UInteger>;
    maxValue?: UAAnalogItem<number, DataType.Number>;
    /**
     * meanValue
     * Mean value of zone measured within this statistic.
     */
    meanValue?: UAAnalogItem<number, DataType.Number>;
    minValue?: UAAnalogItem<number, DataType.Number>;
    /**
     * percentageOfTotal
     * Percentage of this statistic in relation to the
     * total. The total is defined as the duration the
     * product is activated within the scale.
     */
    percentageOfTotal?: UAAnalogItem<number, DataType.Number>;
    standardDeviation?: UAAnalogItem<number, DataType.Number>;
    /**
     * sumWeight
     * Totalized weight of all items in ItemCount.
     */
    sumWeight?: UAAnalogItem<number, DataType.Number>;
    /**
     * weighed
     * This flag indicates that the element is
     * considered in the weighed statistic.
     */
    weighed: UAProperty<boolean, DataType.Boolean>;
}
export interface UAStatisticCounter extends UAObject, UAStatisticCounter_Base {
}