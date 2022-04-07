"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnMergeRequestRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MergeRequest_1 = require("../../../models/MergeRequest");
const Thread_1 = require("../../../models/Thread");
const ThreadsOnMergeRequest_1 = require("../../../models/ThreadsOnMergeRequest");
const helpers_1 = require("../../../helpers");
let ThreadsOnMergeRequestRelationsResolver = class ThreadsOnMergeRequestRelationsResolver {
    async thread(threadsOnMergeRequest, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnMergeRequest.findUnique({
            where: {
                threadId: threadsOnMergeRequest.threadId,
            },
        }).thread({});
    }
    async mergeRequest(threadsOnMergeRequest, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnMergeRequest.findUnique({
            where: {
                threadId: threadsOnMergeRequest.threadId,
            },
        }).mergeRequest({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Thread_1.Thread, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ThreadsOnMergeRequest_1.ThreadsOnMergeRequest, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadsOnMergeRequestRelationsResolver.prototype, "thread", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => MergeRequest_1.MergeRequest, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ThreadsOnMergeRequest_1.ThreadsOnMergeRequest, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadsOnMergeRequestRelationsResolver.prototype, "mergeRequest", null);
ThreadsOnMergeRequestRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ThreadsOnMergeRequest_1.ThreadsOnMergeRequest)
], ThreadsOnMergeRequestRelationsResolver);
exports.ThreadsOnMergeRequestRelationsResolver = ThreadsOnMergeRequestRelationsResolver;
