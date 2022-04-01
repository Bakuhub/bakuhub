export const getAuthorVariableByUserId = (id?: unknown) => {
    return id ?
            {
                author: {
                    connect: {
                        id
                    }
                }
            }:{};
};