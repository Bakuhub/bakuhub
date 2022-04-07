"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenceCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateReferenceArgs_1 = require("./args/AggregateReferenceArgs");
const CreateManyReferenceArgs_1 = require("./args/CreateManyReferenceArgs");
const CreateReferenceArgs_1 = require("./args/CreateReferenceArgs");
const DeleteManyReferenceArgs_1 = require("./args/DeleteManyReferenceArgs");
const DeleteReferenceArgs_1 = require("./args/DeleteReferenceArgs");
const FindFirstReferenceArgs_1 = require("./args/FindFirstReferenceArgs");
const FindManyReferenceArgs_1 = require("./args/FindManyReferenceArgs");
const FindUniqueReferenceArgs_1 = require("./args/FindUniqueReferenceArgs");
const GroupByReferenceArgs_1 = require("./args/GroupByReferenceArgs");
const UpdateManyReferenceArgs_1 = require("./args/UpdateManyReferenceArgs");
const UpdateReferenceArgs_1 = require("./args/UpdateReferenceArgs");
const UpsertReferenceArgs_1 = require("./args/UpsertReferenceArgs");
const helpers_1 = require("../../../helpers");
const Reference_1 = require("../../../models/Reference");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateReference_1 = require("../../outputs/AggregateReference");
const ReferenceGroupBy_1 = require("../../outputs/ReferenceGroupBy");
let ReferenceCrudResolver = class ReferenceCrudResolver {
    async reference(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reference.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstReference(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reference.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async references(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reference.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createReference(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reference.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyReference(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reference.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteReference(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reference.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateReference(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reference.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyReference(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reference.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyReference(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reference.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertReference(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reference.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateReference(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).reference.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByReference(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reference.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Reference_1.Reference, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueReferenceArgs_1.FindUniqueReferenceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReferenceCrudResolver.prototype, "reference", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Reference_1.Reference, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstReferenceArgs_1.FindFirstReferenceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReferenceCrudResolver.prototype, "findFirstReference", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Reference_1.Reference], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyReferenceArgs_1.FindManyReferenceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReferenceCrudResolver.prototype, "references", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Reference_1.Reference, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateReferenceArgs_1.CreateReferenceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReferenceCrudResolver.prototype, "createReference", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyReferenceArgs_1.CreateManyReferenceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReferenceCrudResolver.prototype, "createManyReference", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Reference_1.Reference, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteReferenceArgs_1.DeleteReferenceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReferenceCrudResolver.prototype, "deleteReference", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Reference_1.Reference, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateReferenceArgs_1.UpdateReferenceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReferenceCrudResolver.prototype, "updateReference", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyReferenceArgs_1.DeleteManyReferenceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReferenceCrudResolver.prototype, "deleteManyReference", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyReferenceArgs_1.UpdateManyReferenceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReferenceCrudResolver.prototype, "updateManyReference", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Reference_1.Reference, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertReferenceArgs_1.UpsertReferenceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReferenceCrudResolver.prototype, "upsertReference", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateReference_1.AggregateReference, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateReferenceArgs_1.AggregateReferenceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReferenceCrudResolver.prototype, "aggregateReference", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ReferenceGroupBy_1.ReferenceGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByReferenceArgs_1.GroupByReferenceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReferenceCrudResolver.prototype, "groupByReference", null);
ReferenceCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Reference_1.Reference)
], ReferenceCrudResolver);
exports.ReferenceCrudResolver = ReferenceCrudResolver;
