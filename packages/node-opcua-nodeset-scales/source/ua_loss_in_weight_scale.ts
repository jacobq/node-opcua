// ----- this file has been automatically generated - do not edit
import { UAMethod, UAProperty } from "node-opcua-address-space-base"
import { DataType } from "node-opcua-variant"
import { UAContinuousScale, UAContinuousScale_Base } from "./ua_continuous_scale"
/**
 * Represents a loss in weight scale.
 *
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/Scales                |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |23:LossInWeightScaleType ns=23;i=50               |
 * |isAbstract      |false                                             |
 */
export interface UALossInWeightScale_Base extends UAContinuousScale_Base {
    dischargeStart: UAMethod;
    dischargeStop: UAMethod;
    /**
     * discharging
     * Indicates that a discharging process is taking
     * place.
     */
    discharging: UAProperty<boolean, DataType.Boolean>;
    refilling: UAProperty<boolean, DataType.Boolean>;
    refillStart: UAMethod;
    refillStop: UAMethod;
}
export interface UALossInWeightScale extends UAContinuousScale, UALossInWeightScale_Base {
}