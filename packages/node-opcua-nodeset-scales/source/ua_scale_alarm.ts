// ----- this file has been automatically generated - do not edit
import { UAProperty } from "node-opcua-address-space-base"
import { DataType, VariantOptions } from "node-opcua-variant"
import { LocalizedText, QualifiedName } from "node-opcua-data-model"
import { NodeId } from "node-opcua-nodeid"
import { StatusCode } from "node-opcua-status-code"
import { UInt32, UInt16, Int16, UAString } from "node-opcua-basic-types"
import { DTTimeZone } from "node-opcua-nodeset-ua/source/dt_time_zone"
import { DTArgument } from "node-opcua-nodeset-ua/source/dt_argument"
import { DTEnumValue } from "node-opcua-nodeset-ua/source/dt_enum_value"
import { UAAlarmCondition, UAAlarmCondition_Base } from "node-opcua-nodeset-ua/source/ua_alarm_condition"
import { UAMultiStateValueDiscrete } from "node-opcua-nodeset-ua/source/ua_multi_state_value_discrete"
import { UABaseDataVariable } from "node-opcua-nodeset-ua/source/ua_base_data_variable"
/**
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/Scales                |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |23:ScaleAlarmType ns=23;i=21                      |
 * |isAbstract      |false                                             |
 */
export interface UAScaleAlarm_Base extends UAAlarmCondition_Base {
    auxParameters?: UAProperty<UAString[], DataType.String>;
    helpSource?: UAProperty<UAString, DataType.String>;
    notificationCategory: UAMultiStateValueDiscrete<number, DataType.UInteger>;
    notificationId: UAMultiStateValueDiscrete<number, DataType.UInteger>;
    vendorNotificationId?: UABaseDataVariable<UAString, DataType.String>;
}
export interface UAScaleAlarm extends UAAlarmCondition, UAScaleAlarm_Base {
}