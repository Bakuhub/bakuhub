"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionCountAggregate_1 = require("../outputs/VisionCountAggregate");
const VisionMaxAggregate_1 = require("../outputs/VisionMaxAggregate");
const VisionMinAggregate_1 = require("../outputs/VisionMinAggregate");
let VisionGroupBy = class VisionGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VisionGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VisionGroupBy.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VisionGroupBy.prototype, "activityDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisionGroupBy.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VisionGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], VisionGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisionGroupBy.prototype, "referenceId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisionGroupBy.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisionGroupBy.prototype, "thumbnail", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VisionGroupBy.prototype, "premiseId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], VisionGroupBy.prototype, "draftMode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisionGroupBy.prototype, "prevVisionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCountAggregate_1.VisionCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionCountAggregate_1.VisionCountAggregate)
], VisionGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionMinAggregate_1.VisionMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionMinAggregate_1.VisionMinAggregate)
], VisionGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionMaxAggregate_1.VisionMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionMaxAggregate_1.VisionMaxAggregate)
], VisionGroupBy.prototype, "_max", void 0);
VisionGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("VisionGroupBy", {
        isAbstract: true
    })
], VisionGroupBy);
exports.VisionGroupBy = VisionGroupBy;
