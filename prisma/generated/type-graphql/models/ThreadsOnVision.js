"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnVision = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ThreadsOnVision = class ThreadsOnVision {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnVision.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnVision.prototype, "visionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ThreadsOnVision.prototype, "assignedAt", void 0);
ThreadsOnVision = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ThreadsOnVision", {
        isAbstract: true
    })
], ThreadsOnVision);
exports.ThreadsOnVision = ThreadsOnVision;
