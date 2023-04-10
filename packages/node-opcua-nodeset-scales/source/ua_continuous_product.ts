// ----- this file has been automatically generated - do not edit
import { DataType } from "node-opcua-variant"
import { EUInformation } from "node-opcua-data-access"
import { DTRange } from "node-opcua-nodeset-ua/source/dt_range"
import { UAAnalogItem } from "node-opcua-nodeset-ua/source/ua_analog_item"
import { UAProduct, UAProduct_Base } from "./ua_product"
import { UATargetItem } from "./ua_target_item"
/**
 * Represents a product of a continuous scale.
 *
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/Scales                |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |23:ContinuousProductType ns=23;i=18               |
 * |isAbstract      |false                                             |
 */
export interface UAContinuousProduct_Base extends UAProduct_Base {
    /**
     * materialDensity
     * Defines the density of the used material.
     */
    materialDensity?: UAAnalogItem<number, DataType.Number>;
    /**
     * targetFlowRate
     * Defines a preset of flowrate that needs to be
     * conveyed. This value defines the setpoint for the
     * FlowRate control loop.
     */
    targetFlowRate?: UATargetItem<number, DataType.Number>;
    /**
     * targetWeight
     * Defines a preset of the volume to be processed.
     */
    targetWeight?: UATargetItem<number, DataType.Number>;
}
export interface UAContinuousProduct extends UAProduct, UAContinuousProduct_Base {
}