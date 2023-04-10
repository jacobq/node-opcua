// ----- this file has been automatically generated - do not edit
import { UAMethod, UAProperty } from "node-opcua-address-space-base"
import { DataType } from "node-opcua-variant"
import { LocalizedText } from "node-opcua-data-model"
import { EUInformation } from "node-opcua-data-access"
import { NodeId } from "node-opcua-nodeid"
import { UAString } from "node-opcua-basic-types"
import { DTRange } from "node-opcua-nodeset-ua/source/dt_range"
import { DTArgument } from "node-opcua-nodeset-ua/source/dt_argument"
import { EnumTareMode } from "./enum_tare_mode"
import { DTWeight } from "./dt_weight"
import { UAWeightItem } from "./ua_weight_item"
import { UAProduct, UAProduct_Base } from "./ua_product"
import { UAMaterial } from "./ua_material"
export interface UAVehicleProduct_deltaWeight<T extends DTWeight> extends Omit<UAWeightItem<T>, "engineeringUnits"|"euRange"|"insideZero"|"invalid"|"overload"|"tareMode"|"underload"|"weightStable"> { // Variable
      engineeringUnits: UAProperty<EUInformation, DataType.ExtensionObject>;
      euRange: UAProperty<DTRange, DataType.ExtensionObject>;
      /**
       * insideZero
       * Defines if the current measured value is within
       * the valid range for the setting zero procedure.
       * This is a necessary condition to success the
       * setZero() method if available.
       */
      insideZero?: UAProperty<boolean, DataType.Boolean>;
      invalid: UAProperty<boolean, DataType.Boolean>;
      isFilling?: UAProperty<boolean, DataType.Boolean>;
      overload: UAProperty<boolean, DataType.Boolean>;
      tareMode: UAProperty<EnumTareMode, DataType.Int32>;
      underload: UAProperty<boolean, DataType.Boolean>;
      weightStable?: UAProperty<boolean, DataType.Boolean>;
}
/**
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/Scales                |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |23:VehicleProductType ns=23;i=832                 |
 * |isAbstract      |false                                             |
 */
export interface UAVehicleProduct_Base extends UAProduct_Base {
    carrierDisplayName?: UAProperty<LocalizedText, DataType.LocalizedText>;
    carrierId?: UAProperty<UAString, DataType.String>;
    customer?: UAProperty<LocalizedText, DataType.LocalizedText>;
    deltaWeight: UAVehicleProduct_deltaWeight<DTWeight>;
    destination?: UAProperty<LocalizedText, DataType.LocalizedText>;
    driverDisplayName?: UAProperty<LocalizedText, DataType.LocalizedText>;
    driverId?: UAProperty<UAString, DataType.String>;
    getVehicleInformation?: UAMethod;
    inboundScale?: UAProperty<NodeId, DataType.NodeId>;
    inboundWeight?: UAWeightItem<DTWeight>;
    material?: UAMaterial;
    outboundScale?: UAProperty<NodeId, DataType.NodeId>;
    outboundWeight: UAWeightItem<DTWeight>;
    scaleOperatorId?: UAProperty<UAString, DataType.String>;
    supplier?: UAProperty<LocalizedText, DataType.LocalizedText>;
    tare?: UAProperty<number, DataType.Number>;
    tareExpirationDate?: UAProperty<Date, DataType.DateTime>;
    totalWeight?: UAProperty<DTWeight, DataType.ExtensionObject>;
    totalWeightResetDate?: UAProperty<Date, DataType.DateTime>;
    vehicleId: UAProperty<UAString, DataType.String>;
}
export interface UAVehicleProduct extends UAProduct, UAVehicleProduct_Base {
}