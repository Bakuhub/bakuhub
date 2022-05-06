"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnMergeRequestCreateManyMergeRequestInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnMergeRequestCreateManyMergeRequestInput_1 = require("../inputs/ThreadsOnMergeRequestCreateManyMergeRequestInput");
let ThreadsOnMergeRequestCreateManyMergeRequestInputEnvelope = class ThreadsOnMergeRequestCreateManyMergeRequestInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnMergeRequestCreateManyMergeRequestInput_1.ThreadsOnMergeRequestCreateManyMergeRequestInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnMergeRequestCreateManyMergeRequestInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ThreadsOnMergeRequestCreateManyMergeRequestInputEnvelope.prototype, "skipDuplicates", void 0);
ThreadsOnMergeRequestCreateManyMergeRequestInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnMergeRequestCreateManyMergeRequestInputEnvelope", {
        isAbstract: true
    })
], ThreadsOnMergeRequestCreateManyMergeRequestInputEnvelope);
exports.ThreadsOnMergeRequestCreateManyMergeRequestInputEnvelope = ThreadsOnMergeRequestCreateManyMergeRequestInputEnvelope;
