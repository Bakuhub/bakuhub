"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnVisionCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ThreadsOnVisionCountAggregate = class ThreadsOnVisionCountAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ThreadsOnVisionCountAggregate.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ThreadsOnVisionCountAggregate.prototype, "visionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ThreadsOnVisionCountAggregate.prototype, "assignedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ThreadsOnVisionCountAggregate.prototype, "_all", void 0);
ThreadsOnVisionCountAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ThreadsOnVisionCountAggregate", {
        isAbstract: true
    })
], ThreadsOnVisionCountAggregate);
exports.ThreadsOnVisionCountAggregate = ThreadsOnVisionCountAggregate;
