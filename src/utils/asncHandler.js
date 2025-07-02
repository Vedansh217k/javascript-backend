const asyncHHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve().
        catch((err) => next(err))
    }
} 
 export {asyncHHandler}
//  const asyncHHandler = () => {}
//  const asyncHHandler = (func) => {} => {}
//  const asyncHHandler = (ucnc) => async() => {}
//  const asyncHHandler = (ucnc) => async(req, res, next) => {
//     try{
//         await fn(req, res, next)}

//     catch(error){
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
//  }