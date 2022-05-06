"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnTimelineCreateOrConnectWithoutTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnTimelineCreateWithoutTimelineInput_1 = require("../inputs/ThreadsOnTimelineCreateWithoutTimelineInput");
const ThreadsOnTimelineWhereUniqueInput_1 = require("../inputs/ThreadsOnTimelineWhereUniqueInput");
let ThreadsOnTimelineCreateOrConnectWithoutTimelineInput = class ThreadsOnTimelineCreateOrConnectWithoutTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineWhereUniqueInput_1.ThreadsOnTimelineWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineWhereUniqueInput_1.ThreadsOnTimelineWhereUniqueInput)
], ThreadsOnTimelineCreateOrConnectWithoutTimelineInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineCreateWithoutTimelineInput_1.ThreadsOnTimelineCreateWithoutTimelineInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineCreateWithoutTimelineInput_1.ThreadsOnTimelineCreateWithoutTimelineInput)
], ThreadsOnTimelineCreateOrConnectWithoutTimelineInput.prototype, "create", void 0);
ThreadsOnTimelineCreateOrConnectWithoutTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnTimelineCreateOrConnectWithoutTimelineInput", {
        isAbstract: true
    })
], ThreadsOnTimelineCreateOrConnectWithoutTimelineInput);
exports.ThreadsOnTimelineCreateOrConnectWithoutTimelineInput = ThreadsOnTimelineCreateOrConnectWithoutTimelineInput;
