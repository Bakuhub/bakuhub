"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertVotesOnTimelineResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertVotesOnTimelineArgs_1 = require("./args/UpsertVotesOnTimelineArgs");
const VotesOnTimeline_1 = require("../../../models/VotesOnTimeline");
const helpers_1 = require("../../../helpers");
let UpsertVotesOnTimelineResolver = class UpsertVotesOnTimelineResolver {
    async upsertVotesOnTimeline(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnTimeline.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => VotesOnTimeline_1.VotesOnTimeline, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertVotesOnTimelineArgs_1.UpsertVotesOnTimelineArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertVotesOnTimelineResolver.prototype, "upsertVotesOnTimeline", null);
UpsertVotesOnTimelineResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => VotesOnTimeline_1.VotesOnTimeline)
], UpsertVotesOnTimelineResolver);
exports.UpsertVotesOnTimelineResolver = UpsertVotesOnTimelineResolver;
