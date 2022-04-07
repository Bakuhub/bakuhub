"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timeline = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TimelineCount_1 = require("../resolvers/outputs/TimelineCount");
let Timeline = class Timeline {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Timeline.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Timeline.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Timeline.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Timeline.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Timeline.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineCount_1.TimelineCount, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineCount_1.TimelineCount)
], Timeline.prototype, "_count", void 0);
Timeline = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Timeline", {
        isAbstract: true
    })
], Timeline);
exports.Timeline = Timeline;
