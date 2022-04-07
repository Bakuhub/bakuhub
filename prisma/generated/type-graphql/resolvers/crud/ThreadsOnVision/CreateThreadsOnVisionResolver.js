"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateThreadsOnVisionResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateThreadsOnVisionArgs_1 = require("./args/CreateThreadsOnVisionArgs");
const ThreadsOnVision_1 = require("../../../models/ThreadsOnVision");
const helpers_1 = require("../../../helpers");
let CreateThreadsOnVisionResolver = class CreateThreadsOnVisionResolver {
    async createThreadsOnVision(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnVision.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ThreadsOnVision_1.ThreadsOnVision, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateThreadsOnVisionArgs_1.CreateThreadsOnVisionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateThreadsOnVisionResolver.prototype, "createThreadsOnVision", null);
CreateThreadsOnVisionResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ThreadsOnVision_1.ThreadsOnVision)
], CreateThreadsOnVisionResolver);
exports.CreateThreadsOnVisionResolver = CreateThreadsOnVisionResolver;
