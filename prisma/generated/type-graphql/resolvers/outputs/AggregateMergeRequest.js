"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateMergeRequest = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MergeRequestCountAggregate_1 = require("../outputs/MergeRequestCountAggregate");
const MergeRequestMaxAggregate_1 = require("../outputs/MergeRequestMaxAggregate");
const MergeRequestMinAggregate_1 = require("../outputs/MergeRequestMinAggregate");
let AggregateMergeRequest = class AggregateMergeRequest {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestCountAggregate_1.MergeRequestCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MergeRequestCountAggregate_1.MergeRequestCountAggregate)
], AggregateMergeRequest.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestMinAggregate_1.MergeRequestMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MergeRequestMinAggregate_1.MergeRequestMinAggregate)
], AggregateMergeRequest.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestMaxAggregate_1.MergeRequestMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MergeRequestMaxAggregate_1.MergeRequestMaxAggregate)
], AggregateMergeRequest.prototype, "_max", void 0);
AggregateMergeRequest = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateMergeRequest", {
        isAbstract: true
    })
], AggregateMergeRequest);
exports.AggregateMergeRequest = AggregateMergeRequest;
