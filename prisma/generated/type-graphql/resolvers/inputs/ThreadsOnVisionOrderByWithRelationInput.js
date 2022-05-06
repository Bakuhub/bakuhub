"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnVisionOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadOrderByWithRelationInput_1 = require("../inputs/ThreadOrderByWithRelationInput");
const VisionOrderByWithRelationInput_1 = require("../inputs/VisionOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ThreadsOnVisionOrderByWithRelationInput = class ThreadsOnVisionOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadOrderByWithRelationInput_1.ThreadOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadOrderByWithRelationInput_1.ThreadOrderByWithRelationInput)
], ThreadsOnVisionOrderByWithRelationInput.prototype, "thread", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnVisionOrderByWithRelationInput.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionOrderByWithRelationInput_1.VisionOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionOrderByWithRelationInput_1.VisionOrderByWithRelationInput)
], ThreadsOnVisionOrderByWithRelationInput.prototype, "vision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnVisionOrderByWithRelationInput.prototype, "visionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnVisionOrderByWithRelationInput.prototype, "assignedAt", void 0);
ThreadsOnVisionOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnVisionOrderByWithRelationInput", {
        isAbstract: true
    })
], ThreadsOnVisionOrderByWithRelationInput);
exports.ThreadsOnVisionOrderByWithRelationInput = ThreadsOnVisionOrderByWithRelationInput;
