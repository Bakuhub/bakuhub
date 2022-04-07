"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateThreadsOnMergeRequestResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateThreadsOnMergeRequestArgs_1 = require("./args/AggregateThreadsOnMergeRequestArgs");
const ThreadsOnMergeRequest_1 = require("../../../models/ThreadsOnMergeRequest");
const AggregateThreadsOnMergeRequest_1 = require("../../outputs/AggregateThreadsOnMergeRequest");
const helpers_1 = require("../../../helpers");
let AggregateThreadsOnMergeRequestResolver = class AggregateThreadsOnMergeRequestResolver {
    async aggregateThreadsOnMergeRequest(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnMergeRequest.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateThreadsOnMergeRequest_1.AggregateThreadsOnMergeRequest, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateThreadsOnMergeRequestArgs_1.AggregateThreadsOnMergeRequestArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateThreadsOnMergeRequestResolver.prototype, "aggregateThreadsOnMergeRequest", null);
AggregateThreadsOnMergeRequestResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ThreadsOnMergeRequest_1.ThreadsOnMergeRequest)
], AggregateThreadsOnMergeRequestResolver);
exports.AggregateThreadsOnMergeRequestResolver = AggregateThreadsOnMergeRequestResolver;
