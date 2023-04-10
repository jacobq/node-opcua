// ----- this file has been automatically generated - do not edit
import { UAMethod, UAProperty } from "node-opcua-address-space-base"
import { DataType } from "node-opcua-variant"
import { LocalizedText } from "node-opcua-data-model"
import { Int32, UAString } from "node-opcua-basic-types"
import { UAComponent, UAComponent_Base } from "node-opcua-nodeset-di/source/ua_component"
import { UAConfigurableObject } from "node-opcua-nodeset-di/source/ua_configurable_object"
import { UAStatistic } from "./ua_statistic"
import { UAProductionPreset } from "./ua_production_preset"
/**
 * Represents a scale system and contains one or
 * more scales.
 *
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/Scales                |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |23:ScaleSystemType ns=23;i=44                     |
 * |isAbstract      |false                                             |
 */
export interface UAScaleSystem_Base extends UAComponent_Base {
    assetId?: UAProperty<UAString, DataType.String>;
    componentName?: UAProperty<LocalizedText, DataType.LocalizedText>;
    deviceClass: UAProperty<UAString, DataType.String>;
    deviceManual?: UAProperty<UAString, DataType.String>;
    deviceRevision?: UAProperty<UAString, DataType.String>;
    hardwareRevision: UAProperty<UAString, DataType.String>;
    manufacturer: UAProperty<LocalizedText, DataType.LocalizedText>;
    manufacturerUri?: UAProperty<UAString, DataType.String>;
    model: UAProperty<LocalizedText, DataType.LocalizedText>;
    /**
     * policy
     * Defines the legal guidelines that apply for the
     * scale or need to be complied by the scale.
     */
    policy?: UAProperty<LocalizedText[], DataType.LocalizedText>;
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
    processStateMessage: UAProperty<LocalizedText, DataType.LocalizedText>;
    productCode?: UAProperty<UAString, DataType.String>;
    productInstanceUri?: UAProperty<UAString, DataType.String>;
    productionOutput?: UAStatistic;
    /**
     * productionPreset
     * Contains the productions presets.
     */
    productionPreset?: UAProductionPreset;
    resetGlobalStatistics?: UAMethod;
    revisionCounter?: UAProperty<Int32, DataType.Int32>;
    serialNumber: UAProperty<UAString, DataType.String>;
    softwareRevision: UAProperty<UAString, DataType.String>;
    /**
     * subDevices
     * The Scales must be a subtype of the
     * ScaleDeviceType but must not be from the same
     * type.
     */
    subDevices?: UAConfigurableObject;
}
export interface UAScaleSystem extends Omit<UAComponent, "assetId"|"componentName"|"deviceClass"|"deviceManual"|"deviceRevision"|"hardwareRevision"|"manufacturer"|"manufacturerUri"|"model"|"productCode"|"productInstanceUri"|"revisionCounter"|"serialNumber"|"softwareRevision">, UAScaleSystem_Base {
}