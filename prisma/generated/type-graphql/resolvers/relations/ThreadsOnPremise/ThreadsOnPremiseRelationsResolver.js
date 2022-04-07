"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnPremiseRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Premise_1 = require("../../../models/Premise");
const Thread_1 = require("../../../models/Thread");
const ThreadsOnPremise_1 = require("../../../models/ThreadsOnPremise");
const helpers_1 = require("../../../helpers");
let ThreadsOnPremiseRelationsResolver = class ThreadsOnPremiseRelationsResolver {
    async thread(threadsOnPremise, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnPremise.findUnique({
            where: {
                threadId: threadsOnPremise.threadId,
            },
        }).thread({});
    }
    async premise(threadsOnPremise, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnPremise.findUnique({
            where: {
                threadId: threadsOnPremise.threadId,
            },
        }).premise({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Thread_1.Thread, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ThreadsOnPremise_1.ThreadsOnPremise, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadsOnPremiseRelationsResolver.prototype, "thread", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Premise_1.Premise, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ThreadsOnPremise_1.ThreadsOnPremise, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadsOnPremiseRelationsResolver.prototype, "premise", null);
ThreadsOnPremiseRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ThreadsOnPremise_1.ThreadsOnPremise)
], ThreadsOnPremiseRelationsResolver);
exports.ThreadsOnPremiseRelationsResolver = ThreadsOnPremiseRelationsResolver;
