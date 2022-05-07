export const getCreateTagVariable = (label: string) => (
        {
            tag: {
                connectOrCreate: {
                    create: {
                        label,
                    },
                    where: {
                        label,
                    },
                },
            }
        }
);