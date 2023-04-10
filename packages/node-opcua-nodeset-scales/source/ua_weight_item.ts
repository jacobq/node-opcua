// ----- this file has been automatically generated - do not edit
import { UAProperty } from "node-opcua-address-space-base"
import { DataType } from "node-opcua-variant"
import { UInt16, UAString } from "node-opcua-basic-types"
import { UAAnalogItem } from "node-opcua-nodeset-ua/source/ua_analog_item"
import { UAMeasuredItem, UAMeasuredItem_Base } from "./ua_measured_item"
import { DTWeight } from "./dt_weight"
import { DTPrintableWeight } from "./dt_printable_weight"
import { EnumTareMode } from "./enum_tare_mode"
/**
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/Scales                |
 * |nodeClass       |VariableType                                      |
 * |typedDefinition |23:WeightItemType ns=23;i=53                      |
 * |dataType        |ExtensionObject                                   |
 * |dataType Name   |DTWeight ns=23;i=55                               |
 * |isAbstract      |false                                             |
 */
export interface UAWeightItem_Base<T extends DTWeight>  extends UAMeasuredItem_Base<T, DataType.ExtensionObject> {
    actualScaleInterval?: UAAnalogItem<number, DataType.Number>;
    centerOfZero?: UAProperty<boolean, DataType.Boolean>;
    currentRangeId?: UAProperty<UInt16, DataType.UInt16>;
    grossNegative?: UAProperty<boolean, DataType.Boolean>;
    highResolutionValue?: UAProperty<DTWeight, DataType.ExtensionObject>;
    /**
     * insideZero
     * Defines if the current measured value is within
     * the valid range for the setting zero procedure.
     * This is a necessary condition to success the
     * setZero() method if available.
     */
    insideZero?: UAProperty<boolean, DataType.Boolean>;
    invalid: UAProperty<boolean, DataType.Boolean>;
    legalForTrade?: UAProperty<boolean, DataType.Boolean>;
    overload: UAProperty<boolean, DataType.Boolean>;
    printableValue?: UAProperty<DTPrintableWeight, DataType.ExtensionObject>;
    tareMode: UAProperty<EnumTareMode, DataType.Int32>;
    underload: UAProperty<boolean, DataType.Boolean>;
    verificationScaleInterval?: UAAnalogItem<number, DataType.Number>;
    weightId?: UAProperty<UAString, DataType.String>;
    weightStable?: UAProperty<boolean, DataType.Boolean>;
}
export interface UAWeightItem<T extends DTWeight> extends UAMeasuredItem<T, DataType.ExtensionObject>, UAWeightItem_Base<T> {
}