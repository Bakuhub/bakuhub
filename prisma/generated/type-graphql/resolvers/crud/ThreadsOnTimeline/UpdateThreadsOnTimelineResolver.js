"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateThreadsOnTimelineResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateThreadsOnTimelineArgs_1 = require("./args/UpdateThreadsOnTimelineArgs");
const ThreadsOnTimeline_1 = require("../../../models/ThreadsOnTimeline");
const helpers_1 = require("../../../helpers");
let UpdateThreadsOnTimelineResolver = class UpdateThreadsOnTimelineResolver {
    async updateThreadsOnTimeline(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnTimeline.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ThreadsOnTimeline_1.ThreadsOnTimeline, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateThreadsOnTimelineArgs_1.UpdateThreadsOnTimelineArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateThreadsOnTimelineResolver.prototype, "updateThreadsOnTimeline", null);
UpdateThreadsOnTimelineResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ThreadsOnTimeline_1.ThreadsOnTimeline)
], UpdateThreadsOnTimelineResolver);
exports.UpdateThreadsOnTimelineResolver = UpdateThreadsOnTimelineResolver;
