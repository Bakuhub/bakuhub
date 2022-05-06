"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnMergeRequestMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ThreadsOnMergeRequestMinAggregate = class ThreadsOnMergeRequestMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnMergeRequestMinAggregate.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnMergeRequestMinAggregate.prototype, "mergeRequestId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ThreadsOnMergeRequestMinAggregate.prototype, "assignedAt", void 0);
ThreadsOnMergeRequestMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ThreadsOnMergeRequestMinAggregate", {
        isAbstract: true
    })
], ThreadsOnMergeRequestMinAggregate);
exports.ThreadsOnMergeRequestMinAggregate = ThreadsOnMergeRequestMinAggregate;
