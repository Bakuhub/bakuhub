"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyThreadResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManyThreadArgs_1 = require("./args/FindManyThreadArgs");
const Thread_1 = require("../../../models/Thread");
const helpers_1 = require("../../../helpers");
let FindManyThreadResolver = class FindManyThreadResolver {
    async threads(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).thread.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Thread_1.Thread], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyThreadArgs_1.FindManyThreadArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyThreadResolver.prototype, "threads", null);
FindManyThreadResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Thread_1.Thread)
], FindManyThreadResolver);
exports.FindManyThreadResolver = FindManyThreadResolver;
