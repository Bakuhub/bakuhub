export const getAuthorVariableByUserId = (id?: string) => {
    return id ?
            {
                author: {
                    connect: {
                        id
                    }
                }
            }:{};
};