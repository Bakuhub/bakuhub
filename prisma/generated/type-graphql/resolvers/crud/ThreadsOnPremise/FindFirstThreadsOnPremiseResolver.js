"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstThreadsOnPremiseResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstThreadsOnPremiseArgs_1 = require("./args/FindFirstThreadsOnPremiseArgs");
const ThreadsOnPremise_1 = require("../../../models/ThreadsOnPremise");
const helpers_1 = require("../../../helpers");
let FindFirstThreadsOnPremiseResolver = class FindFirstThreadsOnPremiseResolver {
    async findFirstThreadsOnPremise(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnPremise.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => ThreadsOnPremise_1.ThreadsOnPremise, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstThreadsOnPremiseArgs_1.FindFirstThreadsOnPremiseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstThreadsOnPremiseResolver.prototype, "findFirstThreadsOnPremise", null);
FindFirstThreadsOnPremiseResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ThreadsOnPremise_1.ThreadsOnPremise)
], FindFirstThreadsOnPremiseResolver);
exports.FindFirstThreadsOnPremiseResolver = FindFirstThreadsOnPremiseResolver;
