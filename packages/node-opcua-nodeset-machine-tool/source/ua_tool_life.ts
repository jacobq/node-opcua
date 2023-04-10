// ----- this file has been automatically generated - do not edit
import { UAProperty } from "node-opcua-address-space-base"
import { DataType } from "node-opcua-variant"
import { EUInformation } from "node-opcua-data-access"
import { UABaseDataVariable, UABaseDataVariable_Base } from "node-opcua-nodeset-ua/source/ua_base_data_variable"
import { EnumToolLifeIndication } from "./enum_tool_life_indication"
/**
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/MachineTool/          |
 * |nodeClass       |VariableType                                      |
 * |typedDefinition |10:ToolLifeType ns=10;i=61                        |
 * |dataType        |Variant                                           |
 * |dataType Name   |number ns=0;i=26                                  |
 * |isAbstract      |false                                             |
 */
export interface UAToolLife_Base<T, DT extends DataType>  extends UABaseDataVariable_Base<T, DT> {
    engineeringUnits: UAProperty<EUInformation, DataType.ExtensionObject>;
    indication: UAProperty<EnumToolLifeIndication, DataType.Int32>;
    isCountingUp: UAProperty<boolean, DataType.Boolean>;
    limitValue?: UAProperty<number, DataType.Number>;
    startValue?: UAProperty<number, DataType.Number>;
    warningValue?: UAProperty<number, DataType.Number>;
}
export interface UAToolLife<T, DT extends DataType> extends UABaseDataVariable<T, DT>, UAToolLife_Base<T, DT> {
}