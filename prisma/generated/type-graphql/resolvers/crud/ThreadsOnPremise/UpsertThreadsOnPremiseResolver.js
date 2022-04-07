"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertThreadsOnPremiseResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertThreadsOnPremiseArgs_1 = require("./args/UpsertThreadsOnPremiseArgs");
const ThreadsOnPremise_1 = require("../../../models/ThreadsOnPremise");
const helpers_1 = require("../../../helpers");
let UpsertThreadsOnPremiseResolver = class UpsertThreadsOnPremiseResolver {
    async upsertThreadsOnPremise(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnPremise.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ThreadsOnPremise_1.ThreadsOnPremise, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertThreadsOnPremiseArgs_1.UpsertThreadsOnPremiseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertThreadsOnPremiseResolver.prototype, "upsertThreadsOnPremise", null);
UpsertThreadsOnPremiseResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ThreadsOnPremise_1.ThreadsOnPremise)
], UpsertThreadsOnPremiseResolver);
exports.UpsertThreadsOnPremiseResolver = UpsertThreadsOnPremiseResolver;
