"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnTimelineCreateManyTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ThreadsOnTimelineCreateManyTimelineInput = class ThreadsOnTimelineCreateManyTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnTimelineCreateManyTimelineInput.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ThreadsOnTimelineCreateManyTimelineInput.prototype, "assignedAt", void 0);
ThreadsOnTimelineCreateManyTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnTimelineCreateManyTimelineInput", {
        isAbstract: true
    })
], ThreadsOnTimelineCreateManyTimelineInput);
exports.ThreadsOnTimelineCreateManyTimelineInput = ThreadsOnTimelineCreateManyTimelineInput;
