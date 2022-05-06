"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnTimelineRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Timeline_1 = require("../../../models/Timeline");
const User_1 = require("../../../models/User");
const VotesOnTimeline_1 = require("../../../models/VotesOnTimeline");
const helpers_1 = require("../../../helpers");
let VotesOnTimelineRelationsResolver = class VotesOnTimelineRelationsResolver {
    async user(votesOnTimeline, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnTimeline.findUnique({
            where: {
                userId_timelineId: {
                    userId: votesOnTimeline.userId,
                    timelineId: votesOnTimeline.timelineId,
                },
            },
        }).user({});
    }
    async timeline(votesOnTimeline, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnTimeline.findUnique({
            where: {
                userId_timelineId: {
                    userId: votesOnTimeline.userId,
                    timelineId: votesOnTimeline.timelineId,
                },
            },
        }).timeline({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [VotesOnTimeline_1.VotesOnTimeline, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VotesOnTimelineRelationsResolver.prototype, "user", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Timeline_1.Timeline, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [VotesOnTimeline_1.VotesOnTimeline, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VotesOnTimelineRelationsResolver.prototype, "timeline", null);
VotesOnTimelineRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => VotesOnTimeline_1.VotesOnTimeline)
], VotesOnTimelineRelationsResolver);
exports.VotesOnTimelineRelationsResolver = VotesOnTimelineRelationsResolver;
