"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstTimelineResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstTimelineArgs_1 = require("./args/FindFirstTimelineArgs");
const Timeline_1 = require("../../../models/Timeline");
const helpers_1 = require("../../../helpers");
let FindFirstTimelineResolver = class FindFirstTimelineResolver {
    async findFirstTimeline(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).timeline.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Timeline_1.Timeline, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstTimelineArgs_1.FindFirstTimelineArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstTimelineResolver.prototype, "findFirstTimeline", null);
FindFirstTimelineResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Timeline_1.Timeline)
], FindFirstTimelineResolver);
exports.FindFirstTimelineResolver = FindFirstTimelineResolver;
