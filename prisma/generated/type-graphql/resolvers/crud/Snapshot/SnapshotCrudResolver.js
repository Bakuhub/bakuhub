"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnapshotCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateSnapshotArgs_1 = require("./args/AggregateSnapshotArgs");
const CreateManySnapshotArgs_1 = require("./args/CreateManySnapshotArgs");
const CreateSnapshotArgs_1 = require("./args/CreateSnapshotArgs");
const DeleteManySnapshotArgs_1 = require("./args/DeleteManySnapshotArgs");
const DeleteSnapshotArgs_1 = require("./args/DeleteSnapshotArgs");
const FindFirstSnapshotArgs_1 = require("./args/FindFirstSnapshotArgs");
const FindManySnapshotArgs_1 = require("./args/FindManySnapshotArgs");
const FindUniqueSnapshotArgs_1 = require("./args/FindUniqueSnapshotArgs");
const GroupBySnapshotArgs_1 = require("./args/GroupBySnapshotArgs");
const UpdateManySnapshotArgs_1 = require("./args/UpdateManySnapshotArgs");
const UpdateSnapshotArgs_1 = require("./args/UpdateSnapshotArgs");
const UpsertSnapshotArgs_1 = require("./args/UpsertSnapshotArgs");
const helpers_1 = require("../../../helpers");
const Snapshot_1 = require("../../../models/Snapshot");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateSnapshot_1 = require("../../outputs/AggregateSnapshot");
const SnapshotGroupBy_1 = require("../../outputs/SnapshotGroupBy");
let SnapshotCrudResolver = class SnapshotCrudResolver {
    async snapshot(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).snapshot.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstSnapshot(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).snapshot.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async snapshots(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).snapshot.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createSnapshot(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).snapshot.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManySnapshot(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).snapshot.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteSnapshot(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).snapshot.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateSnapshot(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).snapshot.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManySnapshot(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).snapshot.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManySnapshot(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).snapshot.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertSnapshot(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).snapshot.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateSnapshot(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).snapshot.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupBySnapshot(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).snapshot.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Snapshot_1.Snapshot, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueSnapshotArgs_1.FindUniqueSnapshotArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SnapshotCrudResolver.prototype, "snapshot", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Snapshot_1.Snapshot, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstSnapshotArgs_1.FindFirstSnapshotArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SnapshotCrudResolver.prototype, "findFirstSnapshot", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Snapshot_1.Snapshot], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManySnapshotArgs_1.FindManySnapshotArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SnapshotCrudResolver.prototype, "snapshots", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Snapshot_1.Snapshot, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateSnapshotArgs_1.CreateSnapshotArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SnapshotCrudResolver.prototype, "createSnapshot", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManySnapshotArgs_1.CreateManySnapshotArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SnapshotCrudResolver.prototype, "createManySnapshot", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Snapshot_1.Snapshot, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteSnapshotArgs_1.DeleteSnapshotArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SnapshotCrudResolver.prototype, "deleteSnapshot", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Snapshot_1.Snapshot, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateSnapshotArgs_1.UpdateSnapshotArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SnapshotCrudResolver.prototype, "updateSnapshot", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManySnapshotArgs_1.DeleteManySnapshotArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SnapshotCrudResolver.prototype, "deleteManySnapshot", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManySnapshotArgs_1.UpdateManySnapshotArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SnapshotCrudResolver.prototype, "updateManySnapshot", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Snapshot_1.Snapshot, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertSnapshotArgs_1.UpsertSnapshotArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SnapshotCrudResolver.prototype, "upsertSnapshot", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateSnapshot_1.AggregateSnapshot, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateSnapshotArgs_1.AggregateSnapshotArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SnapshotCrudResolver.prototype, "aggregateSnapshot", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [SnapshotGroupBy_1.SnapshotGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupBySnapshotArgs_1.GroupBySnapshotArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SnapshotCrudResolver.prototype, "groupBySnapshot", null);
SnapshotCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Snapshot_1.Snapshot)
], SnapshotCrudResolver);
exports.SnapshotCrudResolver = SnapshotCrudResolver;
