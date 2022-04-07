"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateThreadsOnTimelineResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateThreadsOnTimelineArgs_1 = require("./args/AggregateThreadsOnTimelineArgs");
const ThreadsOnTimeline_1 = require("../../../models/ThreadsOnTimeline");
const AggregateThreadsOnTimeline_1 = require("../../outputs/AggregateThreadsOnTimeline");
const helpers_1 = require("../../../helpers");
let AggregateThreadsOnTimelineResolver = class AggregateThreadsOnTimelineResolver {
    async aggregateThreadsOnTimeline(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnTimeline.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateThreadsOnTimeline_1.AggregateThreadsOnTimeline, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateThreadsOnTimelineArgs_1.AggregateThreadsOnTimelineArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateThreadsOnTimelineResolver.prototype, "aggregateThreadsOnTimeline", null);
AggregateThreadsOnTimelineResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ThreadsOnTimeline_1.ThreadsOnTimeline)
], AggregateThreadsOnTimelineResolver);
exports.AggregateThreadsOnTimelineResolver = AggregateThreadsOnTimelineResolver;
