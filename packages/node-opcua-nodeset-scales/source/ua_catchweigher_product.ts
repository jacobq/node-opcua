// ----- this file has been automatically generated - do not edit
import { UAMethod } from "node-opcua-address-space-base"
import { DataType } from "node-opcua-variant"
import { LocalizedText } from "node-opcua-data-model"
import { EUInformation } from "node-opcua-data-access"
import { UAString } from "node-opcua-basic-types"
import { DTRange } from "node-opcua-nodeset-ua/source/dt_range"
import { DTArgument } from "node-opcua-nodeset-ua/source/dt_argument"
import { UAAnalogItem } from "node-opcua-nodeset-ua/source/ua_analog_item"
import { DTWeight } from "./dt_weight"
import { UAProduct, UAProduct_Base } from "./ua_product"
import { UAWeighingItem } from "./ua_weighing_item"
import { UATargetItem } from "./ua_target_item"
/**
 * Represents a product of a Catchweigher.
 *
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/Scales                |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |23:CatchweigherProductType ns=23;i=17             |
 * |isAbstract      |false                                             |
 */
export interface UACatchweigherProduct_Base extends UAProduct_Base {
   // PlaceHolder for $Zones$
    addZone?: UAMethod;
    lastItem?: UAWeighingItem;
    /**
     * presetHeight
     * Defines the predefined height (in direction of
     * global gravity) of the measured item. The value
     * must be write before the item is measured.
     */
    presetHeight?: UAAnalogItem<number, DataType.Number>;
    /**
     * presetLength
     * Defines the predefined length (in direction of
     * travel) of the measured item. The value must be
     * written before the item is measured.
     */
    presetLength?: UAAnalogItem<number, DataType.Number>;
    /**
     * presetWidth
     * Defines the predefined width (in third possible
     * orthogonal direction to height and length) of the
     * measured item. The value must be write before the
     * item is measured.
     */
    presetWidth?: UAAnalogItem<number, DataType.Number>;
    removeZone?: UAMethod;
    targetThroughput?: UATargetItem<number, DataType.Number>;
}
export interface UACatchweigherProduct extends UAProduct, UACatchweigherProduct_Base {
}