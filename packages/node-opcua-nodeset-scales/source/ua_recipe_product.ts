// ----- this file has been automatically generated - do not edit
import { DataType } from "node-opcua-variant"
import { NodeId } from "node-opcua-nodeid"
import { UInt64, UInt32, UInt16, UAString } from "node-opcua-basic-types"
import { DTArgument } from "node-opcua-nodeset-ua/source/dt_argument"
import { UABaseDataVariable } from "node-opcua-nodeset-ua/source/ua_base_data_variable"
import { UAFile } from "node-opcua-nodeset-ua/source/ua_file"
import { DTRecipeReportElement } from "./dt_recipe_report_element"
import { UAProduct, UAProduct_Base } from "./ua_product"
/**
 * Represents a product of a recipe scale.
 *
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/Scales                |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |23:RecipeProductType ns=23;i=19                   |
 * |isAbstract      |false                                             |
 */
export interface UARecipeProduct_Base extends UAProduct_Base {
    /**
     * recipeNodeId
     * Defines the node id of the recipe that is being
     * produced.
     */
    recipeNodeId: UABaseDataVariable<NodeId, DataType.NodeId>;
    /**
     * report
     * Defines an array with the various messages from
     * the recipe. Each RecipeElement generates its own
     * report message.
     */
    report: UABaseDataVariable<DTRecipeReportElement[], DataType.ExtensionObject>;
    /**
     * reportFile
     * Defines the File (binary, xml or other) that
     * contains the report of the current process.
     */
    reportFile?: UAFile;
}
export interface UARecipeProduct extends UAProduct, UARecipeProduct_Base {
}