"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateVisionArgs_1 = require("./args/AggregateVisionArgs");
const CreateManyVisionArgs_1 = require("./args/CreateManyVisionArgs");
const CreateVisionArgs_1 = require("./args/CreateVisionArgs");
const DeleteManyVisionArgs_1 = require("./args/DeleteManyVisionArgs");
const DeleteVisionArgs_1 = require("./args/DeleteVisionArgs");
const FindFirstVisionArgs_1 = require("./args/FindFirstVisionArgs");
const FindManyVisionArgs_1 = require("./args/FindManyVisionArgs");
const FindUniqueVisionArgs_1 = require("./args/FindUniqueVisionArgs");
const GroupByVisionArgs_1 = require("./args/GroupByVisionArgs");
const UpdateManyVisionArgs_1 = require("./args/UpdateManyVisionArgs");
const UpdateVisionArgs_1 = require("./args/UpdateVisionArgs");
const UpsertVisionArgs_1 = require("./args/UpsertVisionArgs");
const helpers_1 = require("../../../helpers");
const Vision_1 = require("../../../models/Vision");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateVision_1 = require("../../outputs/AggregateVision");
const VisionGroupBy_1 = require("../../outputs/VisionGroupBy");
let VisionCrudResolver = class VisionCrudResolver {
    async vision(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).vision.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstVision(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).vision.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async visions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).vision.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createVision(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).vision.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyVision(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).vision.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteVision(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).vision.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateVision(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).vision.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyVision(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).vision.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyVision(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).vision.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertVision(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).vision.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateVision(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).vision.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByVision(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).vision.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Vision_1.Vision, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueVisionArgs_1.FindUniqueVisionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VisionCrudResolver.prototype, "vision", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Vision_1.Vision, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstVisionArgs_1.FindFirstVisionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VisionCrudResolver.prototype, "findFirstVision", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Vision_1.Vision], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyVisionArgs_1.FindManyVisionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VisionCrudResolver.prototype, "visions", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Vision_1.Vision, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateVisionArgs_1.CreateVisionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VisionCrudResolver.prototype, "createVision", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyVisionArgs_1.CreateManyVisionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VisionCrudResolver.prototype, "createManyVision", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Vision_1.Vision, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteVisionArgs_1.DeleteVisionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VisionCrudResolver.prototype, "deleteVision", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Vision_1.Vision, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateVisionArgs_1.UpdateVisionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VisionCrudResolver.prototype, "updateVision", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyVisionArgs_1.DeleteManyVisionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VisionCrudResolver.prototype, "deleteManyVision", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyVisionArgs_1.UpdateManyVisionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VisionCrudResolver.prototype, "updateManyVision", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Vision_1.Vision, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertVisionArgs_1.UpsertVisionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VisionCrudResolver.prototype, "upsertVision", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateVision_1.AggregateVision, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateVisionArgs_1.AggregateVisionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VisionCrudResolver.prototype, "aggregateVision", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [VisionGroupBy_1.VisionGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByVisionArgs_1.GroupByVisionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VisionCrudResolver.prototype, "groupByVision", null);
VisionCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Vision_1.Vision)
], VisionCrudResolver);
exports.VisionCrudResolver = VisionCrudResolver;
