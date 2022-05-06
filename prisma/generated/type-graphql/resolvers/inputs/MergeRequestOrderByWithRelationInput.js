"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MergeRequestOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnMergeRequestOrderByRelationAggregateInput_1 = require("../inputs/ThreadsOnMergeRequestOrderByRelationAggregateInput");
const VisionOrderByWithRelationInput_1 = require("../inputs/VisionOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let MergeRequestOrderByWithRelationInput = class MergeRequestOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MergeRequestOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MergeRequestOrderByWithRelationInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MergeRequestOrderByWithRelationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MergeRequestOrderByWithRelationInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionOrderByWithRelationInput_1.VisionOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionOrderByWithRelationInput_1.VisionOrderByWithRelationInput)
], MergeRequestOrderByWithRelationInput.prototype, "vision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MergeRequestOrderByWithRelationInput.prototype, "visionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnMergeRequestOrderByRelationAggregateInput_1.ThreadsOnMergeRequestOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnMergeRequestOrderByRelationAggregateInput_1.ThreadsOnMergeRequestOrderByRelationAggregateInput)
], MergeRequestOrderByWithRelationInput.prototype, "threadsOnMergeRequest", void 0);
MergeRequestOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MergeRequestOrderByWithRelationInput", {
        isAbstract: true
    })
], MergeRequestOrderByWithRelationInput);
exports.MergeRequestOrderByWithRelationInput = MergeRequestOrderByWithRelationInput;
