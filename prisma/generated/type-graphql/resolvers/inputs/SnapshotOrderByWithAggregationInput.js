"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnapshotOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SnapshotCountOrderByAggregateInput_1 = require("../inputs/SnapshotCountOrderByAggregateInput");
const SnapshotMaxOrderByAggregateInput_1 = require("../inputs/SnapshotMaxOrderByAggregateInput");
const SnapshotMinOrderByAggregateInput_1 = require("../inputs/SnapshotMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let SnapshotOrderByWithAggregationInput = class SnapshotOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SnapshotOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SnapshotOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SnapshotOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SnapshotOrderByWithAggregationInput.prototype, "versionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SnapshotOrderByWithAggregationInput.prototype, "s3Url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SnapshotOrderByWithAggregationInput.prototype, "sourceUrl", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SnapshotOrderByWithAggregationInput.prototype, "caption", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SnapshotCountOrderByAggregateInput_1.SnapshotCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SnapshotCountOrderByAggregateInput_1.SnapshotCountOrderByAggregateInput)
], SnapshotOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SnapshotMaxOrderByAggregateInput_1.SnapshotMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SnapshotMaxOrderByAggregateInput_1.SnapshotMaxOrderByAggregateInput)
], SnapshotOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SnapshotMinOrderByAggregateInput_1.SnapshotMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SnapshotMinOrderByAggregateInput_1.SnapshotMinOrderByAggregateInput)
], SnapshotOrderByWithAggregationInput.prototype, "_min", void 0);
SnapshotOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SnapshotOrderByWithAggregationInput", {
        isAbstract: true
    })
], SnapshotOrderByWithAggregationInput);
exports.SnapshotOrderByWithAggregationInput = SnapshotOrderByWithAggregationInput;
