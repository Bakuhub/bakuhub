"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyReactionOnVisionsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManyReactionOnVisionsArgs_1 = require("./args/FindManyReactionOnVisionsArgs");
const ReactionOnVisions_1 = require("../../../models/ReactionOnVisions");
const helpers_1 = require("../../../helpers");
let FindManyReactionOnVisionsResolver = class FindManyReactionOnVisionsResolver {
    async findManyReactionOnVisions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reactionOnVisions.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ReactionOnVisions_1.ReactionOnVisions], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyReactionOnVisionsArgs_1.FindManyReactionOnVisionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyReactionOnVisionsResolver.prototype, "findManyReactionOnVisions", null);
FindManyReactionOnVisionsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ReactionOnVisions_1.ReactionOnVisions)
], FindManyReactionOnVisionsResolver);
exports.FindManyReactionOnVisionsResolver = FindManyReactionOnVisionsResolver;
