"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSubscriptionsOnTimelinesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateSubscriptionsOnTimelinesArgs_1 = require("./args/UpdateSubscriptionsOnTimelinesArgs");
const SubscriptionsOnTimelines_1 = require("../../../models/SubscriptionsOnTimelines");
const helpers_1 = require("../../../helpers");
let UpdateSubscriptionsOnTimelinesResolver = class UpdateSubscriptionsOnTimelinesResolver {
    async updateSubscriptionsOnTimelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).subscriptionsOnTimelines.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => SubscriptionsOnTimelines_1.SubscriptionsOnTimelines, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateSubscriptionsOnTimelinesArgs_1.UpdateSubscriptionsOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateSubscriptionsOnTimelinesResolver.prototype, "updateSubscriptionsOnTimelines", null);
UpdateSubscriptionsOnTimelinesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => SubscriptionsOnTimelines_1.SubscriptionsOnTimelines)
], UpdateSubscriptionsOnTimelinesResolver);
exports.UpdateSubscriptionsOnTimelinesResolver = UpdateSubscriptionsOnTimelinesResolver;
