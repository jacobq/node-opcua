// ----- this file has been automatically generated - do not edit
import { DataType } from "node-opcua-variant"
import { LocalizedText } from "node-opcua-data-model"
import { EUInformation } from "node-opcua-data-access"
import { NodeId } from "node-opcua-nodeid"
import { UAString } from "node-opcua-basic-types"
import { DTRange } from "node-opcua-nodeset-ua/source/dt_range"
import { UABaseDataVariable } from "node-opcua-nodeset-ua/source/ua_base_data_variable"
import { UARecipeElement, UARecipeElement_Base } from "./ua_recipe_element"
import { UAMaterial } from "./ua_material"
import { UATargetItem } from "./ua_target_item"
/**
 * Represents a weighing process in a recipe. The
 * process can be an automatic or manual filling
 * process.
 *
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/Scales                |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |23:WeighingType ns=23;i=34                        |
 * |isAbstract      |false                                             |
 */
export interface UAWeighing_Base extends UARecipeElement_Base {
    /**
     * material
     * Defines the material which needs to be measured.
     * Each material has different characteristics that
     * are defined in MaterialType.
     */
    material?: UAMaterial;
    /**
     * targetWeight
     * Defines the preset of the volume to be processed.
     */
    targetWeight: UATargetItem<number, DataType.Number>;
    /**
     * weighingModuleNodeId
     * Defines the Id of the load cell which is used for
     * weighing the product.
     */
    weighingModuleNodeId: UABaseDataVariable<NodeId, DataType.NodeId>;
}
export interface UAWeighing extends UARecipeElement, UAWeighing_Base {
}