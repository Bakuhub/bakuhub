"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnTimelineRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Thread_1 = require("../../../models/Thread");
const ThreadsOnTimeline_1 = require("../../../models/ThreadsOnTimeline");
const Timeline_1 = require("../../../models/Timeline");
const helpers_1 = require("../../../helpers");
let ThreadsOnTimelineRelationsResolver = class ThreadsOnTimelineRelationsResolver {
    async thread(threadsOnTimeline, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnTimeline.findUnique({
            where: {
                threadId: threadsOnTimeline.threadId,
            },
        }).thread({});
    }
    async timeline(threadsOnTimeline, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnTimeline.findUnique({
            where: {
                threadId: threadsOnTimeline.threadId,
            },
        }).timeline({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Thread_1.Thread, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ThreadsOnTimeline_1.ThreadsOnTimeline, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadsOnTimelineRelationsResolver.prototype, "thread", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Timeline_1.Timeline, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ThreadsOnTimeline_1.ThreadsOnTimeline, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadsOnTimelineRelationsResolver.prototype, "timeline", null);
ThreadsOnTimelineRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ThreadsOnTimeline_1.ThreadsOnTimeline)
], ThreadsOnTimelineRelationsResolver);
exports.ThreadsOnTimelineRelationsResolver = ThreadsOnTimelineRelationsResolver;
