"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSubscriptionsOnTimelinesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateSubscriptionsOnTimelinesArgs_1 = require("./args/AggregateSubscriptionsOnTimelinesArgs");
const SubscriptionsOnTimelines_1 = require("../../../models/SubscriptionsOnTimelines");
const AggregateSubscriptionsOnTimelines_1 = require("../../outputs/AggregateSubscriptionsOnTimelines");
const helpers_1 = require("../../../helpers");
let AggregateSubscriptionsOnTimelinesResolver = class AggregateSubscriptionsOnTimelinesResolver {
    async aggregateSubscriptionsOnTimelines(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).subscriptionsOnTimelines.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateSubscriptionsOnTimelines_1.AggregateSubscriptionsOnTimelines, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateSubscriptionsOnTimelinesArgs_1.AggregateSubscriptionsOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateSubscriptionsOnTimelinesResolver.prototype, "aggregateSubscriptionsOnTimelines", null);
AggregateSubscriptionsOnTimelinesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => SubscriptionsOnTimelines_1.SubscriptionsOnTimelines)
], AggregateSubscriptionsOnTimelinesResolver);
exports.AggregateSubscriptionsOnTimelinesResolver = AggregateSubscriptionsOnTimelinesResolver;
