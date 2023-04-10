// ----- this file has been automatically generated - do not edit
import { UAProperty } from "node-opcua-address-space-base"
import { DataType } from "node-opcua-variant"
import { UInt16 } from "node-opcua-basic-types"
import { UAAnalogUnitRange, UAAnalogUnitRange_Base } from "node-opcua-nodeset-ua/source/ua_analog_unit_range"
import { UAMultiStateValueDiscrete } from "node-opcua-nodeset-ua/source/ua_multi_state_value_discrete"
import { UAAnalogUnit } from "node-opcua-nodeset-ua/source/ua_analog_unit"
import { UABaseDataVariable } from "node-opcua-nodeset-ua/source/ua_base_data_variable"
/**
 * Define the desired value of the Variable it
 * belongs to.
 *
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/Machinery/ProcessValues/|
 * |nodeClass       |VariableType                                      |
 * |typedDefinition |21:ProcessValueSetpointVariableType ns=21;i=2003  |
 * |dataType        |Variant                                           |
 * |dataType Name   |number ns=0;i=26                                  |
 * |isAbstract      |false                                             |
 */
export interface UAProcessValueSetpointVariable_Base<T, DT extends DataType>  extends UAAnalogUnitRange_Base<T, DT> {
    /**
     * autoDeviationAdjustment
     * Defines if the deviation variables are
     * automatically adjusted.
     */
    autoDeviationAdjustment?: UAProperty<boolean, DataType.Boolean>;
    /**
     * deviationSensitivity
     * Indicates the sensitivity of the deviation
     * variables when automatically set.
     */
    deviationSensitivity?: UAMultiStateValueDiscrete<UInt16, DataType.UInt16>;
    /**
     * highDeviation
     * Defines the high limit for deviation, relative to
     * the process value setpoint.
     */
    highDeviation?: UAAnalogUnit<number, DataType.Number>;
    /**
     * highHighDeviation
     * Defines the high high limit for deviation,
     * relative to the process value setpoint.
     */
    highHighDeviation?: UAAnalogUnit<number, DataType.Number>;
    /**
     * lowDeviation
     * Defines the low limit for deviation, relative to
     * the process value setpoint.
     */
    lowDeviation?: UAAnalogUnit<number, DataType.Number>;
    /**
     * lowLowDeviation
     * Defines the low low limit for deviation, relative
     * to the process value setpoint.
     */
    lowLowDeviation?: UAAnalogUnit<number, DataType.Number>;
    /**
     * substituteValue
     * Value that should be used when the process value
     * setpoint cannot be controlled anymore.
     */
    substituteValue?: UABaseDataVariable<number, DataType.Number>;
}
export interface UAProcessValueSetpointVariable<T, DT extends DataType> extends UAAnalogUnitRange<T, DT>, UAProcessValueSetpointVariable_Base<T, DT> {
}