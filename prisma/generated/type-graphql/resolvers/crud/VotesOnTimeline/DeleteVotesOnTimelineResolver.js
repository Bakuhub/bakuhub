"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteVotesOnTimelineResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteVotesOnTimelineArgs_1 = require("./args/DeleteVotesOnTimelineArgs");
const VotesOnTimeline_1 = require("../../../models/VotesOnTimeline");
const helpers_1 = require("../../../helpers");
let DeleteVotesOnTimelineResolver = class DeleteVotesOnTimelineResolver {
    async deleteVotesOnTimeline(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnTimeline.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => VotesOnTimeline_1.VotesOnTimeline, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteVotesOnTimelineArgs_1.DeleteVotesOnTimelineArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteVotesOnTimelineResolver.prototype, "deleteVotesOnTimeline", null);
DeleteVotesOnTimelineResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => VotesOnTimeline_1.VotesOnTimeline)
], DeleteVotesOnTimelineResolver);
exports.DeleteVotesOnTimelineResolver = DeleteVotesOnTimelineResolver;
