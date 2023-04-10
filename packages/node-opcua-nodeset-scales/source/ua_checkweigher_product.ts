// ----- this file has been automatically generated - do not edit
import { UAProperty } from "node-opcua-address-space-base"
import { DataType } from "node-opcua-variant"
import { EUInformation } from "node-opcua-data-access"
import { UAString } from "node-opcua-basic-types"
import { DTRange } from "node-opcua-nodeset-ua/source/dt_range"
import { UAAnalogItem } from "node-opcua-nodeset-ua/source/ua_analog_item"
import { UAStatistic } from "./ua_statistic"
import { UAAcceptedStatisticCounter } from "./ua_accepted_statistic_counter"
import { UARejectedStatisticCounter } from "./ua_rejected_statistic_counter"
import { UAStatisticCounter } from "./ua_statistic_counter"
import { UACatchweigherProduct, UACatchweigherProduct_Base } from "./ua_catchweigher_product"
import { UATargetItem } from "./ua_target_item"
export interface UACheckweigherProduct_statistic extends Omit<UAStatistic, "giveAway"|"packagesAcceptedWithLowerToleranceLimit1"|"packagesRejectedByDistanceFault"|"packagesRejectedByLength"|"packagesRejectedByLowerToleranceLimit1"|"packagesRejectedByLowerToleranceLimit2"|"packagesRejectedByMeanValueRequirement"|"packagesRejectedByMetal"|"packagesRejectedByVision"|"packagesRejectedByXRay"|"percentageLowerToleranceLimit"|"resetCondition"|"startTime"|"tare"|"throughput"|"totalPackagesAccepted"|"totalPackagesRejected"|"$PackagesRejectedBySystem$"> { // Object
      /**
       * giveAway
       * Defines the totalized value of volume above
       * TargetWeight.
       */
      giveAway?: UAAnalogItem<number, DataType.Number>;
      packagesAcceptedWithLowerToleranceLimit1?: UAAcceptedStatisticCounter;
      packagesRejectedByDistanceFault?: UARejectedStatisticCounter;
      packagesRejectedByLength?: UARejectedStatisticCounter;
      packagesRejectedByLowerToleranceLimit1?: UARejectedStatisticCounter;
      packagesRejectedByLowerToleranceLimit2?: UARejectedStatisticCounter;
      packagesRejectedByMeanValueRequirement?: UARejectedStatisticCounter;
      packagesRejectedByMetal?: UARejectedStatisticCounter;
      packagesRejectedByVision?: UARejectedStatisticCounter;
      packagesRejectedByXRay?: UARejectedStatisticCounter;
      /**
       * percentageLowerToleranceLimit
       * Defines the lower tolerance limit defined in
       * welmec 6.4.
       */
      percentageLowerToleranceLimit?: UAAnalogItem<number, DataType.Number>;
      resetCondition?: UAProperty<UAString, DataType.String>;
      /**
       * startTime
       * Defines the duration of the statistic analysis.
       * This value is relevant for time statistics.
       */
      startTime?: UAProperty<Date, DataType.DateTime>;
      /**
       * tare
       * Defines the last occurring tare value at time of
       * statistic.
       */
      tare?: UAAnalogItem<number, DataType.Double>;
      /**
       * throughput
       * Defines the number of items registered over
       * period of the statistic.
       */
      throughput?: UAAnalogItem<number, DataType.UInteger>;
      totalPackagesAccepted?: UAStatisticCounter;
      totalPackagesRejected?: UAStatisticCounter;
      "$PackagesRejectedBySystem$"?: UAStatisticCounter;
}
/**
 * Represents a product of a Checkweigher.
 *
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/Scales                |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |23:CheckweigherProductType ns=23;i=46             |
 * |isAbstract      |false                                             |
 */
export interface UACheckweigherProduct_Base extends UACatchweigherProduct_Base {
    /**
     * nominalWeight
     * Defines the nominal (printed) weight of the
     * product.
     */
    nominalWeight: UATargetItem<number, DataType.Number>;
    /**
     * statistic
     * Contains the different statistic values of the
     * product.
     */
    statistic?: UACheckweigherProduct_statistic;
}
export interface UACheckweigherProduct extends Omit<UACatchweigherProduct, "statistic">, UACheckweigherProduct_Base {
}