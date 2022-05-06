"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByThreadsOnTimelineResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByThreadsOnTimelineArgs_1 = require("./args/GroupByThreadsOnTimelineArgs");
const ThreadsOnTimeline_1 = require("../../../models/ThreadsOnTimeline");
const ThreadsOnTimelineGroupBy_1 = require("../../outputs/ThreadsOnTimelineGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByThreadsOnTimelineResolver = class GroupByThreadsOnTimelineResolver {
    async groupByThreadsOnTimeline(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnTimeline.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ThreadsOnTimelineGroupBy_1.ThreadsOnTimelineGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByThreadsOnTimelineArgs_1.GroupByThreadsOnTimelineArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByThreadsOnTimelineResolver.prototype, "groupByThreadsOnTimeline", null);
GroupByThreadsOnTimelineResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ThreadsOnTimeline_1.ThreadsOnTimeline)
], GroupByThreadsOnTimelineResolver);
exports.GroupByThreadsOnTimelineResolver = GroupByThreadsOnTimelineResolver;
