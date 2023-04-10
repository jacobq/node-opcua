// ----- this file has been automatically generated - do not edit
import { DataType } from "node-opcua-variant"
import { LocalizedText } from "node-opcua-data-model"
import { EUInformation } from "node-opcua-data-access"
import { UAString } from "node-opcua-basic-types"
import { DTRange } from "node-opcua-nodeset-ua/source/dt_range"
import { UAMaterial, UAMaterial_Base } from "./ua_material"
import { UAAutomaticFillingProduct } from "./ua_automatic_filling_product"
/**
 * Represents a material in a recipe that will be
 * filled automatically.
 *
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/Scales                |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |23:MaterialAutomaticType ns=23;i=41               |
 * |isAbstract      |false                                             |
 */
export interface UAMaterialAutomatic_Base extends UAMaterial_Base {
    /**
     * fillingProductInformation
     * Defines the parameters necessary for filling of
     * the material.
     */
    fillingProductInformation: UAAutomaticFillingProduct;
}
export interface UAMaterialAutomatic extends UAMaterial, UAMaterialAutomatic_Base {
}