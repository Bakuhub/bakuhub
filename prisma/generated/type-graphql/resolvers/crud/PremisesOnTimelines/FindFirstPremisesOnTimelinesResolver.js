"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstPremisesOnTimelinesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstPremisesOnTimelinesArgs_1 = require("./args/FindFirstPremisesOnTimelinesArgs");
const PremisesOnTimelines_1 = require("../../../models/PremisesOnTimelines");
const helpers_1 = require("../../../helpers");
let FindFirstPremisesOnTimelinesResolver = class FindFirstPremisesOnTimelinesResolver {
    async findFirstPremisesOnTimelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).premisesOnTimelines.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => PremisesOnTimelines_1.PremisesOnTimelines, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstPremisesOnTimelinesArgs_1.FindFirstPremisesOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstPremisesOnTimelinesResolver.prototype, "findFirstPremisesOnTimelines", null);
FindFirstPremisesOnTimelinesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => PremisesOnTimelines_1.PremisesOnTimelines)
], FindFirstPremisesOnTimelinesResolver);
exports.FindFirstPremisesOnTimelinesResolver = FindFirstPremisesOnTimelinesResolver;
