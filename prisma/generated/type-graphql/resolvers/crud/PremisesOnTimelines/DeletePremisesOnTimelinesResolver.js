"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePremisesOnTimelinesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeletePremisesOnTimelinesArgs_1 = require("./args/DeletePremisesOnTimelinesArgs");
const PremisesOnTimelines_1 = require("../../../models/PremisesOnTimelines");
const helpers_1 = require("../../../helpers");
let DeletePremisesOnTimelinesResolver = class DeletePremisesOnTimelinesResolver {
    async deletePremisesOnTimelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).premisesOnTimelines.delete({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeletePremisesOnTimelinesArgs_1.DeletePremisesOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeletePremisesOnTimelinesResolver.prototype, "deletePremisesOnTimelines", null);
DeletePremisesOnTimelinesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => PremisesOnTimelines_1.PremisesOnTimelines)
], DeletePremisesOnTimelinesResolver);
exports.DeletePremisesOnTimelinesResolver = DeletePremisesOnTimelinesResolver;
