"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionCountOrderByAggregateInput_1 = require("../inputs/VisionCountOrderByAggregateInput");
const VisionMaxOrderByAggregateInput_1 = require("../inputs/VisionMaxOrderByAggregateInput");
const VisionMinOrderByAggregateInput_1 = require("../inputs/VisionMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let VisionOrderByWithAggregationInput = class VisionOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisionOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisionOrderByWithAggregationInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisionOrderByWithAggregationInput.prototype, "activityDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisionOrderByWithAggregationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisionOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisionOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisionOrderByWithAggregationInput.prototype, "referenceId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisionOrderByWithAggregationInput.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisionOrderByWithAggregationInput.prototype, "thumbnail", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisionOrderByWithAggregationInput.prototype, "premiseId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisionOrderByWithAggregationInput.prototype, "draftMode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisionOrderByWithAggregationInput.prototype, "prevVisionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCountOrderByAggregateInput_1.VisionCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionCountOrderByAggregateInput_1.VisionCountOrderByAggregateInput)
], VisionOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionMaxOrderByAggregateInput_1.VisionMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionMaxOrderByAggregateInput_1.VisionMaxOrderByAggregateInput)
], VisionOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionMinOrderByAggregateInput_1.VisionMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionMinOrderByAggregateInput_1.VisionMinOrderByAggregateInput)
], VisionOrderByWithAggregationInput.prototype, "_min", void 0);
VisionOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionOrderByWithAggregationInput", {
        isAbstract: true
    })
], VisionOrderByWithAggregationInput);
exports.VisionOrderByWithAggregationInput = VisionOrderByWithAggregationInput;
