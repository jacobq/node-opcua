// ----- this file has been automatically generated - do not edit
import { UAProperty } from "node-opcua-address-space-base"
import { DataType } from "node-opcua-variant"
import { UAAnalogUnitRange, UAAnalogUnitRange_Base } from "node-opcua-nodeset-ua/source/ua_analog_unit_range"
import { UABaseDataVariable } from "node-opcua-nodeset-ua/source/ua_base_data_variable"
/**
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/PADIM/                |
 * |nodeClass       |VariableType                                      |
 * |typedDefinition |20:AnalogSignalVariableType ns=20;i=1111          |
 * |dataType        |Variant                                           |
 * |dataType Name   |number ns=0;i=26                                  |
 * |isAbstract      |false                                             |
 */
export interface UAAnalogSignalVariable_Base<T, DT extends DataType>  extends UAAnalogUnitRange_Base<T, DT> {
    simulationState?: UABaseDataVariable<boolean, DataType.Boolean>;
    actualValue?: UABaseDataVariable<number, DataType.Number>;
    simulationValue?: UABaseDataVariable<number, DataType.Number>;
    damping?: UAProperty<number, DataType.Float>;
}
export interface UAAnalogSignalVariable<T, DT extends DataType> extends UAAnalogUnitRange<T, DT>, UAAnalogSignalVariable_Base<T, DT> {
}