"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueVotesOnTimelineResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueVotesOnTimelineArgs_1 = require("./args/FindUniqueVotesOnTimelineArgs");
const VotesOnTimeline_1 = require("../../../models/VotesOnTimeline");
const helpers_1 = require("../../../helpers");
let FindUniqueVotesOnTimelineResolver = class FindUniqueVotesOnTimelineResolver {
    async votesOnTimeline(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnTimeline.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => VotesOnTimeline_1.VotesOnTimeline, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueVotesOnTimelineArgs_1.FindUniqueVotesOnTimelineArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueVotesOnTimelineResolver.prototype, "votesOnTimeline", null);
FindUniqueVotesOnTimelineResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => VotesOnTimeline_1.VotesOnTimeline)
], FindUniqueVotesOnTimelineResolver);
exports.FindUniqueVotesOnTimelineResolver = FindUniqueVotesOnTimelineResolver;
