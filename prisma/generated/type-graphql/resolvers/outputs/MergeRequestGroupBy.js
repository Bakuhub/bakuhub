"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MergeRequestGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MergeRequestCountAggregate_1 = require("../outputs/MergeRequestCountAggregate");
const MergeRequestMaxAggregate_1 = require("../outputs/MergeRequestMaxAggregate");
const MergeRequestMinAggregate_1 = require("../outputs/MergeRequestMinAggregate");
const MergeRequestStatus_1 = require("../../enums/MergeRequestStatus");
let MergeRequestGroupBy = class MergeRequestGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MergeRequestGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MergeRequestGroupBy.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MergeRequestGroupBy.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestStatus_1.MergeRequestStatus, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MergeRequestGroupBy.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MergeRequestGroupBy.prototype, "visionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestCountAggregate_1.MergeRequestCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MergeRequestCountAggregate_1.MergeRequestCountAggregate)
], MergeRequestGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestMinAggregate_1.MergeRequestMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MergeRequestMinAggregate_1.MergeRequestMinAggregate)
], MergeRequestGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestMaxAggregate_1.MergeRequestMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MergeRequestMaxAggregate_1.MergeRequestMaxAggregate)
], MergeRequestGroupBy.prototype, "_max", void 0);
MergeRequestGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("MergeRequestGroupBy", {
        isAbstract: true
    })
], MergeRequestGroupBy);
exports.MergeRequestGroupBy = MergeRequestGroupBy;
