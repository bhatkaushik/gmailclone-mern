import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment'
const emailDataSchema = mongoose.Schema({
    To:String,
    Subject: String,
    Message: String
})
autoIncrement.initialize(mongoose.connection)
emailDataSchema.plugin(autoIncrement.plugin,'Emaildata')

const Emaildata= mongoose.model('emaildata',emailDataSchema);

export default Emaildata