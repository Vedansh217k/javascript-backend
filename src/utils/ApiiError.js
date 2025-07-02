class ApiError extends Error {
    constructor(
        staatusCode,
        message = "Error",
        error = [],
        stack = ""
    ){
        super(message)

        this.staatusCodde = staatusCode
        this.data = null
        this.message = message
        this.success = false;
        this.errors = this.errors
        if(stack) {
            this.stack = stack
        }else {
            Error.captureStackTrace(this, this.constructor)
        }

    }
}
export {ApiError}