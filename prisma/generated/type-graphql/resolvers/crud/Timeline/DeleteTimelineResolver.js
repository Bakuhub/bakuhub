"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTimelineResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteTimelineArgs_1 = require("./args/DeleteTimelineArgs");
const Timeline_1 = require("../../../models/Timeline");
const helpers_1 = require("../../../helpers");
let DeleteTimelineResolver = class DeleteTimelineResolver {
    async deleteTimeline(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).timeline.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Timeline_1.Timeline, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteTimelineArgs_1.DeleteTimelineArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteTimelineResolver.prototype, "deleteTimeline", null);
DeleteTimelineResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Timeline_1.Timeline)
], DeleteTimelineResolver);
exports.DeleteTimelineResolver = DeleteTimelineResolver;
