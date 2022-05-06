"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MergeRequestMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MergeRequestStatus_1 = require("../../enums/MergeRequestStatus");
let MergeRequestMaxAggregate = class MergeRequestMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MergeRequestMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MergeRequestMaxAggregate.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MergeRequestMaxAggregate.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestStatus_1.MergeRequestStatus, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MergeRequestMaxAggregate.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MergeRequestMaxAggregate.prototype, "visionId", void 0);
MergeRequestMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("MergeRequestMaxAggregate", {
        isAbstract: true
    })
], MergeRequestMaxAggregate);
exports.MergeRequestMaxAggregate = MergeRequestMaxAggregate;
