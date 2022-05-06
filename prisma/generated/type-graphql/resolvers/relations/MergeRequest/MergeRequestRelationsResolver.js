"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MergeRequestRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MergeRequest_1 = require("../../../models/MergeRequest");
const ThreadsOnMergeRequest_1 = require("../../../models/ThreadsOnMergeRequest");
const Vision_1 = require("../../../models/Vision");
const MergeRequestThreadsOnMergeRequestArgs_1 = require("./args/MergeRequestThreadsOnMergeRequestArgs");
const helpers_1 = require("../../../helpers");
let MergeRequestRelationsResolver = class MergeRequestRelationsResolver {
    async vision(mergeRequest, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).mergeRequest.findUnique({
            where: {
                id: mergeRequest.id,
            },
        }).vision({});
    }
    async threadsOnMergeRequest(mergeRequest, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).mergeRequest.findUnique({
            where: {
                id: mergeRequest.id,
            },
        }).threadsOnMergeRequest(args);
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Vision_1.Vision, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [MergeRequest_1.MergeRequest, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MergeRequestRelationsResolver.prototype, "vision", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [ThreadsOnMergeRequest_1.ThreadsOnMergeRequest], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [MergeRequest_1.MergeRequest, Object, MergeRequestThreadsOnMergeRequestArgs_1.MergeRequestThreadsOnMergeRequestArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MergeRequestRelationsResolver.prototype, "threadsOnMergeRequest", null);
MergeRequestRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => MergeRequest_1.MergeRequest)
], MergeRequestRelationsResolver);
exports.MergeRequestRelationsResolver = MergeRequestRelationsResolver;
