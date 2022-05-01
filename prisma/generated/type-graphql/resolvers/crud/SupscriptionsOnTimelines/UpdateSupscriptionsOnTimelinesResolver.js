"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSupscriptionsOnTimelinesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateSupscriptionsOnTimelinesArgs_1 = require("./args/UpdateSupscriptionsOnTimelinesArgs");
const SupscriptionsOnTimelines_1 = require("../../../models/SupscriptionsOnTimelines");
const helpers_1 = require("../../../helpers");
let UpdateSupscriptionsOnTimelinesResolver = class UpdateSupscriptionsOnTimelinesResolver {
    async updateSupscriptionsOnTimelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).supscriptionsOnTimelines.update({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateSupscriptionsOnTimelinesArgs_1.UpdateSupscriptionsOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateSupscriptionsOnTimelinesResolver.prototype, "updateSupscriptionsOnTimelines", null);
UpdateSupscriptionsOnTimelinesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => SupscriptionsOnTimelines_1.SupscriptionsOnTimelines)
], UpdateSupscriptionsOnTimelinesResolver);
exports.UpdateSupscriptionsOnTimelinesResolver = UpdateSupscriptionsOnTimelinesResolver;
