export const getUserQueryVariables = (id: string) => (
        {
            variables: {
                where: {
                    id
                }
            }
        }
);