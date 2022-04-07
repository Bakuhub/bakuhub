"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnTimelineThreadIdTimelineIdCompoundUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ThreadsOnTimelineThreadIdTimelineIdCompoundUniqueInput = class ThreadsOnTimelineThreadIdTimelineIdCompoundUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnTimelineThreadIdTimelineIdCompoundUniqueInput.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnTimelineThreadIdTimelineIdCompoundUniqueInput.prototype, "timelineId", void 0);
ThreadsOnTimelineThreadIdTimelineIdCompoundUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnTimelineThreadIdTimelineIdCompoundUniqueInput", {
        isAbstract: true
    })
], ThreadsOnTimelineThreadIdTimelineIdCompoundUniqueInput);
exports.ThreadsOnTimelineThreadIdTimelineIdCompoundUniqueInput = ThreadsOnTimelineThreadIdTimelineIdCompoundUniqueInput;
