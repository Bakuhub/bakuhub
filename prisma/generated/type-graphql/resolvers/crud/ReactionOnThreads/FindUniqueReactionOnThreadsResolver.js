"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueReactionOnThreadsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueReactionOnThreadsArgs_1 = require("./args/FindUniqueReactionOnThreadsArgs");
const ReactionOnThreads_1 = require("../../../models/ReactionOnThreads");
const helpers_1 = require("../../../helpers");
let FindUniqueReactionOnThreadsResolver = class FindUniqueReactionOnThreadsResolver {
    async findUniqueReactionOnThreads(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reactionOnThreads.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => ReactionOnThreads_1.ReactionOnThreads, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueReactionOnThreadsArgs_1.FindUniqueReactionOnThreadsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueReactionOnThreadsResolver.prototype, "findUniqueReactionOnThreads", null);
FindUniqueReactionOnThreadsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ReactionOnThreads_1.ReactionOnThreads)
], FindUniqueReactionOnThreadsResolver);
exports.FindUniqueReactionOnThreadsResolver = FindUniqueReactionOnThreadsResolver;
