export const resolvers = {
    Query: {
        users: async (_parent: any, args: any, context: { prisma: { user: { findMany: (arg0: {}) => any; }; }; }) => {
            return await context.prisma.user.findMany({});
        }
    }
};