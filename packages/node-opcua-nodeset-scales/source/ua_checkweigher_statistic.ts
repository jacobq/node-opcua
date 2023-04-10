// ----- this file has been automatically generated - do not edit
import { DataType } from "node-opcua-variant"
import { UAAnalogItem } from "node-opcua-nodeset-ua/source/ua_analog_item"
import { UAStatistic, UAStatistic_Base } from "./ua_statistic"
import { UAAcceptedStatisticCounter } from "./ua_accepted_statistic_counter"
import { UARejectedStatisticCounter } from "./ua_rejected_statistic_counter"
import { UAStatisticCounter } from "./ua_statistic_counter"
/**
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/Scales                |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |23:CheckweigherStatisticType ns=23;i=48           |
 * |isAbstract      |false                                             |
 */
export interface UACheckweigherStatistic_Base extends UAStatistic_Base {
   // PlaceHolder for $PackagesAcceptedWithProperty$
   // PlaceHolder for $PackagesRejectedBySystem$
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
    totalPackagesAccepted?: UAStatisticCounter;
    totalPackagesRejected?: UAStatisticCounter;
}
export interface UACheckweigherStatistic extends UAStatistic, UACheckweigherStatistic_Base {
}