"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnVisionOrderByRelationAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ThreadsOnVisionOrderByRelationAggregateInput = class ThreadsOnVisionOrderByRelationAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnVisionOrderByRelationAggregateInput.prototype, "_count", void 0);
ThreadsOnVisionOrderByRelationAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnVisionOrderByRelationAggregateInput", {
        isAbstract: true
    })
], ThreadsOnVisionOrderByRelationAggregateInput);
exports.ThreadsOnVisionOrderByRelationAggregateInput = ThreadsOnVisionOrderByRelationAggregateInput;
