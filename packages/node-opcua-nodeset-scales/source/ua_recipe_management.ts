// ----- this file has been automatically generated - do not edit
import { UAObject, UAMethod } from "node-opcua-address-space-base"
/**
 * Contains methods and properties required for
 * managing recipes.
 *
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/Scales                |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |23:RecipeManagementType ns=23;i=30                |
 * |isAbstract      |false                                             |
 */
export interface UARecipeManagement_Base {
   // PlaceHolder for $Recipe_no$
    addRecipe?: UAMethod;
    removeRecipe?: UAMethod;
}
export interface UARecipeManagement extends UAObject, UARecipeManagement_Base {
}