"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteReactionOnVisionsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteReactionOnVisionsArgs_1 = require("./args/DeleteReactionOnVisionsArgs");
const ReactionOnVisions_1 = require("../../../models/ReactionOnVisions");
const helpers_1 = require("../../../helpers");
let DeleteReactionOnVisionsResolver = class DeleteReactionOnVisionsResolver {
    async deleteReactionOnVisions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reactionOnVisions.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ReactionOnVisions_1.ReactionOnVisions, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteReactionOnVisionsArgs_1.DeleteReactionOnVisionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteReactionOnVisionsResolver.prototype, "deleteReactionOnVisions", null);
DeleteReactionOnVisionsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ReactionOnVisions_1.ReactionOnVisions)
], DeleteReactionOnVisionsResolver);
exports.DeleteReactionOnVisionsResolver = DeleteReactionOnVisionsResolver;
