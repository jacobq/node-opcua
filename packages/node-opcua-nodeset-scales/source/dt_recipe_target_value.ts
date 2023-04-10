// ----- this file has been automatically generated - do not edit
import { LocalizedText } from "node-opcua-data-model"
import { NodeId } from "node-opcua-nodeid"
import { UInt32 } from "node-opcua-basic-types"
import { ExtensionObject } from "node-opcua-extension-object"
import { DTStructure } from "node-opcua-nodeset-ua/source/dt_structure"
/**
 * |           |                                                  |
 * |-----------|--------------------------------------------------|
 * | namespace |http://opcfoundation.org/UA/Scales                |
 * | nodeClass |DataType                                          |
 * | name      |23:RecipeTargetValueType                          |
 * | isAbstract|false                                             |
 */
export interface DTRecipeTargetValue extends DTStructure {
  targetValueId: UInt32; // UInt32 ns=0;i=7
  targetValueNodeId?: NodeId; // NodeId ns=0;i=17
  targetValueName: LocalizedText; // LocalizedText ns=0;i=21
}
export interface UDTRecipeTargetValue extends ExtensionObject, DTRecipeTargetValue {};