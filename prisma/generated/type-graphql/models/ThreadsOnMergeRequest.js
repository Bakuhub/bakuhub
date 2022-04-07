"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnMergeRequest = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ThreadsOnMergeRequest = class ThreadsOnMergeRequest {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnMergeRequest.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnMergeRequest.prototype, "mergeRequestId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ThreadsOnMergeRequest.prototype, "assignedAt", void 0);
ThreadsOnMergeRequest = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ThreadsOnMergeRequest", {
        isAbstract: true
    })
], ThreadsOnMergeRequest);
exports.ThreadsOnMergeRequest = ThreadsOnMergeRequest;
