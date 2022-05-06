"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteThreadResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteThreadArgs_1 = require("./args/DeleteThreadArgs");
const Thread_1 = require("../../../models/Thread");
const helpers_1 = require("../../../helpers");
let DeleteThreadResolver = class DeleteThreadResolver {
    async deleteThread(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).thread.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Thread_1.Thread, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteThreadArgs_1.DeleteThreadArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteThreadResolver.prototype, "deleteThread", null);
DeleteThreadResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Thread_1.Thread)
], DeleteThreadResolver);
exports.DeleteThreadResolver = DeleteThreadResolver;
