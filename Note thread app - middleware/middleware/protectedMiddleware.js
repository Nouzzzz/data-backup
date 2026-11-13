const protect = (req,res,next) => {
    if(req.body.title){
        next()
    } else {
        res.json({error:"No title found :)"})
    }

}

export default protect