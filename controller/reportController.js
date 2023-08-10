const Report = require("../models/report");

exports.createReport = async (req, res) => {
    try {
        let id = await Report.findById(req.body._id);

        if (!id) {
            const report = await Report.create(req.body);
            return res.status(201).json({
                success: true,
                report,
                msg: "Report created"
            });
        } else {
            return res.status(200).json({
                success: true,
                msg: "Report already exists"
            });
        }
    }
    catch (err) {
        res.status(500).json({
            success: false,
            msg: "internal servar error" + err.message
        })
    }
}

exports.allReport = async (req, res) => {
    try {
        const report = await Report.find({ patientId: req.params.id })
        if(!report){
           return res.status(400).json({
                success: false,
                msg:"report is not exist"
            })
        }
        res.status(200).json({
            success: true,
            report
        })
    }
    catch (err) {
 
        res.status(500).json({
            success: false,
            msg: "internal server errot" + err.message
        })
    }
}

exports.status = async(req,res)=>{
    try{
        const report = await Report.find({status:req.params.status})
        if(!report){
            return res.status(400).json({
                success: false,
                msg:"status is not exist"
            })
        }
        res.status(200).json({
            success: true,
            status:report
        })
    }
    catch(err){
        res.status(500).json({
            success: false,
            msg: "internal server errot" + err.message
        })
    }
}