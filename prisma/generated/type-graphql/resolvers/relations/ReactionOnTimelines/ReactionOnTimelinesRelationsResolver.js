"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnTimelinesRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnTimelines_1 = require("../../../models/ReactionOnTimelines");
const Timeline_1 = require("../../../models/Timeline");
const User_1 = require("../../../models/User");
const helpers_1 = require("../../../helpers");
let ReactionOnTimelinesRelationsResolver = class ReactionOnTimelinesRelationsResolver {
    async user(reactionOnTimelines, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).reactionOnTimelines.findUnique({
            where: {
                userId_timelineId: {
                    userId: reactionOnTimelines.userId,
                    timelineId: reactionOnTimelines.timelineId,
                },
            },
        }).user({});
    }
    async timeline(reactionOnTimelines, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).reactionOnTimelines.findUnique({
            where: {
                userId_timelineId: {
                    userId: reactionOnTimelines.userId,
                    timelineId: reactionOnTimelines.timelineId,
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
    tslib_1.__metadata("design:paramtypes", [ReactionOnTimelines_1.ReactionOnTimelines, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ReactionOnTimelinesRelationsResolver.prototype, "user", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Timeline_1.Timeline, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ReactionOnTimelines_1.ReactionOnTimelines, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ReactionOnTimelinesRelationsResolver.prototype, "timeline", null);
ReactionOnTimelinesRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ReactionOnTimelines_1.ReactionOnTimelines)
], ReactionOnTimelinesRelationsResolver);
exports.ReactionOnTimelinesRelationsResolver = ReactionOnTimelinesRelationsResolver;
