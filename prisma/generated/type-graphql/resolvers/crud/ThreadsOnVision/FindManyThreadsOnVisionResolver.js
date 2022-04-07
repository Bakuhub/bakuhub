"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyThreadsOnVisionResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManyThreadsOnVisionArgs_1 = require("./args/FindManyThreadsOnVisionArgs");
const ThreadsOnVision_1 = require("../../../models/ThreadsOnVision");
const helpers_1 = require("../../../helpers");
let FindManyThreadsOnVisionResolver = class FindManyThreadsOnVisionResolver {
    async threadsOnVisions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnVision.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ThreadsOnVision_1.ThreadsOnVision], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyThreadsOnVisionArgs_1.FindManyThreadsOnVisionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyThreadsOnVisionResolver.prototype, "threadsOnVisions", null);
FindManyThreadsOnVisionResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ThreadsOnVision_1.ThreadsOnVision)
], FindManyThreadsOnVisionResolver);
exports.FindManyThreadsOnVisionResolver = FindManyThreadsOnVisionResolver;
