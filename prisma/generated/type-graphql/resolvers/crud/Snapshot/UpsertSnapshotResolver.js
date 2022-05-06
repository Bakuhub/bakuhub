"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertSnapshotResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertSnapshotArgs_1 = require("./args/UpsertSnapshotArgs");
const Snapshot_1 = require("../../../models/Snapshot");
const helpers_1 = require("../../../helpers");
let UpsertSnapshotResolver = class UpsertSnapshotResolver {
    async upsertSnapshot(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).snapshot.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Snapshot_1.Snapshot, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertSnapshotArgs_1.UpsertSnapshotArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertSnapshotResolver.prototype, "upsertSnapshot", null);
UpsertSnapshotResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Snapshot_1.Snapshot)
], UpsertSnapshotResolver);
exports.UpsertSnapshotResolver = UpsertSnapshotResolver;
