"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstThreadResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstThreadArgs_1 = require("./args/FindFirstThreadArgs");
const Thread_1 = require("../../../models/Thread");
const helpers_1 = require("../../../helpers");
let FindFirstThreadResolver = class FindFirstThreadResolver {
    async findFirstThread(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).thread.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Thread_1.Thread, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstThreadArgs_1.FindFirstThreadArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstThreadResolver.prototype, "findFirstThread", null);
FindFirstThreadResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Thread_1.Thread)
], FindFirstThreadResolver);
exports.FindFirstThreadResolver = FindFirstThreadResolver;
