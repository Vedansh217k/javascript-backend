class ApiError extends Error {
    constructor(
        statusCode,
        message = "Error",
        errors = [],
        stack = ""
    ){
        super(message)

        this.statusCodde = statusCode
        this.data = null
        this.message = message
        this.success = false;
        this.errors = errors
        if(stack) {
            this.stack = stack
        }else {
            Error.captureStackTrace(this, this.constructor)
        }

    }
}
export {ApiError}