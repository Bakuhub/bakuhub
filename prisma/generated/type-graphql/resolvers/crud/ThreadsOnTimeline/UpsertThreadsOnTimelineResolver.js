"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertThreadsOnTimelineResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertThreadsOnTimelineArgs_1 = require("./args/UpsertThreadsOnTimelineArgs");
const ThreadsOnTimeline_1 = require("../../../models/ThreadsOnTimeline");
const helpers_1 = require("../../../helpers");
let UpsertThreadsOnTimelineResolver = class UpsertThreadsOnTimelineResolver {
    async upsertThreadsOnTimeline(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnTimeline.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ThreadsOnTimeline_1.ThreadsOnTimeline, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertThreadsOnTimelineArgs_1.UpsertThreadsOnTimelineArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertThreadsOnTimelineResolver.prototype, "upsertThreadsOnTimeline", null);
UpsertThreadsOnTimelineResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ThreadsOnTimeline_1.ThreadsOnTimeline)
], UpsertThreadsOnTimelineResolver);
exports.UpsertThreadsOnTimelineResolver = UpsertThreadsOnTimelineResolver;
