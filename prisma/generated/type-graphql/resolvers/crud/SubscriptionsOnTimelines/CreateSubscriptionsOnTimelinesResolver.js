"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSubscriptionsOnTimelinesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateSubscriptionsOnTimelinesArgs_1 = require("./args/CreateSubscriptionsOnTimelinesArgs");
const SubscriptionsOnTimelines_1 = require("../../../models/SubscriptionsOnTimelines");
const helpers_1 = require("../../../helpers");
let CreateSubscriptionsOnTimelinesResolver = class CreateSubscriptionsOnTimelinesResolver {
    async createSubscriptionsOnTimelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).subscriptionsOnTimelines.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => SubscriptionsOnTimelines_1.SubscriptionsOnTimelines, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateSubscriptionsOnTimelinesArgs_1.CreateSubscriptionsOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateSubscriptionsOnTimelinesResolver.prototype, "createSubscriptionsOnTimelines", null);
CreateSubscriptionsOnTimelinesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => SubscriptionsOnTimelines_1.SubscriptionsOnTimelines)
], CreateSubscriptionsOnTimelinesResolver);
exports.CreateSubscriptionsOnTimelinesResolver = CreateSubscriptionsOnTimelinesResolver;
