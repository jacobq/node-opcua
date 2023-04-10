// ----- this file has been automatically generated - do not edit
import { UAMethod } from "node-opcua-address-space-base"
import { DataType } from "node-opcua-variant"
import { LocalizedText } from "node-opcua-data-model"
import { UAString } from "node-opcua-basic-types"
import { DTArgument } from "node-opcua-nodeset-ua/source/dt_argument"
import { UABaseDataVariable } from "node-opcua-nodeset-ua/source/ua_base_data_variable"
import { DTRecipeTargetValue } from "./dt_recipe_target_value"
import { DTRecipeThreshold } from "./dt_recipe_threshold"
import { UAScaleDevice, UAScaleDevice_Base } from "./ua_scale_device"
import { UAProductionPreset } from "./ua_production_preset"
import { UARecipeManagement } from "./ua_recipe_management"
import { UAMaterial } from "./ua_material"
/**
 * RecipeScaleType represents a recipe scale.
 *
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/Scales                |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |23:RecipeScaleType ns=23;i=7                      |
 * |isAbstract      |false                                             |
 */
export interface UARecipeScale_Base extends UAScaleDevice_Base {
    abortRecipe?: UAMethod;
    continueRecipe?: UAMethod;
    /**
     * productionPreset
     * Contains the productions presets.
     */
    productionPreset?: UAProductionPreset;
    /**
     * recipes
     * Defines a folder that contains all recipes.
     * Elements in this folder must have the RecipeType.
     */
    recipes?: UARecipeManagement;
    skipCurrentRecipeElement?: UAMethod;
    startRecipe?: UAMethod;
    stopRecipe?: UAMethod;
    supportedMaterial?: UAMaterial;
    /**
     * supportedTargetValues
     * Defines a list of values that may be set via the
     * recipe.
     */
    supportedTargetValues?: UABaseDataVariable<DTRecipeTargetValue[], DataType.ExtensionObject>;
    /**
     * supportedThresholdValues
     * Defines a list of threshold values that may be
     * used within one recipe.
     */
    supportedThresholdValues?: UABaseDataVariable<DTRecipeThreshold[], DataType.ExtensionObject>;
}
export interface UARecipeScale extends Omit<UAScaleDevice, "productionPreset">, UARecipeScale_Base {
}