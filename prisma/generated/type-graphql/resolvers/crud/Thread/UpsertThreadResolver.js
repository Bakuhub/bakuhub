"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertThreadResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertThreadArgs_1 = require("./args/UpsertThreadArgs");
const Thread_1 = require("../../../models/Thread");
const helpers_1 = require("../../../helpers");
let UpsertThreadResolver = class UpsertThreadResolver {
    async upsertThread(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).thread.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Thread_1.Thread, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertThreadArgs_1.UpsertThreadArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertThreadResolver.prototype, "upsertThread", null);
UpsertThreadResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Thread_1.Thread)
], UpsertThreadResolver);
exports.UpsertThreadResolver = UpsertThreadResolver;
