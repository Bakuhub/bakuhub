"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByReactionOnThreadsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByReactionOnThreadsArgs_1 = require("./args/GroupByReactionOnThreadsArgs");
const ReactionOnThreads_1 = require("../../../models/ReactionOnThreads");
const ReactionOnThreadsGroupBy_1 = require("../../outputs/ReactionOnThreadsGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByReactionOnThreadsResolver = class GroupByReactionOnThreadsResolver {
    async groupByReactionOnThreads(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reactionOnThreads.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ReactionOnThreadsGroupBy_1.ReactionOnThreadsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByReactionOnThreadsArgs_1.GroupByReactionOnThreadsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByReactionOnThreadsResolver.prototype, "groupByReactionOnThreads", null);
GroupByReactionOnThreadsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ReactionOnThreads_1.ReactionOnThreads)
], GroupByReactionOnThreadsResolver);
exports.GroupByReactionOnThreadsResolver = GroupByReactionOnThreadsResolver;
