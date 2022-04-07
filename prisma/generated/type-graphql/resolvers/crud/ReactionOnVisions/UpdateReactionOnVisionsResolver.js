"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateReactionOnVisionsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateReactionOnVisionsArgs_1 = require("./args/UpdateReactionOnVisionsArgs");
const ReactionOnVisions_1 = require("../../../models/ReactionOnVisions");
const helpers_1 = require("../../../helpers");
let UpdateReactionOnVisionsResolver = class UpdateReactionOnVisionsResolver {
    async updateReactionOnVisions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reactionOnVisions.update({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateReactionOnVisionsArgs_1.UpdateReactionOnVisionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateReactionOnVisionsResolver.prototype, "updateReactionOnVisions", null);
UpdateReactionOnVisionsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ReactionOnVisions_1.ReactionOnVisions)
], UpdateReactionOnVisionsResolver);
exports.UpdateReactionOnVisionsResolver = UpdateReactionOnVisionsResolver;
