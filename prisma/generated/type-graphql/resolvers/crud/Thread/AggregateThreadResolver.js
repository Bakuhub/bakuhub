"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateThreadResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateThreadArgs_1 = require("./args/AggregateThreadArgs");
const Thread_1 = require("../../../models/Thread");
const AggregateThread_1 = require("../../outputs/AggregateThread");
const helpers_1 = require("../../../helpers");
let AggregateThreadResolver = class AggregateThreadResolver {
    async aggregateThread(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).thread.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateThread_1.AggregateThread, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateThreadArgs_1.AggregateThreadArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateThreadResolver.prototype, "aggregateThread", null);
AggregateThreadResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Thread_1.Thread)
], AggregateThreadResolver);
exports.AggregateThreadResolver = AggregateThreadResolver;
