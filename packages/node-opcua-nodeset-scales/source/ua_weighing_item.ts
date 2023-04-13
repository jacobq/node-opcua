// ----- this file has been automatically generated - do not edit
import { UAObject, UAProperty } from "node-opcua-address-space-base"
import { DataType } from "node-opcua-variant"
import { UAString } from "node-opcua-basic-types"
import { UAAnalogItem } from "node-opcua-nodeset-ua/source/ua_analog_item"
import { DTWeight } from "./dt_weight"
import { UAWeightItem } from "./ua_weight_item"
/**
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/Scales                |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |23:WeighingItemType ns=23;i=24                    |
 * |isAbstract      |false                                             |
 */
export interface UAWeighingItem_Base {
    /**
     * itemId
     * Defines a unique number that is assigned to an
     * item.
     */
    itemId?: UAProperty<UAString, DataType.String>;
    /**
     * measuredHeight
     * Defines the maximum height (in direction of
     * travel) of the measured item.
     */
    measuredHeight?: UAAnalogItem<number, DataType.Number>;
    /**
     * measuredLength
     * Defines the maximum measured length (in direction
     * of travel) of the measured item.
     */
    measuredLength?: UAAnalogItem<number, DataType.Number>;
    /**
     * measuredVolume
     * Defines the volume of the item.
     */
    measuredVolume?: UAAnalogItem<number, DataType.Number>;
    /**
     * measuredWeight
     * Defines the registered weight that may be
     * unmistakeable referenced to one item.
     */
    measuredWeight: UAWeightItem<DTWeight>;
    /**
     * measuredWidth
     * Defines the maximum width (in third possible
     * orthogonal direction to height and length) of the
     * measured item.
     */
    measuredWidth?: UAAnalogItem<number, DataType.Number>;
    zoneName?: UAProperty<UAString, DataType.String>;
}
export interface UAWeighingItem extends UAObject, UAWeighingItem_Base {
}