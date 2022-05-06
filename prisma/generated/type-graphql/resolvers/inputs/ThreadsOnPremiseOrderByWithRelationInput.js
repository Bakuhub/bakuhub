"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnPremiseOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremiseOrderByWithRelationInput_1 = require("../inputs/PremiseOrderByWithRelationInput");
const ThreadOrderByWithRelationInput_1 = require("../inputs/ThreadOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ThreadsOnPremiseOrderByWithRelationInput = class ThreadsOnPremiseOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadOrderByWithRelationInput_1.ThreadOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadOrderByWithRelationInput_1.ThreadOrderByWithRelationInput)
], ThreadsOnPremiseOrderByWithRelationInput.prototype, "thread", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnPremiseOrderByWithRelationInput.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseOrderByWithRelationInput_1.PremiseOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseOrderByWithRelationInput_1.PremiseOrderByWithRelationInput)
], ThreadsOnPremiseOrderByWithRelationInput.prototype, "premise", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnPremiseOrderByWithRelationInput.prototype, "premiseId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnPremiseOrderByWithRelationInput.prototype, "assignedAt", void 0);
ThreadsOnPremiseOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnPremiseOrderByWithRelationInput", {
        isAbstract: true
    })
], ThreadsOnPremiseOrderByWithRelationInput);
exports.ThreadsOnPremiseOrderByWithRelationInput = ThreadsOnPremiseOrderByWithRelationInput;
