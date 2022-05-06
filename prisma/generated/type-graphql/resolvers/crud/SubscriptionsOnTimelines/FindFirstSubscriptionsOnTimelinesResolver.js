"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstSubscriptionsOnTimelinesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstSubscriptionsOnTimelinesArgs_1 = require("./args/FindFirstSubscriptionsOnTimelinesArgs");
const SubscriptionsOnTimelines_1 = require("../../../models/SubscriptionsOnTimelines");
const helpers_1 = require("../../../helpers");
let FindFirstSubscriptionsOnTimelinesResolver = class FindFirstSubscriptionsOnTimelinesResolver {
    async findFirstSubscriptionsOnTimelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).subscriptionsOnTimelines.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => SubscriptionsOnTimelines_1.SubscriptionsOnTimelines, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstSubscriptionsOnTimelinesArgs_1.FindFirstSubscriptionsOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstSubscriptionsOnTimelinesResolver.prototype, "findFirstSubscriptionsOnTimelines", null);
FindFirstSubscriptionsOnTimelinesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => SubscriptionsOnTimelines_1.SubscriptionsOnTimelines)
], FindFirstSubscriptionsOnTimelinesResolver);
exports.FindFirstSubscriptionsOnTimelinesResolver = FindFirstSubscriptionsOnTimelinesResolver;
