"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueReactionOnTimelinesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueReactionOnTimelinesArgs_1 = require("./args/FindUniqueReactionOnTimelinesArgs");
const ReactionOnTimelines_1 = require("../../../models/ReactionOnTimelines");
const helpers_1 = require("../../../helpers");
let FindUniqueReactionOnTimelinesResolver = class FindUniqueReactionOnTimelinesResolver {
    async findUniqueReactionOnTimelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reactionOnTimelines.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => ReactionOnTimelines_1.ReactionOnTimelines, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueReactionOnTimelinesArgs_1.FindUniqueReactionOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueReactionOnTimelinesResolver.prototype, "findUniqueReactionOnTimelines", null);
FindUniqueReactionOnTimelinesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ReactionOnTimelines_1.ReactionOnTimelines)
], FindUniqueReactionOnTimelinesResolver);
exports.FindUniqueReactionOnTimelinesResolver = FindUniqueReactionOnTimelinesResolver;
