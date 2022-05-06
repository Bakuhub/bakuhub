"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremisesOnTimelinesRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Premise_1 = require("../../../models/Premise");
const PremisesOnTimelines_1 = require("../../../models/PremisesOnTimelines");
const Timeline_1 = require("../../../models/Timeline");
const helpers_1 = require("../../../helpers");
let PremisesOnTimelinesRelationsResolver = class PremisesOnTimelinesRelationsResolver {
    async timeline(premisesOnTimelines, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).premisesOnTimelines.findUnique({
            where: {
                premiseId_timelineId: {
                    premiseId: premisesOnTimelines.premiseId,
                    timelineId: premisesOnTimelines.timelineId,
                },
            },
        }).timeline({});
    }
    async premise(premisesOnTimelines, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).premisesOnTimelines.findUnique({
            where: {
                premiseId_timelineId: {
                    premiseId: premisesOnTimelines.premiseId,
                    timelineId: premisesOnTimelines.timelineId,
                },
            },
        }).premise({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Timeline_1.Timeline, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [PremisesOnTimelines_1.PremisesOnTimelines, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PremisesOnTimelinesRelationsResolver.prototype, "timeline", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Premise_1.Premise, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [PremisesOnTimelines_1.PremisesOnTimelines, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PremisesOnTimelinesRelationsResolver.prototype, "premise", null);
PremisesOnTimelinesRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => PremisesOnTimelines_1.PremisesOnTimelines)
], PremisesOnTimelinesRelationsResolver);
exports.PremisesOnTimelinesRelationsResolver = PremisesOnTimelinesRelationsResolver;
