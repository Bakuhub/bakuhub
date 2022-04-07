"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnMergeRequestMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ThreadsOnMergeRequestMaxAggregate = class ThreadsOnMergeRequestMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnMergeRequestMaxAggregate.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnMergeRequestMaxAggregate.prototype, "mergeRequestId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ThreadsOnMergeRequestMaxAggregate.prototype, "assignedAt", void 0);
ThreadsOnMergeRequestMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ThreadsOnMergeRequestMaxAggregate", {
        isAbstract: true
    })
], ThreadsOnMergeRequestMaxAggregate);
exports.ThreadsOnMergeRequestMaxAggregate = ThreadsOnMergeRequestMaxAggregate;
