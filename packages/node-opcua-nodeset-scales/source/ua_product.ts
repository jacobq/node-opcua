// ----- this file has been automatically generated - do not edit
import { UAObject, UAProperty } from "node-opcua-address-space-base"
import { DataType } from "node-opcua-variant"
import { LocalizedText } from "node-opcua-data-model"
import { UAString } from "node-opcua-basic-types"
import { UAAnalogItem } from "node-opcua-nodeset-ua/source/ua_analog_item"
import { UABaseDataVariable } from "node-opcua-nodeset-ua/source/ua_base_data_variable"
import { UATwoStateDiscrete } from "node-opcua-nodeset-ua/source/ua_two_state_discrete"
import { UALockingServices } from "node-opcua-nodeset-di/source/ua_locking_services"
import { UAStatistic } from "./ua_statistic"
/**
 * Represents a product related to the scale.
 *
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/Scales                |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |23:ProductType ns=23;i=11                         |
 * |isAbstract      |true                                              |
 */
export interface UAProduct_Base {
    /**
     * batchId
     * Defines a unique Id of this Batch.
     */
    batchId?: UAProperty<UAString, DataType.String>;
    /**
     * batchName
     * Defines the name of this Batch.
     */
    batchName?: UAProperty<LocalizedText, DataType.LocalizedText>;
    /**
     * jobId
     * Defines a unique id of this job.
     */
    jobId?: UAProperty<UAString, DataType.String>;
    /**
     * jobName
     * Defines the name of this job.
     */
    jobName?: UAProperty<LocalizedText, DataType.LocalizedText>;
    lock?: UALockingServices;
    presetTare?: UAAnalogItem<number, DataType.Number>;
    /**
     * productId
     * Defines a unique Id of this product.
     */
    productId: UABaseDataVariable<UAString, DataType.String>;
    productMode?: UATwoStateDiscrete<boolean>;
    /**
     * productName
     * Defines the name of this product.
     */
    productName: UAProperty<LocalizedText, DataType.LocalizedText>;
    /**
     * statistic
     * Contains the different statistic values of the
     * product.
     */
    statistic?: UAStatistic;
}
export interface UAProduct extends UAObject, UAProduct_Base {
}