const db= require('../confg/connection')

function formControllers(){
    return {
        init(req,res){
            return res.render('user/registration')
        },
        saveCompany(req,res){
            const {name,address,city,state,zip,phone,website,email} = req.body
            db.get().collection('companies').insertOne({
                name,
                address,
                city,
                state,
                zip,
                phone,
                website,
                email
            }).then((response)=>{
                return res.json({message:'success'})
            }).catch((err)=>{
                return res.json({message:'failed',err})
            })
        },
    }
}

module.exports=formControllers