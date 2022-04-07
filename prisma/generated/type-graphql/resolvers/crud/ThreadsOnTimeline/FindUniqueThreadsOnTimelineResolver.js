"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueThreadsOnTimelineResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueThreadsOnTimelineArgs_1 = require("./args/FindUniqueThreadsOnTimelineArgs");
const ThreadsOnTimeline_1 = require("../../../models/ThreadsOnTimeline");
const helpers_1 = require("../../../helpers");
let FindUniqueThreadsOnTimelineResolver = class FindUniqueThreadsOnTimelineResolver {
    async threadsOnTimeline(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnTimeline.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => ThreadsOnTimeline_1.ThreadsOnTimeline, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueThreadsOnTimelineArgs_1.FindUniqueThreadsOnTimelineArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueThreadsOnTimelineResolver.prototype, "threadsOnTimeline", null);
FindUniqueThreadsOnTimelineResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ThreadsOnTimeline_1.ThreadsOnTimeline)
], FindUniqueThreadsOnTimelineResolver);
exports.FindUniqueThreadsOnTimelineResolver = FindUniqueThreadsOnTimelineResolver;
