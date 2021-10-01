function createResult(error,data){
    let result = {};
    if(error){
        result['error'] = error;
        result['status'] = 'error';
    }else{
        result['status'] = "success";
        result['data'] = data;
    }

    return result;
}

function createError(error,data){
    let result = {};
    if(error){
        result['status'] = 'error';
        result['error'] = error;
        
    }

    return result;
}


//module.exports = createResult;
module.exports = {
    createResult:createResult,
    createError:createError,
}