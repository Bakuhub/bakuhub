"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateReactionOnVisionsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateReactionOnVisionsArgs_1 = require("./args/CreateReactionOnVisionsArgs");
const ReactionOnVisions_1 = require("../../../models/ReactionOnVisions");
const helpers_1 = require("../../../helpers");
let CreateReactionOnVisionsResolver = class CreateReactionOnVisionsResolver {
    async createReactionOnVisions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reactionOnVisions.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ReactionOnVisions_1.ReactionOnVisions, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateReactionOnVisionsArgs_1.CreateReactionOnVisionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateReactionOnVisionsResolver.prototype, "createReactionOnVisions", null);
CreateReactionOnVisionsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ReactionOnVisions_1.ReactionOnVisions)
], CreateReactionOnVisionsResolver);
exports.CreateReactionOnVisionsResolver = CreateReactionOnVisionsResolver;