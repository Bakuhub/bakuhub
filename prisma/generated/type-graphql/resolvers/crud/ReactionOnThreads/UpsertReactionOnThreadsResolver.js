"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertReactionOnThreadsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertReactionOnThreadsArgs_1 = require("./args/UpsertReactionOnThreadsArgs");
const ReactionOnThreads_1 = require("../../../models/ReactionOnThreads");
const helpers_1 = require("../../../helpers");
let UpsertReactionOnThreadsResolver = class UpsertReactionOnThreadsResolver {
    async upsertReactionOnThreads(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reactionOnThreads.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ReactionOnThreads_1.ReactionOnThreads, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertReactionOnThreadsArgs_1.UpsertReactionOnThreadsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertReactionOnThreadsResolver.prototype, "upsertReactionOnThreads", null);
UpsertReactionOnThreadsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ReactionOnThreads_1.ReactionOnThreads)
], UpsertReactionOnThreadsResolver);
exports.UpsertReactionOnThreadsResolver = UpsertReactionOnThreadsResolver;
