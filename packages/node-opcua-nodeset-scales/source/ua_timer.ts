// ----- this file has been automatically generated - do not edit
import { DataType } from "node-opcua-variant"
import { UABaseDataVariable } from "node-opcua-nodeset-ua/source/ua_base_data_variable"
import { UARecipeElement, UARecipeElement_Base } from "./ua_recipe_element"
/**
 * TimerType represents a timer step in a recipe.
 * The recipe waits until at least Duration has
 * passed from now.
 *
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/Scales                |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |23:TimerType ns=23;i=36                           |
 * |isAbstract      |false                                             |
 */
export interface UATimer_Base extends UARecipeElement_Base {
    /**
     * duration
     * Defines the period of time the processing needs
     * to wait before processing the next RecipeElement.
     */
    duration: UABaseDataVariable<number, DataType.Double>;
}
export interface UATimer extends UARecipeElement, UATimer_Base {
}