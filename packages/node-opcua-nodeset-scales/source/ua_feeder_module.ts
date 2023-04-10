// ----- this file has been automatically generated - do not edit
import { UAMethod, UAProperty } from "node-opcua-address-space-base"
import { DataType, VariantOptions } from "node-opcua-variant"
import { LocalizedText, QualifiedName } from "node-opcua-data-model"
import { EUInformation } from "node-opcua-data-access"
import { Int32, UAString } from "node-opcua-basic-types"
import { DTArgument } from "node-opcua-nodeset-ua/source/dt_argument"
import { DTRange } from "node-opcua-nodeset-ua/source/dt_range"
import { UAAnalogItem } from "node-opcua-nodeset-ua/source/ua_analog_item"
import { UAComponent, UAComponent_Base } from "node-opcua-nodeset-di/source/ua_component"
import { UAMeasuredItem } from "./ua_measured_item"
import { UATargetItem } from "./ua_target_item"
/**
 * Represents a feeder system. A feeder system is a
 * subdevice of an automatic scale for conveying the
 * product to or from the WeighingBridge.
 *
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/Scales                |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |23:FeederModuleType ns=23;i=28                    |
 * |isAbstract      |false                                             |
 */
export interface UAFeederModule_Base extends UAComponent_Base {
    /**
     * feederLoad
     * Defines the current loaded weight on the feeder
     * system.
     */
    feederLoad?: UAMeasuredItem<number, DataType.Number>;
    /**
     * feederRunning
     * Indicates that the feeder system is running.
     */
    feederRunning?: UAProperty<boolean, DataType.Boolean>;
    /**
     * feederSpeed
     * Defines the current speed of a feeder system. The
     * unit of the FeederSpeed depends on the
     * construction system.
     */
    feederSpeed?: UATargetItem<number, DataType.Number>;
    /**
     * maximumFeederSpeed
     * Defines the maximal possible speed of the feeder.
     */
    maximumFeederSpeed?: UAAnalogItem<number, DataType.Number>;
    /**
     * minimalFeederSpeed
     * Defines the minimal possible speed of the feeder.
     */
    minimalFeederSpeed?: UAAnalogItem<number, DataType.Number>;
    setFeederSpeed?: UAMethod;
}
export interface UAFeederModule extends UAComponent, UAFeederModule_Base {
}