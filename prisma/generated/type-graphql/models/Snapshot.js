"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Snapshot = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SnapshotCount_1 = require("../resolvers/outputs/SnapshotCount");
let Snapshot = class Snapshot {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Snapshot.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], Snapshot.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], Snapshot.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Snapshot.prototype, "versionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Snapshot.prototype, "s3Url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Snapshot.prototype, "sourceUrl", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Snapshot.prototype, "caption", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SnapshotCount_1.SnapshotCount, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SnapshotCount_1.SnapshotCount)
], Snapshot.prototype, "_count", void 0);
Snapshot = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Snapshot", {
        isAbstract: true
    })
], Snapshot);
exports.Snapshot = Snapshot;
