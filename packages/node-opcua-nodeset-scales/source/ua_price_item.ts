// ----- this file has been automatically generated - do not edit
import { UAProperty } from "node-opcua-address-space-base"
import { DataType } from "node-opcua-variant"
import { UABaseDataVariable } from "node-opcua-nodeset-ua/source/ua_base_data_variable"
import { DTCurrencyUnit } from "node-opcua-nodeset-ua/source/dt_currency_unit"
import { UAWeighingItem, UAWeighingItem_Base } from "./ua_weighing_item"
export interface UAPriceItem_itemPrice<T, DT extends DataType> extends UABaseDataVariable<T, DT> { // Variable
      currencyUnit: UAProperty<DTCurrencyUnit, DataType.ExtensionObject>;
}
/**
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/Scales                |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |23:PriceItemType ns=23;i=833                      |
 * |isAbstract      |false                                             |
 */
export interface UAPriceItem_Base extends UAWeighingItem_Base {
    /**
     * itemPrice
     * ItemPrice defines the price related to measured
     * weight and UnitPrice.
     */
    itemPrice?: UAPriceItem_itemPrice<number, DataType.Number>;
}
export interface UAPriceItem extends UAWeighingItem, UAPriceItem_Base {
}