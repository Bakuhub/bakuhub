"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyVotesOnPremiseResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateManyVotesOnPremiseArgs_1 = require("./args/CreateManyVotesOnPremiseArgs");
const VotesOnPremise_1 = require("../../../models/VotesOnPremise");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyVotesOnPremiseResolver = class CreateManyVotesOnPremiseResolver {
    async createManyVotesOnPremise(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnPremise.createMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyVotesOnPremiseArgs_1.CreateManyVotesOnPremiseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyVotesOnPremiseResolver.prototype, "createManyVotesOnPremise", null);
CreateManyVotesOnPremiseResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => VotesOnPremise_1.VotesOnPremise)
], CreateManyVotesOnPremiseResolver);
exports.CreateManyVotesOnPremiseResolver = CreateManyVotesOnPremiseResolver;
