"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsOnTimelinesRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionsOnTimelines_1 = require("../../../models/SubscriptionsOnTimelines");
const Timeline_1 = require("../../../models/Timeline");
const User_1 = require("../../../models/User");
const helpers_1 = require("../../../helpers");
let SubscriptionsOnTimelinesRelationsResolver = class SubscriptionsOnTimelinesRelationsResolver {
    async user(subscriptionsOnTimelines, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).subscriptionsOnTimelines.findUnique({
            where: {
                userId_timelineId: {
                    userId: subscriptionsOnTimelines.userId,
                    timelineId: subscriptionsOnTimelines.timelineId,
                },
            },
        }).user({});
    }
    async timeline(subscriptionsOnTimelines, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).subscriptionsOnTimelines.findUnique({
            where: {
                userId_timelineId: {
                    userId: subscriptionsOnTimelines.userId,
                    timelineId: subscriptionsOnTimelines.timelineId,
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
    tslib_1.__metadata("design:paramtypes", [SubscriptionsOnTimelines_1.SubscriptionsOnTimelines, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SubscriptionsOnTimelinesRelationsResolver.prototype, "user", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Timeline_1.Timeline, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [SubscriptionsOnTimelines_1.SubscriptionsOnTimelines, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SubscriptionsOnTimelinesRelationsResolver.prototype, "timeline", null);
SubscriptionsOnTimelinesRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => SubscriptionsOnTimelines_1.SubscriptionsOnTimelines)
], SubscriptionsOnTimelinesRelationsResolver);
exports.SubscriptionsOnTimelinesRelationsResolver = SubscriptionsOnTimelinesRelationsResolver;
