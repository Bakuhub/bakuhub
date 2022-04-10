"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateVotesOnVisionResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateVotesOnVisionArgs_1 = require("./args/CreateVotesOnVisionArgs");
const VotesOnVision_1 = require("../../../models/VotesOnVision");
const helpers_1 = require("../../../helpers");
let CreateVotesOnVisionResolver = class CreateVotesOnVisionResolver {
    async createVotesOnVision(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnVision.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => VotesOnVision_1.VotesOnVision, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateVotesOnVisionArgs_1.CreateVotesOnVisionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateVotesOnVisionResolver.prototype, "createVotesOnVision", null);
CreateVotesOnVisionResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => VotesOnVision_1.VotesOnVision)
], CreateVotesOnVisionResolver);
exports.CreateVotesOnVisionResolver = CreateVotesOnVisionResolver;
