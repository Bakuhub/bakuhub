"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManySupscriptionsOnTimelinesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManySupscriptionsOnTimelinesArgs_1 = require("./args/FindManySupscriptionsOnTimelinesArgs");
const SupscriptionsOnTimelines_1 = require("../../../models/SupscriptionsOnTimelines");
const helpers_1 = require("../../../helpers");
let FindManySupscriptionsOnTimelinesResolver = class FindManySupscriptionsOnTimelinesResolver {
    async findManySupscriptionsOnTimelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).supscriptionsOnTimelines.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [SupscriptionsOnTimelines_1.SupscriptionsOnTimelines], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManySupscriptionsOnTimelinesArgs_1.FindManySupscriptionsOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManySupscriptionsOnTimelinesResolver.prototype, "findManySupscriptionsOnTimelines", null);
FindManySupscriptionsOnTimelinesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => SupscriptionsOnTimelines_1.SupscriptionsOnTimelines)
], FindManySupscriptionsOnTimelinesResolver);
exports.FindManySupscriptionsOnTimelinesResolver = FindManySupscriptionsOnTimelinesResolver;
