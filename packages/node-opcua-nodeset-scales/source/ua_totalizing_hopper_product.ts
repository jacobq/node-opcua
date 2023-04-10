// ----- this file has been automatically generated - do not edit
import { DataType } from "node-opcua-variant"
import { EUInformation } from "node-opcua-data-access"
import { DTRange } from "node-opcua-nodeset-ua/source/dt_range"
import { UABaseDataVariable } from "node-opcua-nodeset-ua/source/ua_base_data_variable"
import { UAProduct, UAProduct_Base } from "./ua_product"
import { UATargetItem } from "./ua_target_item"
/**
 * Represents a product of a totalizing hopper scale.
 *
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/Scales                |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |23:TotalizingHopperProductType ns=23;i=22         |
 * |isAbstract      |false                                             |
 */
export interface UATotalizingHopperProduct_Base extends UAProduct_Base {
    /**
     * tipCounter
     * Defines the number of fillings (downpour, bulk
     * produce)
     */
    tipCounter: UABaseDataVariable<number, DataType.UInteger>;
    /**
     * volumeTargetValue
     * Defines the preset of the volume to be processed.
     */
    volumeTargetValue?: UATargetItem<number, DataType.Number>;
}
export interface UATotalizingHopperProduct extends UAProduct, UATotalizingHopperProduct_Base {
}