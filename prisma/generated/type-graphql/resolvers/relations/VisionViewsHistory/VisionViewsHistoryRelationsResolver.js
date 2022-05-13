"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionViewsHistoryRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const User_1 = require("../../../models/User");
const Vision_1 = require("../../../models/Vision");
const VisionViewsHistory_1 = require("../../../models/VisionViewsHistory");
const helpers_1 = require("../../../helpers");
let VisionViewsHistoryRelationsResolver = class VisionViewsHistoryRelationsResolver {
    async vision(visionViewsHistory, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).visionViewsHistory.findUnique({
            where: {
                id: visionViewsHistory.id,
            },
        }).vision({});
    }
    async user(visionViewsHistory, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).visionViewsHistory.findUnique({
            where: {
                id: visionViewsHistory.id,
            },
        }).user({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Vision_1.Vision, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [VisionViewsHistory_1.VisionViewsHistory, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VisionViewsHistoryRelationsResolver.prototype, "vision", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [VisionViewsHistory_1.VisionViewsHistory, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VisionViewsHistoryRelationsResolver.prototype, "user", null);
VisionViewsHistoryRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => VisionViewsHistory_1.VisionViewsHistory)
], VisionViewsHistoryRelationsResolver);
exports.VisionViewsHistoryRelationsResolver = VisionViewsHistoryRelationsResolver;
