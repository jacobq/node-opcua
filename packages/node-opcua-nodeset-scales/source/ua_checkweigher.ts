// ----- this file has been automatically generated - do not edit
import { DataType } from "node-opcua-variant"
import { UADataItem } from "node-opcua-nodeset-ua/source/ua_data_item"
import { UACatchweigher, UACatchweigher_Base } from "./ua_catchweigher"
import { UAProductionPreset } from "./ua_production_preset"
/**
 * Represents a Checkweigher.
 *
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/Scales                |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |23:CheckweigherType ns=23;i=45                    |
 * |isAbstract      |false                                             |
 */
export interface UACheckweigher_Base extends UACatchweigher_Base {
    /**
     * productionPreset
     * Contains the productions presets.
     */
    productionPreset?: UAProductionPreset;
    /**
     * tU1Percent
     * Permitted percentage of items with weight less
     * than TU1
     */
    tU1Percent?: UADataItem<number, DataType.Number>;
}
export interface UACheckweigher extends Omit<UACatchweigher, "productionPreset">, UACheckweigher_Base {
}