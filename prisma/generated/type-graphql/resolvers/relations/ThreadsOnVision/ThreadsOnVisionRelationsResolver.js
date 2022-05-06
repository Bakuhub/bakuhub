"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnVisionRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Thread_1 = require("../../../models/Thread");
const ThreadsOnVision_1 = require("../../../models/ThreadsOnVision");
const Vision_1 = require("../../../models/Vision");
const helpers_1 = require("../../../helpers");
let ThreadsOnVisionRelationsResolver = class ThreadsOnVisionRelationsResolver {
    async thread(threadsOnVision, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnVision.findUnique({
            where: {
                threadId: threadsOnVision.threadId,
            },
        }).thread({});
    }
    async vision(threadsOnVision, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnVision.findUnique({
            where: {
                threadId: threadsOnVision.threadId,
            },
        }).vision({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Thread_1.Thread, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ThreadsOnVision_1.ThreadsOnVision, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadsOnVisionRelationsResolver.prototype, "thread", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Vision_1.Vision, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ThreadsOnVision_1.ThreadsOnVision, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadsOnVisionRelationsResolver.prototype, "vision", null);
ThreadsOnVisionRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ThreadsOnVision_1.ThreadsOnVision)
], ThreadsOnVisionRelationsResolver);
exports.ThreadsOnVisionRelationsResolver = ThreadsOnVisionRelationsResolver;
