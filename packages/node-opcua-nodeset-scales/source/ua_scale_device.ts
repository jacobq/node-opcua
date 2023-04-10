// ----- this file has been automatically generated - do not edit
import { UAMethod, UAProperty } from "node-opcua-address-space-base"
import { DataType } from "node-opcua-variant"
import { LocalizedText } from "node-opcua-data-model"
import { EUInformation } from "node-opcua-data-access"
import { Int32, UInt16, UAString } from "node-opcua-basic-types"
import { DTRange } from "node-opcua-nodeset-ua/source/dt_range"
import { DTArgument } from "node-opcua-nodeset-ua/source/dt_argument"
import { UAComponent, UAComponent_Base } from "node-opcua-nodeset-di/source/ua_component"
import { UAConfigurableObject } from "node-opcua-nodeset-di/source/ua_configurable_object"
import { DTWeight } from "./dt_weight"
import { DTPrintableWeight } from "./dt_printable_weight"
import { EnumTareMode } from "./enum_tare_mode"
import { UAWeightItem } from "./ua_weight_item"
import { UAProductionPreset } from "./ua_production_preset"
/**
 * Represents a scale.
 *
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/Scales                |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |23:ScaleDeviceType ns=23;i=2                      |
 * |isAbstract      |true                                              |
 */
export interface UAScaleDevice_Base extends UAComponent_Base {
    allowedEngineeringUnits?: UAProperty<EUInformation[], DataType.ExtensionObject>;
    assetId?: UAProperty<UAString, DataType.String>;
    clearTare?: UAMethod;
    componentName?: UAProperty<LocalizedText, DataType.LocalizedText>;
    /**
     * currentWeight
     * Defines the current value that is measured at the
     * sensor at the current timestamp. Might be a
     * highly fluctuating value.
     */
    currentWeight: UAWeightItem<DTWeight>;
    deviceClass: UAProperty<UAString, DataType.String>;
    deviceManual?: UAProperty<UAString, DataType.String>;
    deviceRevision?: UAProperty<UAString, DataType.String>;
    hardwareRevision: UAProperty<UAString, DataType.String>;
   // PlaceHolder for $WeighingRange$
    manufacturer: UAProperty<LocalizedText, DataType.LocalizedText>;
    manufacturerUri?: UAProperty<UAString, DataType.String>;
    /**
     * materialClass
     * Defines the allowed material the scale may
     * measure. Only relevant for certain scales (e.g.
     * totalizing hopper scale or continuous scale)
     */
    materialClass?: UAProperty<LocalizedText, DataType.LocalizedText>;
    model: UAProperty<LocalizedText, DataType.LocalizedText>;
    /**
     * processStateId
     * Contains an relating identification for the
     * occurring ProcessStateMessage.
     */
    processStateId?: UAProperty<UAString, DataType.String>;
    /**
     * processStateMessage
     * Contains the message of the current overall state
     * of the scale.
     */
    processStateMessage?: UAProperty<LocalizedText, DataType.LocalizedText>;
    productCode?: UAProperty<UAString, DataType.String>;
    productInstanceUri?: UAProperty<UAString, DataType.String>;
    /**
     * productionPreset
     * Contains the productions presets.
     */
    productionPreset?: UAProductionPreset;
    /**
     * registeredWeight
     * Defines the last valid measurement that was
     * recorded and will be used for further processing.
     * This is the legal registered value of the scale.
     */
    registeredWeight?: UAWeightItem<DTWeight>;
    registerWeight?: UAMethod;
    revisionCounter?: UAProperty<Int32, DataType.Int32>;
    serialNumber: UAProperty<UAString, DataType.String>;
    setPresetTare?: UAMethod;
    setTare?: UAMethod;
    setZero?: UAMethod;
    softwareRevision: UAProperty<UAString, DataType.String>;
    subDevices?: UAConfigurableObject;
}
export interface UAScaleDevice extends Omit<UAComponent, "assetId"|"componentName"|"deviceClass"|"deviceManual"|"deviceRevision"|"hardwareRevision"|"manufacturer"|"manufacturerUri"|"model"|"productCode"|"productInstanceUri"|"revisionCounter"|"serialNumber"|"softwareRevision">, UAScaleDevice_Base {
}