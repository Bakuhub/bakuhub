"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByThreadResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByThreadArgs_1 = require("./args/GroupByThreadArgs");
const Thread_1 = require("../../../models/Thread");
const ThreadGroupBy_1 = require("../../outputs/ThreadGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByThreadResolver = class GroupByThreadResolver {
    async groupByThread(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).thread.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ThreadGroupBy_1.ThreadGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByThreadArgs_1.GroupByThreadArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByThreadResolver.prototype, "groupByThread", null);
GroupByThreadResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Thread_1.Thread)
], GroupByThreadResolver);
exports.GroupByThreadResolver = GroupByThreadResolver;
