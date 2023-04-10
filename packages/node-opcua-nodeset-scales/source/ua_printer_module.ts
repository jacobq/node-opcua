// ----- this file has been automatically generated - do not edit
import { DataType } from "node-opcua-variant"
import { EUInformation } from "node-opcua-data-access"
import { UAString } from "node-opcua-basic-types"
import { DTRange } from "node-opcua-nodeset-ua/source/dt_range"
import { UAAnalogItem } from "node-opcua-nodeset-ua/source/ua_analog_item"
import { UABaseDataVariable } from "node-opcua-nodeset-ua/source/ua_base_data_variable"
import { UAComponent, UAComponent_Base } from "node-opcua-nodeset-di/source/ua_component"
/**
 * Represents a printing device. A printing device
 * is a subdevice of a scale, that prints labels or
 * other documents releated to the scale or the
 * measurement results.
 *
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/Scales                |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |23:PrinterModuleType ns=23;i=29                   |
 * |isAbstract      |false                                             |
 */
export interface UAPrinterModule_Base extends UAComponent_Base {
    /**
     * labelLength
     * Defines the length of the labels in stock.
     */
    labelLength?: UAAnalogItem<number, DataType.Number>;
    /**
     * labelStock
     * Indicates the level of labels in stock in percent.
     */
    labelStock?: UAAnalogItem<number, DataType.Number>;
    /**
     * labelTypeId
     * Defines the id of the label to be printed.
     */
    labelTypeId?: UABaseDataVariable<UAString, DataType.String>;
    /**
     * labelWidth
     * Defines the width of the labels in stock.
     */
    labelWidth?: UAAnalogItem<number, DataType.Number>;
    /**
     * printMediaStock
     * Defines the level of the print media in percent
     * (e.g. ink, wear of thermal element, etc)
     */
    printMediaStock?: UAAnalogItem<number, DataType.Number>;
}
export interface UAPrinterModule extends UAComponent, UAPrinterModule_Base {
}