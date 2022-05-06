"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSnapshotResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateSnapshotArgs_1 = require("./args/AggregateSnapshotArgs");
const Snapshot_1 = require("../../../models/Snapshot");
const AggregateSnapshot_1 = require("../../outputs/AggregateSnapshot");
const helpers_1 = require("../../../helpers");
let AggregateSnapshotResolver = class AggregateSnapshotResolver {
    async aggregateSnapshot(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).snapshot.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateSnapshot_1.AggregateSnapshot, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateSnapshotArgs_1.AggregateSnapshotArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateSnapshotResolver.prototype, "aggregateSnapshot", null);
AggregateSnapshotResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Snapshot_1.Snapshot)
], AggregateSnapshotResolver);
exports.AggregateSnapshotResolver = AggregateSnapshotResolver;
