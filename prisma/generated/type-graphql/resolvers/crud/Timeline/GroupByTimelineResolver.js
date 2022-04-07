"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByTimelineResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByTimelineArgs_1 = require("./args/GroupByTimelineArgs");
const Timeline_1 = require("../../../models/Timeline");
const TimelineGroupBy_1 = require("../../outputs/TimelineGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByTimelineResolver = class GroupByTimelineResolver {
    async groupByTimeline(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).timeline.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [TimelineGroupBy_1.TimelineGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByTimelineArgs_1.GroupByTimelineArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByTimelineResolver.prototype, "groupByTimeline", null);
GroupByTimelineResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Timeline_1.Timeline)
], GroupByTimelineResolver);
exports.GroupByTimelineResolver = GroupByTimelineResolver;
