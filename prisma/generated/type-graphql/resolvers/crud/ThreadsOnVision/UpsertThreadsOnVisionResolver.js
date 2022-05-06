"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertThreadsOnVisionResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertThreadsOnVisionArgs_1 = require("./args/UpsertThreadsOnVisionArgs");
const ThreadsOnVision_1 = require("../../../models/ThreadsOnVision");
const helpers_1 = require("../../../helpers");
let UpsertThreadsOnVisionResolver = class UpsertThreadsOnVisionResolver {
    async upsertThreadsOnVision(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnVision.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ThreadsOnVision_1.ThreadsOnVision, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertThreadsOnVisionArgs_1.UpsertThreadsOnVisionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertThreadsOnVisionResolver.prototype, "upsertThreadsOnVision", null);
UpsertThreadsOnVisionResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ThreadsOnVision_1.ThreadsOnVision)
], UpsertThreadsOnVisionResolver);
exports.UpsertThreadsOnVisionResolver = UpsertThreadsOnVisionResolver;
