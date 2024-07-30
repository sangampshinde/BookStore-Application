export const CreateSuccess = (statusCode,sucessMessage,data) => {
    const successObj ={
        status: statusCode,
        message: sucessMessage,
        data: data
    }
    return successObj;
}

