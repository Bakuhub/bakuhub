"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnVisionMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ThreadsOnVisionMinAggregate = class ThreadsOnVisionMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnVisionMinAggregate.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnVisionMinAggregate.prototype, "visionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ThreadsOnVisionMinAggregate.prototype, "assignedAt", void 0);
ThreadsOnVisionMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ThreadsOnVisionMinAggregate", {
        isAbstract: true
    })
], ThreadsOnVisionMinAggregate);
exports.ThreadsOnVisionMinAggregate = ThreadsOnVisionMinAggregate;
