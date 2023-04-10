// ----- this file has been automatically generated - do not edit
import { UAObject, UAProperty } from "node-opcua-address-space-base"
import { DataType } from "node-opcua-variant"
import { UABaseDataVariable } from "node-opcua-nodeset-ua/source/ua_base_data_variable"
/**
 * Represents an acoustic signal.
 *
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/IA/                   |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |9:AcousticSignalType ns=9;i=1009                  |
 * |isAbstract      |false                                             |
 */
export interface UAAcousticSignal_Base {
    /**
     * audioSample
     * Contains the audio data, e.g. for devices capable
     * of audio playback.
     */
    audioSample?: UABaseDataVariable<Buffer, DataType.ByteString>;
    /**
     * numberInList
     * Enumerate the acoustic signals. Instances of
     * StackElementAcousticType index into this number
     * using the OperationMode Property.
     */
    numberInList: UAProperty<number, DataType.UInteger>;
}
export interface UAAcousticSignal extends UAObject, UAAcousticSignal_Base {
}