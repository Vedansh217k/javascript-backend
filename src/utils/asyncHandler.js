const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).
        catch((err) => next(err))
    };
}; 
 export {asyncHandler};
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