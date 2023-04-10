// ----- this file has been automatically generated - do not edit
import { UAProperty } from "node-opcua-address-space-base"
import { DataType } from "node-opcua-variant"
import { EUInformation } from "node-opcua-data-access"
import { UADataItem, UADataItem_Base } from "node-opcua-nodeset-ua/source/ua_data_item"
import { DTRange } from "node-opcua-nodeset-ua/source/dt_range"
/**
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/Scales                |
 * |nodeClass       |VariableType                                      |
 * |typedDefinition |23:MeasuredItemType ns=23;i=52                    |
 * |dataType        |Null                                              |
 * |dataType Name   |VariantOptions ns=0;i=0                           |
 * |isAbstract      |false                                             |
 */
export interface UAMeasuredItem_Base<T, DT extends DataType>  extends UADataItem_Base<T, DT> {
    engineeringUnits: UAProperty<EUInformation, DataType.ExtensionObject>;
    euRange: UAProperty<DTRange, DataType.ExtensionObject>;
    instrumentRange?: UAProperty<DTRange, DataType.ExtensionObject>;
    /**
     * valuePrecision
     * The maximum precision that the server can
     * maintain for the item based on restrictions in
     * the target environment.
     */
    valuePrecision?: UAProperty<number, DataType.Double>;
}
export interface UAMeasuredItem<T, DT extends DataType> extends Omit<UADataItem<T, DT>, "valuePrecision">, UAMeasuredItem_Base<T, DT> {
}