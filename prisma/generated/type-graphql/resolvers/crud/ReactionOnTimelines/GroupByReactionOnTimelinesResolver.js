"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByReactionOnTimelinesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByReactionOnTimelinesArgs_1 = require("./args/GroupByReactionOnTimelinesArgs");
const ReactionOnTimelines_1 = require("../../../models/ReactionOnTimelines");
const ReactionOnTimelinesGroupBy_1 = require("../../outputs/ReactionOnTimelinesGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByReactionOnTimelinesResolver = class GroupByReactionOnTimelinesResolver {
    async groupByReactionOnTimelines(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reactionOnTimelines.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ReactionOnTimelinesGroupBy_1.ReactionOnTimelinesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByReactionOnTimelinesArgs_1.GroupByReactionOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByReactionOnTimelinesResolver.prototype, "groupByReactionOnTimelines", null);
GroupByReactionOnTimelinesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ReactionOnTimelines_1.ReactionOnTimelines)
], GroupByReactionOnTimelinesResolver);
exports.GroupByReactionOnTimelinesResolver = GroupByReactionOnTimelinesResolver;
