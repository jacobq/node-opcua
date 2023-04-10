// ----- this file has been automatically generated - do not edit
import { UAObject } from "node-opcua-address-space-base"
import { DataType } from "node-opcua-variant"
import { LocalizedText } from "node-opcua-data-model"
import { UAAnalogItem } from "node-opcua-nodeset-ua/source/ua_analog_item"
import { UABaseDataVariable } from "node-opcua-nodeset-ua/source/ua_base_data_variable"
import { UAStatisticCounter } from "./ua_statistic_counter"
/**
 * Container for the weighing zones in a
 * Checkweigher.
 *
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/Scales                |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |23:ZoneType ns=23;i=42                            |
 * |isAbstract      |false                                             |
 */
export interface UAZone_Base {
    /**
     * lowerLimit
     * Defines the lower weight limit of this zone. The
     * lower limit is prior to the upper limit if two
     * zones are beside each other.
     */
    lowerLimit: UAAnalogItem<number, DataType.Number>;
    /**
     * name
     * Defines the user-readable name of the zone.
     */
    name: UABaseDataVariable<LocalizedText, DataType.LocalizedText>;
    /**
     * upperLimit
     * Defines the upper weight limit of this zone.
     */
    upperLimit: UAAnalogItem<number, DataType.Number>;
    /**
     * zoneStatistic
     * Contains statistics regarding this zone.
     */
    zoneStatistic?: UAStatisticCounter;
}
export interface UAZone extends UAObject, UAZone_Base {
}