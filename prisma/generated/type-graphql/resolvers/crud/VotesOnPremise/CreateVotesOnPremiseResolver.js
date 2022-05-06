"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateVotesOnPremiseResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateVotesOnPremiseArgs_1 = require("./args/CreateVotesOnPremiseArgs");
const VotesOnPremise_1 = require("../../../models/VotesOnPremise");
const helpers_1 = require("../../../helpers");
let CreateVotesOnPremiseResolver = class CreateVotesOnPremiseResolver {
    async createVotesOnPremise(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnPremise.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => VotesOnPremise_1.VotesOnPremise, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateVotesOnPremiseArgs_1.CreateVotesOnPremiseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateVotesOnPremiseResolver.prototype, "createVotesOnPremise", null);
CreateVotesOnPremiseResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => VotesOnPremise_1.VotesOnPremise)
], CreateVotesOnPremiseResolver);
exports.CreateVotesOnPremiseResolver = CreateVotesOnPremiseResolver;
