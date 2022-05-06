"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnapshotGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SnapshotCountAggregate_1 = require("../outputs/SnapshotCountAggregate");
const SnapshotMaxAggregate_1 = require("../outputs/SnapshotMaxAggregate");
const SnapshotMinAggregate_1 = require("../outputs/SnapshotMinAggregate");
let SnapshotGroupBy = class SnapshotGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SnapshotGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], SnapshotGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], SnapshotGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SnapshotGroupBy.prototype, "versionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SnapshotGroupBy.prototype, "s3Url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SnapshotGroupBy.prototype, "sourceUrl", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SnapshotGroupBy.prototype, "caption", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SnapshotCountAggregate_1.SnapshotCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SnapshotCountAggregate_1.SnapshotCountAggregate)
], SnapshotGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SnapshotMinAggregate_1.SnapshotMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SnapshotMinAggregate_1.SnapshotMinAggregate)
], SnapshotGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SnapshotMaxAggregate_1.SnapshotMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SnapshotMaxAggregate_1.SnapshotMaxAggregate)
], SnapshotGroupBy.prototype, "_max", void 0);
SnapshotGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("SnapshotGroupBy", {
        isAbstract: true
    })
], SnapshotGroupBy);
exports.SnapshotGroupBy = SnapshotGroupBy;
