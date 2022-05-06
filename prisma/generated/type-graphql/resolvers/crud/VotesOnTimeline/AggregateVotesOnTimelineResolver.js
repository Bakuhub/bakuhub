"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateVotesOnTimelineResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateVotesOnTimelineArgs_1 = require("./args/AggregateVotesOnTimelineArgs");
const VotesOnTimeline_1 = require("../../../models/VotesOnTimeline");
const AggregateVotesOnTimeline_1 = require("../../outputs/AggregateVotesOnTimeline");
const helpers_1 = require("../../../helpers");
let AggregateVotesOnTimelineResolver = class AggregateVotesOnTimelineResolver {
    async aggregateVotesOnTimeline(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnTimeline.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateVotesOnTimeline_1.AggregateVotesOnTimeline, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateVotesOnTimelineArgs_1.AggregateVotesOnTimelineArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateVotesOnTimelineResolver.prototype, "aggregateVotesOnTimeline", null);
AggregateVotesOnTimelineResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => VotesOnTimeline_1.VotesOnTimeline)
], AggregateVotesOnTimelineResolver);
exports.AggregateVotesOnTimelineResolver = AggregateVotesOnTimelineResolver;
