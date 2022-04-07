"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnTimelineCreateOrConnectWithoutThreadInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnTimelineCreateWithoutThreadInput_1 = require("../inputs/ThreadsOnTimelineCreateWithoutThreadInput");
const ThreadsOnTimelineWhereUniqueInput_1 = require("../inputs/ThreadsOnTimelineWhereUniqueInput");
let ThreadsOnTimelineCreateOrConnectWithoutThreadInput = class ThreadsOnTimelineCreateOrConnectWithoutThreadInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineWhereUniqueInput_1.ThreadsOnTimelineWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineWhereUniqueInput_1.ThreadsOnTimelineWhereUniqueInput)
], ThreadsOnTimelineCreateOrConnectWithoutThreadInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineCreateWithoutThreadInput_1.ThreadsOnTimelineCreateWithoutThreadInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineCreateWithoutThreadInput_1.ThreadsOnTimelineCreateWithoutThreadInput)
], ThreadsOnTimelineCreateOrConnectWithoutThreadInput.prototype, "create", void 0);
ThreadsOnTimelineCreateOrConnectWithoutThreadInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnTimelineCreateOrConnectWithoutThreadInput", {
        isAbstract: true
    })
], ThreadsOnTimelineCreateOrConnectWithoutThreadInput);
exports.ThreadsOnTimelineCreateOrConnectWithoutThreadInput = ThreadsOnTimelineCreateOrConnectWithoutThreadInput;
