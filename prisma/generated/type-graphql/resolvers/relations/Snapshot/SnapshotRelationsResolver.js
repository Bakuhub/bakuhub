"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnapshotRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Reference_1 = require("../../../models/Reference");
const Snapshot_1 = require("../../../models/Snapshot");
const SnapshotReferencesArgs_1 = require("./args/SnapshotReferencesArgs");
const helpers_1 = require("../../../helpers");
let SnapshotRelationsResolver = class SnapshotRelationsResolver {
    async references(snapshot, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).snapshot.findUnique({
            where: {
                id: snapshot.id,
            },
        }).references(args);
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Reference_1.Reference], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Snapshot_1.Snapshot, Object, SnapshotReferencesArgs_1.SnapshotReferencesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SnapshotRelationsResolver.prototype, "references", null);
SnapshotRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Snapshot_1.Snapshot)
], SnapshotRelationsResolver);
exports.SnapshotRelationsResolver = SnapshotRelationsResolver;
