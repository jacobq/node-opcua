// ----- this file has been automatically generated - do not edit
import { DataType, VariantOptions } from "node-opcua-variant"
import { NodeId } from "node-opcua-nodeid"
import { UAString } from "node-opcua-basic-types"
import { UADataItem } from "node-opcua-nodeset-ua/source/ua_data_item"
import { UARecipeElement, UARecipeElement_Base } from "./ua_recipe_element"
/**
 * Represents a condition sleep step in a recipe.
 *
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/Scales                |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |23:ConditionSleepType ns=23;i=37                  |
 * |isAbstract      |true                                              |
 */
export interface UAConditionSleep_Base extends UARecipeElement_Base {
    /**
     * targetThresholdValue
     * The target value with which the threshold value
     * is compared.
     */
    targetThresholdValue: UADataItem<any, any>;
    /**
     * thresholdValueId
     * Defines an Id of process value that needs to be
     * monitored and is element of the
     * SupportedThresholdValues in the RecipeScale.
     */
    thresholdValueId: UADataItem<UAString, DataType.String>;
    /**
     * thresholdValueNodeId
     * The NodeId of process value that needs to be
     * monitored and is element of the
     * SuppoertedThresholdValues in the RecipeScale.
     * This variable should be used if the value is part
     * of the address space.
     */
    thresholdValueNodeId?: UADataItem<NodeId, DataType.NodeId>;
    /**
     * timeout
     * Timeout specifies the duration within the
     * TargetThresholdValue needs to be reached. If
     * Timeout is exceeded and operator intervention is
     * necessary.
     */
    timeout?: UADataItem<number, DataType.Double>;
}
export interface UAConditionSleep extends UARecipeElement, UAConditionSleep_Base {
}