"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnMergeRequestCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ThreadsOnMergeRequestCountAggregate = class ThreadsOnMergeRequestCountAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ThreadsOnMergeRequestCountAggregate.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ThreadsOnMergeRequestCountAggregate.prototype, "mergeRequestId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ThreadsOnMergeRequestCountAggregate.prototype, "assignedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ThreadsOnMergeRequestCountAggregate.prototype, "_all", void 0);
ThreadsOnMergeRequestCountAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ThreadsOnMergeRequestCountAggregate", {
        isAbstract: true
    })
], ThreadsOnMergeRequestCountAggregate);
exports.ThreadsOnMergeRequestCountAggregate = ThreadsOnMergeRequestCountAggregate;
