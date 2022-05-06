"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManySnapshotResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManySnapshotArgs_1 = require("./args/FindManySnapshotArgs");
const Snapshot_1 = require("../../../models/Snapshot");
const helpers_1 = require("../../../helpers");
let FindManySnapshotResolver = class FindManySnapshotResolver {
    async snapshots(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).snapshot.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Snapshot_1.Snapshot], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManySnapshotArgs_1.FindManySnapshotArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManySnapshotResolver.prototype, "snapshots", null);
FindManySnapshotResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Snapshot_1.Snapshot)
], FindManySnapshotResolver);
exports.FindManySnapshotResolver = FindManySnapshotResolver;
