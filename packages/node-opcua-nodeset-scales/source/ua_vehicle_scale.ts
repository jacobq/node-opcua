// ----- this file has been automatically generated - do not edit
import { UAMethod } from "node-opcua-address-space-base"
import { DataType } from "node-opcua-variant"
import { DTArgument } from "node-opcua-nodeset-ua/source/dt_argument"
import { UAScaleDevice, UAScaleDevice_Base } from "./ua_scale_device"
import { UAProductionPreset } from "./ua_production_preset"
/**
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/Scales                |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |23:VehicleScaleType ns=23;i=834                   |
 * |isAbstract      |false                                             |
 */
export interface UAVehicleScale_Base extends UAScaleDevice_Base {
    inboundWeighing?: UAMethod;
    onePassWeighing?: UAMethod;
    outboundWeighing?: UAMethod;
    /**
     * productionPreset
     * Contains the productions presets.
     */
    productionPreset?: UAProductionPreset;
}
export interface UAVehicleScale extends Omit<UAScaleDevice, "productionPreset">, UAVehicleScale_Base {
}