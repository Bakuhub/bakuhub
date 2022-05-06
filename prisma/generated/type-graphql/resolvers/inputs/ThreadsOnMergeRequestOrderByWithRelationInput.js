"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnMergeRequestOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MergeRequestOrderByWithRelationInput_1 = require("../inputs/MergeRequestOrderByWithRelationInput");
const ThreadOrderByWithRelationInput_1 = require("../inputs/ThreadOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ThreadsOnMergeRequestOrderByWithRelationInput = class ThreadsOnMergeRequestOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadOrderByWithRelationInput_1.ThreadOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadOrderByWithRelationInput_1.ThreadOrderByWithRelationInput)
], ThreadsOnMergeRequestOrderByWithRelationInput.prototype, "thread", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnMergeRequestOrderByWithRelationInput.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestOrderByWithRelationInput_1.MergeRequestOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MergeRequestOrderByWithRelationInput_1.MergeRequestOrderByWithRelationInput)
], ThreadsOnMergeRequestOrderByWithRelationInput.prototype, "mergeRequest", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnMergeRequestOrderByWithRelationInput.prototype, "mergeRequestId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnMergeRequestOrderByWithRelationInput.prototype, "assignedAt", void 0);
ThreadsOnMergeRequestOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnMergeRequestOrderByWithRelationInput", {
        isAbstract: true
    })
], ThreadsOnMergeRequestOrderByWithRelationInput);
exports.ThreadsOnMergeRequestOrderByWithRelationInput = ThreadsOnMergeRequestOrderByWithRelationInput;
