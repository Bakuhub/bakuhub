"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnMergeRequestCreateManyMergeRequestInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ThreadsOnMergeRequestCreateManyMergeRequestInput = class ThreadsOnMergeRequestCreateManyMergeRequestInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnMergeRequestCreateManyMergeRequestInput.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ThreadsOnMergeRequestCreateManyMergeRequestInput.prototype, "assignedAt", void 0);
ThreadsOnMergeRequestCreateManyMergeRequestInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnMergeRequestCreateManyMergeRequestInput", {
        isAbstract: true
    })
], ThreadsOnMergeRequestCreateManyMergeRequestInput);
exports.ThreadsOnMergeRequestCreateManyMergeRequestInput = ThreadsOnMergeRequestCreateManyMergeRequestInput;
