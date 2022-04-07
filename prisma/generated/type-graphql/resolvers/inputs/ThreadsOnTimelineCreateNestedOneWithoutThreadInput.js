"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnTimelineCreateNestedOneWithoutThreadInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnTimelineCreateOrConnectWithoutThreadInput_1 = require("../inputs/ThreadsOnTimelineCreateOrConnectWithoutThreadInput");
const ThreadsOnTimelineCreateWithoutThreadInput_1 = require("../inputs/ThreadsOnTimelineCreateWithoutThreadInput");
const ThreadsOnTimelineWhereUniqueInput_1 = require("../inputs/ThreadsOnTimelineWhereUniqueInput");
let ThreadsOnTimelineCreateNestedOneWithoutThreadInput = class ThreadsOnTimelineCreateNestedOneWithoutThreadInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineCreateWithoutThreadInput_1.ThreadsOnTimelineCreateWithoutThreadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineCreateWithoutThreadInput_1.ThreadsOnTimelineCreateWithoutThreadInput)
], ThreadsOnTimelineCreateNestedOneWithoutThreadInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineCreateOrConnectWithoutThreadInput_1.ThreadsOnTimelineCreateOrConnectWithoutThreadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineCreateOrConnectWithoutThreadInput_1.ThreadsOnTimelineCreateOrConnectWithoutThreadInput)
], ThreadsOnTimelineCreateNestedOneWithoutThreadInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineWhereUniqueInput_1.ThreadsOnTimelineWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineWhereUniqueInput_1.ThreadsOnTimelineWhereUniqueInput)
], ThreadsOnTimelineCreateNestedOneWithoutThreadInput.prototype, "connect", void 0);
ThreadsOnTimelineCreateNestedOneWithoutThreadInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnTimelineCreateNestedOneWithoutThreadInput", {
        isAbstract: true
    })
], ThreadsOnTimelineCreateNestedOneWithoutThreadInput);
exports.ThreadsOnTimelineCreateNestedOneWithoutThreadInput = ThreadsOnTimelineCreateNestedOneWithoutThreadInput;
