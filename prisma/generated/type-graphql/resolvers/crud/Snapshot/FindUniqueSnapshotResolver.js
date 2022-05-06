"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueSnapshotResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueSnapshotArgs_1 = require("./args/FindUniqueSnapshotArgs");
const Snapshot_1 = require("../../../models/Snapshot");
const helpers_1 = require("../../../helpers");
let FindUniqueSnapshotResolver = class FindUniqueSnapshotResolver {
    async snapshot(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).snapshot.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Snapshot_1.Snapshot, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueSnapshotArgs_1.FindUniqueSnapshotArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueSnapshotResolver.prototype, "snapshot", null);
FindUniqueSnapshotResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Snapshot_1.Snapshot)
], FindUniqueSnapshotResolver);
exports.FindUniqueSnapshotResolver = FindUniqueSnapshotResolver;
