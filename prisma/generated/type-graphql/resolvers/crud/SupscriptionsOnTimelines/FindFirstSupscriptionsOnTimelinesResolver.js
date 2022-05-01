"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstSupscriptionsOnTimelinesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstSupscriptionsOnTimelinesArgs_1 = require("./args/FindFirstSupscriptionsOnTimelinesArgs");
const SupscriptionsOnTimelines_1 = require("../../../models/SupscriptionsOnTimelines");
const helpers_1 = require("../../../helpers");
let FindFirstSupscriptionsOnTimelinesResolver = class FindFirstSupscriptionsOnTimelinesResolver {
    async findFirstSupscriptionsOnTimelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).supscriptionsOnTimelines.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => SupscriptionsOnTimelines_1.SupscriptionsOnTimelines, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstSupscriptionsOnTimelinesArgs_1.FindFirstSupscriptionsOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstSupscriptionsOnTimelinesResolver.prototype, "findFirstSupscriptionsOnTimelines", null);
FindFirstSupscriptionsOnTimelinesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => SupscriptionsOnTimelines_1.SupscriptionsOnTimelines)
], FindFirstSupscriptionsOnTimelinesResolver);
exports.FindFirstSupscriptionsOnTimelinesResolver = FindFirstSupscriptionsOnTimelinesResolver;
