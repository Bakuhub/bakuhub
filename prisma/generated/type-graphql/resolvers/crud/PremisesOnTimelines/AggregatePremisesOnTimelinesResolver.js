"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregatePremisesOnTimelinesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregatePremisesOnTimelinesArgs_1 = require("./args/AggregatePremisesOnTimelinesArgs");
const PremisesOnTimelines_1 = require("../../../models/PremisesOnTimelines");
const AggregatePremisesOnTimelines_1 = require("../../outputs/AggregatePremisesOnTimelines");
const helpers_1 = require("../../../helpers");
let AggregatePremisesOnTimelinesResolver = class AggregatePremisesOnTimelinesResolver {
    async aggregatePremisesOnTimelines(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).premisesOnTimelines.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregatePremisesOnTimelines_1.AggregatePremisesOnTimelines, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregatePremisesOnTimelinesArgs_1.AggregatePremisesOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregatePremisesOnTimelinesResolver.prototype, "aggregatePremisesOnTimelines", null);
AggregatePremisesOnTimelinesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => PremisesOnTimelines_1.PremisesOnTimelines)
], AggregatePremisesOnTimelinesResolver);
exports.AggregatePremisesOnTimelinesResolver = AggregatePremisesOnTimelinesResolver;
