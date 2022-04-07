"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnTimelineUpdateManyWithWhereWithoutTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnTimelineScalarWhereInput_1 = require("../inputs/ThreadsOnTimelineScalarWhereInput");
const ThreadsOnTimelineUpdateManyMutationInput_1 = require("../inputs/ThreadsOnTimelineUpdateManyMutationInput");
let ThreadsOnTimelineUpdateManyWithWhereWithoutTimelineInput = class ThreadsOnTimelineUpdateManyWithWhereWithoutTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineScalarWhereInput_1.ThreadsOnTimelineScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineScalarWhereInput_1.ThreadsOnTimelineScalarWhereInput)
], ThreadsOnTimelineUpdateManyWithWhereWithoutTimelineInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineUpdateManyMutationInput_1.ThreadsOnTimelineUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineUpdateManyMutationInput_1.ThreadsOnTimelineUpdateManyMutationInput)
], ThreadsOnTimelineUpdateManyWithWhereWithoutTimelineInput.prototype, "data", void 0);
ThreadsOnTimelineUpdateManyWithWhereWithoutTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnTimelineUpdateManyWithWhereWithoutTimelineInput", {
        isAbstract: true
    })
], ThreadsOnTimelineUpdateManyWithWhereWithoutTimelineInput);
exports.ThreadsOnTimelineUpdateManyWithWhereWithoutTimelineInput = ThreadsOnTimelineUpdateManyWithWhereWithoutTimelineInput;
