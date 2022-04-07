"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnTimelineCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ThreadsOnTimelineCreateManyInput = class ThreadsOnTimelineCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnTimelineCreateManyInput.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnTimelineCreateManyInput.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ThreadsOnTimelineCreateManyInput.prototype, "assignedAt", void 0);
ThreadsOnTimelineCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnTimelineCreateManyInput", {
        isAbstract: true
    })
], ThreadsOnTimelineCreateManyInput);
exports.ThreadsOnTimelineCreateManyInput = ThreadsOnTimelineCreateManyInput;
