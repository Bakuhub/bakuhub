"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyReactionOnTimelinesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteManyReactionOnTimelinesArgs_1 = require("./args/DeleteManyReactionOnTimelinesArgs");
const ReactionOnTimelines_1 = require("../../../models/ReactionOnTimelines");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyReactionOnTimelinesResolver = class DeleteManyReactionOnTimelinesResolver {
    async deleteManyReactionOnTimelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reactionOnTimelines.deleteMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyReactionOnTimelinesArgs_1.DeleteManyReactionOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyReactionOnTimelinesResolver.prototype, "deleteManyReactionOnTimelines", null);
DeleteManyReactionOnTimelinesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ReactionOnTimelines_1.ReactionOnTimelines)
], DeleteManyReactionOnTimelinesResolver);
exports.DeleteManyReactionOnTimelinesResolver = DeleteManyReactionOnTimelinesResolver;
