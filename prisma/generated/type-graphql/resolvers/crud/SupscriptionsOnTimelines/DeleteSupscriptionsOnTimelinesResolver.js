"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteSupscriptionsOnTimelinesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteSupscriptionsOnTimelinesArgs_1 = require("./args/DeleteSupscriptionsOnTimelinesArgs");
const SupscriptionsOnTimelines_1 = require("../../../models/SupscriptionsOnTimelines");
const helpers_1 = require("../../../helpers");
let DeleteSupscriptionsOnTimelinesResolver = class DeleteSupscriptionsOnTimelinesResolver {
    async deleteSupscriptionsOnTimelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).supscriptionsOnTimelines.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => SupscriptionsOnTimelines_1.SupscriptionsOnTimelines, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteSupscriptionsOnTimelinesArgs_1.DeleteSupscriptionsOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteSupscriptionsOnTimelinesResolver.prototype, "deleteSupscriptionsOnTimelines", null);
DeleteSupscriptionsOnTimelinesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => SupscriptionsOnTimelines_1.SupscriptionsOnTimelines)
], DeleteSupscriptionsOnTimelinesResolver);
exports.DeleteSupscriptionsOnTimelinesResolver = DeleteSupscriptionsOnTimelinesResolver;
