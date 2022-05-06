"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateVotesOnThreadResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateVotesOnThreadArgs_1 = require("./args/CreateVotesOnThreadArgs");
const VotesOnThread_1 = require("../../../models/VotesOnThread");
const helpers_1 = require("../../../helpers");
let CreateVotesOnThreadResolver = class CreateVotesOnThreadResolver {
    async createVotesOnThread(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnThread.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => VotesOnThread_1.VotesOnThread, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateVotesOnThreadArgs_1.CreateVotesOnThreadArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateVotesOnThreadResolver.prototype, "createVotesOnThread", null);
CreateVotesOnThreadResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => VotesOnThread_1.VotesOnThread)
], CreateVotesOnThreadResolver);
exports.CreateVotesOnThreadResolver = CreateVotesOnThreadResolver;
