"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteReactionOnThreadsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteReactionOnThreadsArgs_1 = require("./args/DeleteReactionOnThreadsArgs");
const ReactionOnThreads_1 = require("../../../models/ReactionOnThreads");
const helpers_1 = require("../../../helpers");
let DeleteReactionOnThreadsResolver = class DeleteReactionOnThreadsResolver {
    async deleteReactionOnThreads(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reactionOnThreads.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ReactionOnThreads_1.ReactionOnThreads, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteReactionOnThreadsArgs_1.DeleteReactionOnThreadsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteReactionOnThreadsResolver.prototype, "deleteReactionOnThreads", null);
DeleteReactionOnThreadsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ReactionOnThreads_1.ReactionOnThreads)
], DeleteReactionOnThreadsResolver);
exports.DeleteReactionOnThreadsResolver = DeleteReactionOnThreadsResolver;
