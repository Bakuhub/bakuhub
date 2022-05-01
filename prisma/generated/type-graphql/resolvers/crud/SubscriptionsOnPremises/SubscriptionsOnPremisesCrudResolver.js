"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsOnPremisesCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateSubscriptionsOnPremisesArgs_1 = require("./args/AggregateSubscriptionsOnPremisesArgs");
const CreateManySubscriptionsOnPremisesArgs_1 = require("./args/CreateManySubscriptionsOnPremisesArgs");
const CreateSubscriptionsOnPremisesArgs_1 = require("./args/CreateSubscriptionsOnPremisesArgs");
const DeleteManySubscriptionsOnPremisesArgs_1 = require("./args/DeleteManySubscriptionsOnPremisesArgs");
const DeleteSubscriptionsOnPremisesArgs_1 = require("./args/DeleteSubscriptionsOnPremisesArgs");
const FindFirstSubscriptionsOnPremisesArgs_1 = require("./args/FindFirstSubscriptionsOnPremisesArgs");
const FindManySubscriptionsOnPremisesArgs_1 = require("./args/FindManySubscriptionsOnPremisesArgs");
const FindUniqueSubscriptionsOnPremisesArgs_1 = require("./args/FindUniqueSubscriptionsOnPremisesArgs");
const GroupBySubscriptionsOnPremisesArgs_1 = require("./args/GroupBySubscriptionsOnPremisesArgs");
const UpdateManySubscriptionsOnPremisesArgs_1 = require("./args/UpdateManySubscriptionsOnPremisesArgs");
const UpdateSubscriptionsOnPremisesArgs_1 = require("./args/UpdateSubscriptionsOnPremisesArgs");
const UpsertSubscriptionsOnPremisesArgs_1 = require("./args/UpsertSubscriptionsOnPremisesArgs");
const helpers_1 = require("../../../helpers");
const SubscriptionsOnPremises_1 = require("../../../models/SubscriptionsOnPremises");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateSubscriptionsOnPremises_1 = require("../../outputs/AggregateSubscriptionsOnPremises");
const SubscriptionsOnPremisesGroupBy_1 = require("../../outputs/SubscriptionsOnPremisesGroupBy");
let SubscriptionsOnPremisesCrudResolver = class SubscriptionsOnPremisesCrudResolver {
    async findUniqueSubscriptionsOnPremises(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).subscriptionsOnPremises.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstSubscriptionsOnPremises(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).subscriptionsOnPremises.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManySubscriptionsOnPremises(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).subscriptionsOnPremises.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createSubscriptionsOnPremises(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).subscriptionsOnPremises.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManySubscriptionsOnPremises(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).subscriptionsOnPremises.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteSubscriptionsOnPremises(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).subscriptionsOnPremises.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateSubscriptionsOnPremises(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).subscriptionsOnPremises.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManySubscriptionsOnPremises(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).subscriptionsOnPremises.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManySubscriptionsOnPremises(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).subscriptionsOnPremises.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertSubscriptionsOnPremises(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).subscriptionsOnPremises.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateSubscriptionsOnPremises(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).subscriptionsOnPremises.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupBySubscriptionsOnPremises(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).subscriptionsOnPremises.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => SubscriptionsOnPremises_1.SubscriptionsOnPremises, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueSubscriptionsOnPremisesArgs_1.FindUniqueSubscriptionsOnPremisesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SubscriptionsOnPremisesCrudResolver.prototype, "findUniqueSubscriptionsOnPremises", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => SubscriptionsOnPremises_1.SubscriptionsOnPremises, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstSubscriptionsOnPremisesArgs_1.FindFirstSubscriptionsOnPremisesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SubscriptionsOnPremisesCrudResolver.prototype, "findFirstSubscriptionsOnPremises", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [SubscriptionsOnPremises_1.SubscriptionsOnPremises], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManySubscriptionsOnPremisesArgs_1.FindManySubscriptionsOnPremisesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SubscriptionsOnPremisesCrudResolver.prototype, "findManySubscriptionsOnPremises", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => SubscriptionsOnPremises_1.SubscriptionsOnPremises, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateSubscriptionsOnPremisesArgs_1.CreateSubscriptionsOnPremisesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SubscriptionsOnPremisesCrudResolver.prototype, "createSubscriptionsOnPremises", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManySubscriptionsOnPremisesArgs_1.CreateManySubscriptionsOnPremisesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SubscriptionsOnPremisesCrudResolver.prototype, "createManySubscriptionsOnPremises", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => SubscriptionsOnPremises_1.SubscriptionsOnPremises, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteSubscriptionsOnPremisesArgs_1.DeleteSubscriptionsOnPremisesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SubscriptionsOnPremisesCrudResolver.prototype, "deleteSubscriptionsOnPremises", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => SubscriptionsOnPremises_1.SubscriptionsOnPremises, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateSubscriptionsOnPremisesArgs_1.UpdateSubscriptionsOnPremisesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SubscriptionsOnPremisesCrudResolver.prototype, "updateSubscriptionsOnPremises", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManySubscriptionsOnPremisesArgs_1.DeleteManySubscriptionsOnPremisesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SubscriptionsOnPremisesCrudResolver.prototype, "deleteManySubscriptionsOnPremises", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManySubscriptionsOnPremisesArgs_1.UpdateManySubscriptionsOnPremisesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SubscriptionsOnPremisesCrudResolver.prototype, "updateManySubscriptionsOnPremises", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => SubscriptionsOnPremises_1.SubscriptionsOnPremises, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertSubscriptionsOnPremisesArgs_1.UpsertSubscriptionsOnPremisesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SubscriptionsOnPremisesCrudResolver.prototype, "upsertSubscriptionsOnPremises", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateSubscriptionsOnPremises_1.AggregateSubscriptionsOnPremises, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateSubscriptionsOnPremisesArgs_1.AggregateSubscriptionsOnPremisesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SubscriptionsOnPremisesCrudResolver.prototype, "aggregateSubscriptionsOnPremises", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [SubscriptionsOnPremisesGroupBy_1.SubscriptionsOnPremisesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupBySubscriptionsOnPremisesArgs_1.GroupBySubscriptionsOnPremisesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SubscriptionsOnPremisesCrudResolver.prototype, "groupBySubscriptionsOnPremises", null);
SubscriptionsOnPremisesCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => SubscriptionsOnPremises_1.SubscriptionsOnPremises)
], SubscriptionsOnPremisesCrudResolver);
exports.SubscriptionsOnPremisesCrudResolver = SubscriptionsOnPremisesCrudResolver;
