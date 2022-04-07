"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MergeRequestCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateMergeRequestArgs_1 = require("./args/AggregateMergeRequestArgs");
const CreateManyMergeRequestArgs_1 = require("./args/CreateManyMergeRequestArgs");
const CreateMergeRequestArgs_1 = require("./args/CreateMergeRequestArgs");
const DeleteManyMergeRequestArgs_1 = require("./args/DeleteManyMergeRequestArgs");
const DeleteMergeRequestArgs_1 = require("./args/DeleteMergeRequestArgs");
const FindFirstMergeRequestArgs_1 = require("./args/FindFirstMergeRequestArgs");
const FindManyMergeRequestArgs_1 = require("./args/FindManyMergeRequestArgs");
const FindUniqueMergeRequestArgs_1 = require("./args/FindUniqueMergeRequestArgs");
const GroupByMergeRequestArgs_1 = require("./args/GroupByMergeRequestArgs");
const UpdateManyMergeRequestArgs_1 = require("./args/UpdateManyMergeRequestArgs");
const UpdateMergeRequestArgs_1 = require("./args/UpdateMergeRequestArgs");
const UpsertMergeRequestArgs_1 = require("./args/UpsertMergeRequestArgs");
const helpers_1 = require("../../../helpers");
const MergeRequest_1 = require("../../../models/MergeRequest");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateMergeRequest_1 = require("../../outputs/AggregateMergeRequest");
const MergeRequestGroupBy_1 = require("../../outputs/MergeRequestGroupBy");
let MergeRequestCrudResolver = class MergeRequestCrudResolver {
    async mergeRequest(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mergeRequest.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstMergeRequest(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mergeRequest.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async mergeRequests(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mergeRequest.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createMergeRequest(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mergeRequest.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyMergeRequest(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mergeRequest.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteMergeRequest(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mergeRequest.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateMergeRequest(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mergeRequest.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyMergeRequest(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mergeRequest.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyMergeRequest(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mergeRequest.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertMergeRequest(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mergeRequest.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateMergeRequest(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).mergeRequest.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByMergeRequest(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mergeRequest.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => MergeRequest_1.MergeRequest, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueMergeRequestArgs_1.FindUniqueMergeRequestArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MergeRequestCrudResolver.prototype, "mergeRequest", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => MergeRequest_1.MergeRequest, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstMergeRequestArgs_1.FindFirstMergeRequestArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MergeRequestCrudResolver.prototype, "findFirstMergeRequest", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [MergeRequest_1.MergeRequest], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyMergeRequestArgs_1.FindManyMergeRequestArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MergeRequestCrudResolver.prototype, "mergeRequests", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => MergeRequest_1.MergeRequest, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateMergeRequestArgs_1.CreateMergeRequestArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MergeRequestCrudResolver.prototype, "createMergeRequest", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyMergeRequestArgs_1.CreateManyMergeRequestArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MergeRequestCrudResolver.prototype, "createManyMergeRequest", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => MergeRequest_1.MergeRequest, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteMergeRequestArgs_1.DeleteMergeRequestArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MergeRequestCrudResolver.prototype, "deleteMergeRequest", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => MergeRequest_1.MergeRequest, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateMergeRequestArgs_1.UpdateMergeRequestArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MergeRequestCrudResolver.prototype, "updateMergeRequest", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyMergeRequestArgs_1.DeleteManyMergeRequestArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MergeRequestCrudResolver.prototype, "deleteManyMergeRequest", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyMergeRequestArgs_1.UpdateManyMergeRequestArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MergeRequestCrudResolver.prototype, "updateManyMergeRequest", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => MergeRequest_1.MergeRequest, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertMergeRequestArgs_1.UpsertMergeRequestArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MergeRequestCrudResolver.prototype, "upsertMergeRequest", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateMergeRequest_1.AggregateMergeRequest, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateMergeRequestArgs_1.AggregateMergeRequestArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MergeRequestCrudResolver.prototype, "aggregateMergeRequest", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [MergeRequestGroupBy_1.MergeRequestGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByMergeRequestArgs_1.GroupByMergeRequestArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MergeRequestCrudResolver.prototype, "groupByMergeRequest", null);
MergeRequestCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => MergeRequest_1.MergeRequest)
], MergeRequestCrudResolver);
exports.MergeRequestCrudResolver = MergeRequestCrudResolver;
