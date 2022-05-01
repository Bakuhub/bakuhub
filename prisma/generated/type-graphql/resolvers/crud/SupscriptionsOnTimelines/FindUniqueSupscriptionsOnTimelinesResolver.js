"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueSupscriptionsOnTimelinesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueSupscriptionsOnTimelinesArgs_1 = require("./args/FindUniqueSupscriptionsOnTimelinesArgs");
const SupscriptionsOnTimelines_1 = require("../../../models/SupscriptionsOnTimelines");
const helpers_1 = require("../../../helpers");
let FindUniqueSupscriptionsOnTimelinesResolver = class FindUniqueSupscriptionsOnTimelinesResolver {
    async findUniqueSupscriptionsOnTimelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).supscriptionsOnTimelines.findUnique({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueSupscriptionsOnTimelinesArgs_1.FindUniqueSupscriptionsOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueSupscriptionsOnTimelinesResolver.prototype, "findUniqueSupscriptionsOnTimelines", null);
FindUniqueSupscriptionsOnTimelinesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => SupscriptionsOnTimelines_1.SupscriptionsOnTimelines)
], FindUniqueSupscriptionsOnTimelinesResolver);
exports.FindUniqueSupscriptionsOnTimelinesResolver = FindUniqueSupscriptionsOnTimelinesResolver;
