"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstVotesOnTimelineResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstVotesOnTimelineArgs_1 = require("./args/FindFirstVotesOnTimelineArgs");
const VotesOnTimeline_1 = require("../../../models/VotesOnTimeline");
const helpers_1 = require("../../../helpers");
let FindFirstVotesOnTimelineResolver = class FindFirstVotesOnTimelineResolver {
    async findFirstVotesOnTimeline(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnTimeline.findFirst({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstVotesOnTimelineArgs_1.FindFirstVotesOnTimelineArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstVotesOnTimelineResolver.prototype, "findFirstVotesOnTimeline", null);
FindFirstVotesOnTimelineResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => VotesOnTimeline_1.VotesOnTimeline)
], FindFirstVotesOnTimelineResolver);
exports.FindFirstVotesOnTimelineResolver = FindFirstVotesOnTimelineResolver;
