"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyThreadsOnPremiseResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateManyThreadsOnPremiseArgs_1 = require("./args/CreateManyThreadsOnPremiseArgs");
const ThreadsOnPremise_1 = require("../../../models/ThreadsOnPremise");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyThreadsOnPremiseResolver = class CreateManyThreadsOnPremiseResolver {
    async createManyThreadsOnPremise(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnPremise.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyThreadsOnPremiseArgs_1.CreateManyThreadsOnPremiseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyThreadsOnPremiseResolver.prototype, "createManyThreadsOnPremise", null);
CreateManyThreadsOnPremiseResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ThreadsOnPremise_1.ThreadsOnPremise)
], CreateManyThreadsOnPremiseResolver);
exports.CreateManyThreadsOnPremiseResolver = CreateManyThreadsOnPremiseResolver;