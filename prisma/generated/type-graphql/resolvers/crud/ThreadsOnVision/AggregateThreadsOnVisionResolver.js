"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateThreadsOnVisionResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateThreadsOnVisionArgs_1 = require("./args/AggregateThreadsOnVisionArgs");
const ThreadsOnVision_1 = require("../../../models/ThreadsOnVision");
const AggregateThreadsOnVision_1 = require("../../outputs/AggregateThreadsOnVision");
const helpers_1 = require("../../../helpers");
let AggregateThreadsOnVisionResolver = class AggregateThreadsOnVisionResolver {
    async aggregateThreadsOnVision(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnVision.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateThreadsOnVision_1.AggregateThreadsOnVision, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateThreadsOnVisionArgs_1.AggregateThreadsOnVisionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateThreadsOnVisionResolver.prototype, "aggregateThreadsOnVision", null);
AggregateThreadsOnVisionResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ThreadsOnVision_1.ThreadsOnVision)
], AggregateThreadsOnVisionResolver);
exports.AggregateThreadsOnVisionResolver = AggregateThreadsOnVisionResolver;
