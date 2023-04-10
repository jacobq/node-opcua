// ----- this file has been automatically generated - do not edit
import { DataType } from "node-opcua-variant"
import { EUInformation } from "node-opcua-data-access"
import { DTRange } from "node-opcua-nodeset-ua/source/dt_range"
import { UAAnalogUnit } from "node-opcua-nodeset-ua/source/ua_analog_unit"
import { UAAnalogUnitRange } from "node-opcua-nodeset-ua/source/ua_analog_unit_range"
import { UAAnalogSignalVariable, UAAnalogSignalVariable_Base } from "node-opcua-nodeset-padim/source/ua_analog_signal_variable"
/**
 * Provides a process value and additional meta data
 *
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/Machinery/ProcessValues/|
 * |nodeClass       |VariableType                                      |
 * |typedDefinition |21:ProcessValueVariableType ns=21;i=2002          |
 * |dataType        |Variant                                           |
 * |dataType Name   |number ns=0;i=26                                  |
 * |isAbstract      |false                                             |
 */
export interface UAProcessValueVariable_Base<T, DT extends DataType>  extends UAAnalogSignalVariable_Base<T, DT> {
    /**
     * highHighLimit
     * Defines the absolute high high limit
     */
    highHighLimit?: UAAnalogUnit<number, DataType.Number>;
    /**
     * highLimit
     * Defines the absolute high limit
     */
    highLimit?: UAAnalogUnit<number, DataType.Number>;
    /**
     * lowLimit
     * Defines the absolute low limit
     */
    lowLimit?: UAAnalogUnit<number, DataType.Number>;
    /**
     * lowLowLimit
     * Defines the absolute low low limit
     */
    lowLowLimit?: UAAnalogUnit<number, DataType.Number>;
    /**
     * percentageValue
     * Provides the process value in percentage.
     */
    percentageValue?: UAAnalogUnitRange<number, DataType.Double>;
}
export interface UAProcessValueVariable<T, DT extends DataType> extends UAAnalogSignalVariable<T, DT>, UAProcessValueVariable_Base<T, DT> {
}