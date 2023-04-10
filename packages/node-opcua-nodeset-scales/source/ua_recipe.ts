// ----- this file has been automatically generated - do not edit
import { UAObject, UAMethod, UAProperty } from "node-opcua-address-space-base"
import { DataType } from "node-opcua-variant"
import { LocalizedText } from "node-opcua-data-model"
import { UAString } from "node-opcua-basic-types"
import { UAFolder } from "node-opcua-nodeset-ua/source/ua_folder"
/**
 * Represents a recipe. It defines additional
 * methods and properties required for managing a
 * recipe.
 *
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/Scales                |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |23:RecipeType ns=23;i=31                          |
 * |isAbstract      |false                                             |
 */
export interface UARecipe_Base {
    addRecipeElement?: UAMethod;
    /**
     * recipeElements
     * Defines a Placeholder for all RecipeElements that
     * are part of the Recipe.
     */
    recipeElements?: UAFolder;
    /**
     * recipeId
     * RecipeId defines a unique identifier of a recipe.
     */
    recipeId: UAProperty<UAString, DataType.String>;
    /**
     * recipeName
     * Defines a user-readable name of the recipe.
     */
    recipeName: UAProperty<LocalizedText, DataType.LocalizedText>;
    removeRecipeElement?: UAMethod;
}
export interface UARecipe extends UAObject, UARecipe_Base {
}