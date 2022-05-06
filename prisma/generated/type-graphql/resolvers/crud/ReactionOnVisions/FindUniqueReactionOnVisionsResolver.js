"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueReactionOnVisionsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueReactionOnVisionsArgs_1 = require("./args/FindUniqueReactionOnVisionsArgs");
const ReactionOnVisions_1 = require("../../../models/ReactionOnVisions");
const helpers_1 = require("../../../helpers");
let FindUniqueReactionOnVisionsResolver = class FindUniqueReactionOnVisionsResolver {
    async findUniqueReactionOnVisions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reactionOnVisions.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => ReactionOnVisions_1.ReactionOnVisions, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueReactionOnVisionsArgs_1.FindUniqueReactionOnVisionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueReactionOnVisionsResolver.prototype, "findUniqueReactionOnVisions", null);
FindUniqueReactionOnVisionsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ReactionOnVisions_1.ReactionOnVisions)
], FindUniqueReactionOnVisionsResolver);
exports.FindUniqueReactionOnVisionsResolver = FindUniqueReactionOnVisionsResolver;
