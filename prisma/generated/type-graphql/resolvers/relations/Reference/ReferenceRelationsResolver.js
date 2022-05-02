"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenceRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Reference_1 = require("../../../models/Reference");
const Snapshot_1 = require("../../../models/Snapshot");
const Vision_1 = require("../../../models/Vision");
const ReferenceSnapshotsArgs_1 = require("./args/ReferenceSnapshotsArgs");
const ReferenceVisionArgs_1 = require("./args/ReferenceVisionArgs");
const helpers_1 = require("../../../helpers");
let ReferenceRelationsResolver = class ReferenceRelationsResolver {
    async snapshots(reference, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).reference.findUnique({
            where: {
                id: reference.id,
            },
        }).snapshots(args);
    }
    async vision(reference, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).reference.findUnique({
            where: {
                id: reference.id,
            },
        }).vision(args);
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Snapshot_1.Snapshot], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Reference_1.Reference, Object, ReferenceSnapshotsArgs_1.ReferenceSnapshotsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReferenceRelationsResolver.prototype, "snapshots", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Vision_1.Vision], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Reference_1.Reference, Object, ReferenceVisionArgs_1.ReferenceVisionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReferenceRelationsResolver.prototype, "vision", null);
ReferenceRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Reference_1.Reference)
], ReferenceRelationsResolver);
exports.ReferenceRelationsResolver = ReferenceRelationsResolver;
