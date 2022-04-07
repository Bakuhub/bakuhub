"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnapshotOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReferenceOrderByRelationAggregateInput_1 = require("../inputs/ReferenceOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let SnapshotOrderByWithRelationInput = class SnapshotOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SnapshotOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SnapshotOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SnapshotOrderByWithRelationInput.prototype, "versionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SnapshotOrderByWithRelationInput.prototype, "s3Url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SnapshotOrderByWithRelationInput.prototype, "sourceUrl", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SnapshotOrderByWithRelationInput.prototype, "caption", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReferenceOrderByRelationAggregateInput_1.ReferenceOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReferenceOrderByRelationAggregateInput_1.ReferenceOrderByRelationAggregateInput)
], SnapshotOrderByWithRelationInput.prototype, "references", void 0);
SnapshotOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SnapshotOrderByWithRelationInput", {
        isAbstract: true
    })
], SnapshotOrderByWithRelationInput);
exports.SnapshotOrderByWithRelationInput = SnapshotOrderByWithRelationInput;
