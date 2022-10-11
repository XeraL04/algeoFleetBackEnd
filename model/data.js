import { Double, Int32 } from "mongodb";
import mongoose from "mongoose";

const DataSchema = new mongoose.Schema(
    {
        _class: {
            type: String,
            required: true,
        },
        imei:{
            type: String,
            required: true,
        },
        // deviceId: {
        //     type: String,
        //     required: true,
        // },
        // deviceLabel: {
        //     type: String,
        //     required: true,
        // },
        // // time:{
        // //     type:Int64,
        // //     required: true,
        // // },
        // eventCode:{
        //     type:Int32,
        //     required: true,
        // },
        // ignition:{
        //     type:Int32,
        //     required: true,
        // },
        // odometer:{
        //     type:Double,
        //     required: true,
        // },
        // odometerGPS:{
        //     type:Double,
        //     required: true,
        // },
        // model:{
        //     type:String,
        //     required: true,
        // },
        // trackID:{
        //     type:String,
        //     required: true,
        // },
        // idBU:{
        //     type: String,
        //     required: true,
        // },
        // idClient:{
        //     type:String,
        //     required: true,
        // },
        // client:{
        //     type:String,
        //     required: true,
        // },
        // // timeGPS:{
        // //     type:Int64 ,
        // //     required: true,
        // // },
        // originalTime:{
        //     type: String,
        //     required: true,
        // },
        // priority:{
        //     type:Int32,
        //     required: true,
        // },
        // lng:{
        //     type:Double,
        //     required: true,
        // },
        // lat:{
        //     type:Double,
        //     required: true,
        // },
        // altitude:{
        //     type:Double,
        //     required: true,
        // },
        // speed:{
        //     type:Double,
        //     required: true,
        // },
        // speedGPS:{
        //     type:Double,
        //     required: true,
        // },
        // heading:{
        //     type:Double,
        //     required: true,
        // },
        // satelliteNumber:{
        //     type:Int32,
        //     required:true,
        // },
        // fuelUnit:{
        //     type:String,
        //     required: true,
        // },
        // fuelValue:{
        //     type:Double,
        //     required: true,
        // },
        // temperature:{
        //     type:Double,
        //     required: true,
        // },
        // carState:{
        //     type:Int32,
        //     required: true,
        // },
        // inputOutput:{
        //     outputStatus:{
        //         type: String,
        //         require: true,
        //     },
        //     output3:{
        //         type:String,
        //         require: true,
        //     },
        //     output4:{
        //         type:String,
        //         require: true,
        //     },
        //     output1:{
        //         type:String,
        //         require: true,
        //     },
        //     output2:{
        //         type:String,
        //         require: true,
        //     },
        //     fuelValue:{
        //         type:Int32,
        //         required: true,
        //     },
        //     input4:{
        //         type:String,
        //         require: true,
        //     },
        //     input3:{
        //         type:String,
        //         require: true,
        //     },
        //     inputStatus:{
        //         type:String,
        //         require: true,
        //     },
        //     input2:{
        //         type:String,
        //         require: true,
        //     },
        //     input1:{
        //         type:String,
        //         require: true,
        //     },
        //     analog2:{
        //         type:String,
        //         require: true,
        //     },
        //     analog1:{
        //         type:String,
        //         require: true,
        //     },
        //     fuelUnit:{
        //         type:String,
        //         require: true,
        //     }
        // },
        // obd:{
        //     type:Object,
        //     require: true,
        // },
        // driver:{
        //     type:Object,
        //     require: true,
        // },
        // inGeofence:{
        //     type:Int32,
        //     require: true,
        // },
        // idGeofence:{
        //     type:String,
        //     require: true,
        // },
        // inCheckPoint:{
        //     type:Int32,
        //     require: true,
        // },
        // inCheckPoint:{
        //     type:String,
        //     require: true,
        // }
    },
);

export default mongoose.model("data", DataSchema);