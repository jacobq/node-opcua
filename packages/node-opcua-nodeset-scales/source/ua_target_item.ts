// ----- this file has been automatically generated - do not edit
import { UAProperty } from "node-opcua-address-space-base"
import { DataType } from "node-opcua-variant"
import { EUInformation } from "node-opcua-data-access"
import { UAAnalogItem, UAAnalogItem_Base } from "node-opcua-nodeset-ua/source/ua_analog_item"
/**
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/Scales                |
 * |nodeClass       |VariableType                                      |
 * |typedDefinition |23:TargetItemType ns=23;i=51                      |
 * |dataType        |Variant                                           |
 * |dataType Name   |number ns=0;i=26                                  |
 * |isAbstract      |false                                             |
 */
export interface UATargetItem_Base<T, DT extends DataType>  extends UAAnalogItem_Base<T, DT> {
    allowedEngineeringUnits?: UAProperty<EUInformation[], DataType.ExtensionObject>;
    engineeringUnits: UAProperty<EUInformation, DataType.ExtensionObject>;
    minusTolerance?: UAAnalogItem<number, DataType.Number>;
    plusTolerance?: UAAnalogItem<number, DataType.Number>;
}
export interface UATargetItem<T, DT extends DataType> extends Omit<UAAnalogItem<T, DT>, "engineeringUnits">, UATargetItem_Base<T, DT> {
}