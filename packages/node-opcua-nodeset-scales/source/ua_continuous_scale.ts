// ----- this file has been automatically generated - do not edit
import { DataType, VariantOptions } from "node-opcua-variant"
import { EUInformation } from "node-opcua-data-access"
import { DTRange } from "node-opcua-nodeset-ua/source/dt_range"
import { UAAnalogItem } from "node-opcua-nodeset-ua/source/ua_analog_item"
import { DTAbstractWeight } from "./dt_abstract_weight"
import { UAScaleDevice, UAScaleDevice_Base } from "./ua_scale_device"
import { UAMeasuredItem } from "./ua_measured_item"
import { UATotalizer } from "./ua_totalizer"
import { UAProductionPreset } from "./ua_production_preset"
/**
 * Represents a continuous scale.
 *
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/Scales                |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |23:ContinuousScaleType ns=23;i=10                 |
 * |isAbstract      |false                                             |
 */
export interface UAContinuousScale_Base extends UAScaleDevice_Base {
   // PlaceHolder for $Totalizer$
    /**
     * flowRate
     * Defines the conveying capacity in volume per time.
     */
    flowRate: UAMeasuredItem<any, any>;
    /**
     * hopperWeight
     * Defines the remaining amount of supplied product
     * in the hopper.
     */
    hopperWeight?: UAMeasuredItem<any, any>;
    /**
     * masterTotalizer
     * Defines the overall volume that was conveyed over
     * the lifetime of the scale.
     */
    masterTotalizer: UATotalizer;
    /**
     * maxFlowRate
     * Defines the maximum volume that may be conveyed.
     * Largest volume per time.
     */
    maxFlowRate: UAAnalogItem<number, DataType.Number>;
    /**
     * minFlowRate
     * Defines the minimum volume that can be conveyed.
     * Smallest volume per time.
     */
    minFlowRate: UAAnalogItem<number, DataType.Number>;
    /**
     * productionPreset
     * Contains the productions presets.
     */
    productionPreset?: UAProductionPreset;
}
export interface UAContinuousScale extends Omit<UAScaleDevice, "productionPreset">, UAContinuousScale_Base {
}