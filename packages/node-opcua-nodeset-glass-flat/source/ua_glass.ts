// ----- this file has been automatically generated - do not edit
import { UAProperty } from "node-opcua-address-space-base"
import { DataType } from "node-opcua-variant"
import { EUInformation } from "node-opcua-data-access"
import { UAString } from "node-opcua-basic-types"
import { UAAnalogUnit } from "node-opcua-nodeset-ua/source/ua_analog_unit"
import { EnumCoatingClass } from "./enum_coating_class"
import { EnumSignificantSide } from "./enum_significant_side"
import { EnumStructureAlignment } from "./enum_structure_alignment"
import { UABaseMaterial, UABaseMaterial_Base } from "./ua_base_material"
/**
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/Glass/Flat/           |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |13:GlassType ns=13;i=1011                         |
 * |isAbstract      |false                                             |
 */
export interface UAGlass_Base extends UABaseMaterial_Base {
    absorption?: UAAnalogUnit<number, DataType.Number>;
    coatingClass: UAProperty<EnumCoatingClass, DataType.Int32>;
    coatingEmessivity?: UAAnalogUnit<number, DataType.Number>;
    coatingSubClass?: UAProperty<UAString, DataType.String>;
    electricalConductivity?: UAAnalogUnit<number, DataType.Number>;
    orientation: UAProperty<number, DataType.Number>;
    reflection?: UAAnalogUnit<number, DataType.Number>;
    significantSide: UAProperty<EnumSignificantSide, DataType.Int32>;
    structureAlignment: UAProperty<EnumStructureAlignment, DataType.Int32>;
    structureClass: UAProperty<UAString, DataType.String>;
    transmission?: UAAnalogUnit<number, DataType.Number>;
    x: UAAnalogUnit<number, DataType.Double>;
    y: UAAnalogUnit<number, DataType.Double>;
}
export interface UAGlass extends Omit<UABaseMaterial, "x"|"y">, UAGlass_Base {
}