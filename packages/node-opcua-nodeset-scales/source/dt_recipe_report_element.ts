// ----- this file has been automatically generated - do not edit
import { LocalizedText } from "node-opcua-data-model"
import { ExtensionObject } from "node-opcua-extension-object"
import { DTStructure } from "node-opcua-nodeset-ua/source/dt_structure"
/**
 * |           |                                                  |
 * |-----------|--------------------------------------------------|
 * | namespace |http://opcfoundation.org/UA/Scales                |
 * | nodeClass |DataType                                          |
 * | name      |23:RecipeReportElementType                        |
 * | isAbstract|false                                             |
 */
export interface DTRecipeReportElement extends DTStructure {
  reportMessage: LocalizedText; // LocalizedText ns=0;i=21
  timestamp: Date; // DateTime ns=0;i=294
}
export interface UDTRecipeReportElement extends ExtensionObject, DTRecipeReportElement {};