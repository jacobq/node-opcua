// ----- this file has been automatically generated - do not edit
import { UAProperty } from "node-opcua-address-space-base"
import { DataType, VariantOptions } from "node-opcua-variant"
import { EUInformation } from "node-opcua-data-access"
import { DTRange } from "node-opcua-nodeset-ua/source/dt_range"
import { UADataItem } from "node-opcua-nodeset-ua/source/ua_data_item"
import { EnumEqualityAndRelationalOperator } from "./enum_equality_and_relational_operator"
import { UAConditionSleep, UAConditionSleep_Base } from "./ua_condition_sleep"
/**
 * Represents a condition sleep step in a recipe.
 *
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/Scales                |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |23:AnalogConditionSleepType ns=23;i=38            |
 * |isAbstract      |false                                             |
 */
export interface UAAnalogConditionSleep_Base extends UAConditionSleep_Base {
    /**
     * conditionMode
     * Defines the type of condition operator that is
     * used.
     */
    conditionMode: UAProperty<EnumEqualityAndRelationalOperator, DataType.Int32>;
    /**
     * targetThresholdValue
     * The target value with which the threshold value
     * is compared.
     */
    targetThresholdValue: UADataItem<number, DataType.Number>;
}
export interface UAAnalogConditionSleep extends Omit<UAConditionSleep, "targetThresholdValue">, UAAnalogConditionSleep_Base {
}