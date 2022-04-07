"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnVisionMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ThreadsOnVisionMaxAggregate = class ThreadsOnVisionMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnVisionMaxAggregate.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnVisionMaxAggregate.prototype, "visionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ThreadsOnVisionMaxAggregate.prototype, "assignedAt", void 0);
ThreadsOnVisionMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ThreadsOnVisionMaxAggregate", {
        isAbstract: true
    })
], ThreadsOnVisionMaxAggregate);
exports.ThreadsOnVisionMaxAggregate = ThreadsOnVisionMaxAggregate;
