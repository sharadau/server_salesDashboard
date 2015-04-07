/**
 * Created by sharadau on 2/5/2015.
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProjectsSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    start_date:{
        type:Date,
        required:false
    },
    end_date:{
        type:Date,
        required:false
    },
    _id:{
        type:Number,
        required:true
    },
    organization:{
        type:String,
        required:false
    },
    owner:{
        type:String,
        required:false
    },
    openpositions:{
        type:Number,
        required:false,
        default: 0
    },
    reddays:{
        type:Number,
        required:false,
        default: 0
    },
    employees:{
        type:[String],
        required:false
    },
    state:{
        type:String,
        required:false
    },
    state_id:{
        type:Number,
        required:false
    },
    company:{
        type:String,
        required:false
    },
    companyURL:{
        type:String,
        required:false
    },
    description:{
        type:String,
        required:false
    },
    othercomments:{
        type:String,
        required:false
    },
    sendEmail:{
        type:String,
        required:false
    },
    updatedDate:{
        type:String,
        required:false
    },
    updatedBy:{
        type:Number,
        required:false
    }
});
mongoose.model('Projects',ProjectsSchema);