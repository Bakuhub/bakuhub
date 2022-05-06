"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePremisesOnTimelinesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdatePremisesOnTimelinesArgs_1 = require("./args/UpdatePremisesOnTimelinesArgs");
const PremisesOnTimelines_1 = require("../../../models/PremisesOnTimelines");
const helpers_1 = require("../../../helpers");
let UpdatePremisesOnTimelinesResolver = class UpdatePremisesOnTimelinesResolver {
    async updatePremisesOnTimelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).premisesOnTimelines.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => PremisesOnTimelines_1.PremisesOnTimelines, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdatePremisesOnTimelinesArgs_1.UpdatePremisesOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdatePremisesOnTimelinesResolver.prototype, "updatePremisesOnTimelines", null);
UpdatePremisesOnTimelinesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => PremisesOnTimelines_1.PremisesOnTimelines)
], UpdatePremisesOnTimelinesResolver);
exports.UpdatePremisesOnTimelinesResolver = UpdatePremisesOnTimelinesResolver;
