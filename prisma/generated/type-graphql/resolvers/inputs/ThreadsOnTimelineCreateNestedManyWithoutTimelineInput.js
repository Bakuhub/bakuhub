"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnTimelineCreateNestedManyWithoutTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnTimelineCreateManyTimelineInputEnvelope_1 = require("../inputs/ThreadsOnTimelineCreateManyTimelineInputEnvelope");
const ThreadsOnTimelineCreateOrConnectWithoutTimelineInput_1 = require("../inputs/ThreadsOnTimelineCreateOrConnectWithoutTimelineInput");
const ThreadsOnTimelineCreateWithoutTimelineInput_1 = require("../inputs/ThreadsOnTimelineCreateWithoutTimelineInput");
const ThreadsOnTimelineWhereUniqueInput_1 = require("../inputs/ThreadsOnTimelineWhereUniqueInput");
let ThreadsOnTimelineCreateNestedManyWithoutTimelineInput = class ThreadsOnTimelineCreateNestedManyWithoutTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnTimelineCreateWithoutTimelineInput_1.ThreadsOnTimelineCreateWithoutTimelineInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnTimelineCreateNestedManyWithoutTimelineInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnTimelineCreateOrConnectWithoutTimelineInput_1.ThreadsOnTimelineCreateOrConnectWithoutTimelineInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnTimelineCreateNestedManyWithoutTimelineInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineCreateManyTimelineInputEnvelope_1.ThreadsOnTimelineCreateManyTimelineInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineCreateManyTimelineInputEnvelope_1.ThreadsOnTimelineCreateManyTimelineInputEnvelope)
], ThreadsOnTimelineCreateNestedManyWithoutTimelineInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnTimelineWhereUniqueInput_1.ThreadsOnTimelineWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnTimelineCreateNestedManyWithoutTimelineInput.prototype, "connect", void 0);
ThreadsOnTimelineCreateNestedManyWithoutTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnTimelineCreateNestedManyWithoutTimelineInput", {
        isAbstract: true
    })
], ThreadsOnTimelineCreateNestedManyWithoutTimelineInput);
exports.ThreadsOnTimelineCreateNestedManyWithoutTimelineInput = ThreadsOnTimelineCreateNestedManyWithoutTimelineInput;
