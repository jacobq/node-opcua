// ----- this file has been automatically generated - do not edit
import { UAProperty } from "node-opcua-address-space-base"
import { DataType } from "node-opcua-variant"
import { DTRange } from "node-opcua-nodeset-ua/source/dt_range"
import { UAAnalogItem } from "node-opcua-nodeset-ua/source/ua_analog_item"
import { EnumToleranceState } from "./enum_tolerance_state"
import { UAScaleDevice, UAScaleDevice_Base } from "./ua_scale_device"
import { UAProductionPreset } from "./ua_production_preset"
/**
 * Represents an automatic filling scale.
 *
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/Scales                |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |23:AutomaticFillingScaleType ns=23;i=5            |
 * |isAbstract      |false                                             |
 */
export interface UAAutomaticFillingScale_Base extends UAScaleDevice_Base {
    /**
     * deviation
     * Defines the relative amount of over (positive
     * value) or under (negative value) dosed value in
     * relation of the TargetWeight.
     */
    deviation?: UAAnalogItem<number, DataType.Number>;
    /**
     * productionPreset
     * Contains the productions presets.
     */
    productionPreset?: UAProductionPreset;
    /**
     * toleranceState
     * Describes the state of the tolerance deviation.
     * The option under and over needs to be determined
     * via TargetItemType information of TargetWeight.
     */
    toleranceState?: UAProperty<EnumToleranceState, DataType.Int32>;
}
export interface UAAutomaticFillingScale extends Omit<UAScaleDevice, "productionPreset">, UAAutomaticFillingScale_Base {
}