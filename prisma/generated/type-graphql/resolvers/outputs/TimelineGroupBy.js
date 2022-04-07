"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TimelineCountAggregate_1 = require("../outputs/TimelineCountAggregate");
const TimelineMaxAggregate_1 = require("../outputs/TimelineMaxAggregate");
const TimelineMinAggregate_1 = require("../outputs/TimelineMinAggregate");
let TimelineGroupBy = class TimelineGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TimelineGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TimelineGroupBy.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TimelineGroupBy.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TimelineGroupBy.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TimelineGroupBy.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineCountAggregate_1.TimelineCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineCountAggregate_1.TimelineCountAggregate)
], TimelineGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineMinAggregate_1.TimelineMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineMinAggregate_1.TimelineMinAggregate)
], TimelineGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineMaxAggregate_1.TimelineMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineMaxAggregate_1.TimelineMaxAggregate)
], TimelineGroupBy.prototype, "_max", void 0);
TimelineGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TimelineGroupBy", {
        isAbstract: true
    })
], TimelineGroupBy);
exports.TimelineGroupBy = TimelineGroupBy;
