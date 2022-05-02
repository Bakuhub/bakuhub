"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstThreadsOnVisionResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstThreadsOnVisionArgs_1 = require("./args/FindFirstThreadsOnVisionArgs");
const ThreadsOnVision_1 = require("../../../models/ThreadsOnVision");
const helpers_1 = require("../../../helpers");
let FindFirstThreadsOnVisionResolver = class FindFirstThreadsOnVisionResolver {
    async findFirstThreadsOnVision(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnVision.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => ThreadsOnVision_1.ThreadsOnVision, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstThreadsOnVisionArgs_1.FindFirstThreadsOnVisionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstThreadsOnVisionResolver.prototype, "findFirstThreadsOnVision", null);
FindFirstThreadsOnVisionResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ThreadsOnVision_1.ThreadsOnVision)
], FindFirstThreadsOnVisionResolver);
exports.FindFirstThreadsOnVisionResolver = FindFirstThreadsOnVisionResolver;