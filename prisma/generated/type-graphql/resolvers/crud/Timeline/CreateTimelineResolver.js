"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTimelineResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateTimelineArgs_1 = require("./args/CreateTimelineArgs");
const Timeline_1 = require("../../../models/Timeline");
const helpers_1 = require("../../../helpers");
let CreateTimelineResolver = class CreateTimelineResolver {
    async createTimeline(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).timeline.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Timeline_1.Timeline, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateTimelineArgs_1.CreateTimelineArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateTimelineResolver.prototype, "createTimeline", null);
CreateTimelineResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Timeline_1.Timeline)
], CreateTimelineResolver);
exports.CreateTimelineResolver = CreateTimelineResolver;
