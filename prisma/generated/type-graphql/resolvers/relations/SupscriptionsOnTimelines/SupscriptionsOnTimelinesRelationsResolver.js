"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupscriptionsOnTimelinesRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SupscriptionsOnTimelines_1 = require("../../../models/SupscriptionsOnTimelines");
const Timeline_1 = require("../../../models/Timeline");
const User_1 = require("../../../models/User");
const helpers_1 = require("../../../helpers");
let SupscriptionsOnTimelinesRelationsResolver = class SupscriptionsOnTimelinesRelationsResolver {
    async user(supscriptionsOnTimelines, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).supscriptionsOnTimelines.findUnique({
            where: {
                userId_timelineId: {
                    userId: supscriptionsOnTimelines.userId,
                    timelineId: supscriptionsOnTimelines.timelineId,
                },
            },
        }).user({});
    }
    async timeline(supscriptionsOnTimelines, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).supscriptionsOnTimelines.findUnique({
            where: {
                userId_timelineId: {
                    userId: supscriptionsOnTimelines.userId,
                    timelineId: supscriptionsOnTimelines.timelineId,
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
    tslib_1.__metadata("design:paramtypes", [SupscriptionsOnTimelines_1.SupscriptionsOnTimelines, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SupscriptionsOnTimelinesRelationsResolver.prototype, "user", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Timeline_1.Timeline, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [SupscriptionsOnTimelines_1.SupscriptionsOnTimelines, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SupscriptionsOnTimelinesRelationsResolver.prototype, "timeline", null);
SupscriptionsOnTimelinesRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => SupscriptionsOnTimelines_1.SupscriptionsOnTimelines)
], SupscriptionsOnTimelinesRelationsResolver);
exports.SupscriptionsOnTimelinesRelationsResolver = SupscriptionsOnTimelinesRelationsResolver;
