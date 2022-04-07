"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupBySnapshotResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupBySnapshotArgs_1 = require("./args/GroupBySnapshotArgs");
const Snapshot_1 = require("../../../models/Snapshot");
const SnapshotGroupBy_1 = require("../../outputs/SnapshotGroupBy");
const helpers_1 = require("../../../helpers");
let GroupBySnapshotResolver = class GroupBySnapshotResolver {
    async groupBySnapshot(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).snapshot.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [SnapshotGroupBy_1.SnapshotGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupBySnapshotArgs_1.GroupBySnapshotArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupBySnapshotResolver.prototype, "groupBySnapshot", null);
GroupBySnapshotResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Snapshot_1.Snapshot)
], GroupBySnapshotResolver);
exports.GroupBySnapshotResolver = GroupBySnapshotResolver;
