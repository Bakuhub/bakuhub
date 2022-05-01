"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertSupscriptionsOnTimelinesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertSupscriptionsOnTimelinesArgs_1 = require("./args/UpsertSupscriptionsOnTimelinesArgs");
const SupscriptionsOnTimelines_1 = require("../../../models/SupscriptionsOnTimelines");
const helpers_1 = require("../../../helpers");
let UpsertSupscriptionsOnTimelinesResolver = class UpsertSupscriptionsOnTimelinesResolver {
    async upsertSupscriptionsOnTimelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).supscriptionsOnTimelines.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => SupscriptionsOnTimelines_1.SupscriptionsOnTimelines, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertSupscriptionsOnTimelinesArgs_1.UpsertSupscriptionsOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertSupscriptionsOnTimelinesResolver.prototype, "upsertSupscriptionsOnTimelines", null);
UpsertSupscriptionsOnTimelinesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => SupscriptionsOnTimelines_1.SupscriptionsOnTimelines)
], UpsertSupscriptionsOnTimelinesResolver);
exports.UpsertSupscriptionsOnTimelinesResolver = UpsertSupscriptionsOnTimelinesResolver;
