export const handlePromise = <T>(promise: Promise<T>): Promise<T> => {
    return promise.then(data => {
        return data;
    }).catch(err => {
        console.error(err);
        return err;
    });
};