"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnPremiseUpdateManyWithoutPremiseInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnPremiseCreateManyPremiseInputEnvelope_1 = require("../inputs/ThreadsOnPremiseCreateManyPremiseInputEnvelope");
const ThreadsOnPremiseCreateOrConnectWithoutPremiseInput_1 = require("../inputs/ThreadsOnPremiseCreateOrConnectWithoutPremiseInput");
const ThreadsOnPremiseCreateWithoutPremiseInput_1 = require("../inputs/ThreadsOnPremiseCreateWithoutPremiseInput");
const ThreadsOnPremiseScalarWhereInput_1 = require("../inputs/ThreadsOnPremiseScalarWhereInput");
const ThreadsOnPremiseUpdateManyWithWhereWithoutPremiseInput_1 = require("../inputs/ThreadsOnPremiseUpdateManyWithWhereWithoutPremiseInput");
const ThreadsOnPremiseUpdateWithWhereUniqueWithoutPremiseInput_1 = require("../inputs/ThreadsOnPremiseUpdateWithWhereUniqueWithoutPremiseInput");
const ThreadsOnPremiseUpsertWithWhereUniqueWithoutPremiseInput_1 = require("../inputs/ThreadsOnPremiseUpsertWithWhereUniqueWithoutPremiseInput");
const ThreadsOnPremiseWhereUniqueInput_1 = require("../inputs/ThreadsOnPremiseWhereUniqueInput");
let ThreadsOnPremiseUpdateManyWithoutPremiseInput = class ThreadsOnPremiseUpdateManyWithoutPremiseInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnPremiseCreateWithoutPremiseInput_1.ThreadsOnPremiseCreateWithoutPremiseInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnPremiseUpdateManyWithoutPremiseInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnPremiseCreateOrConnectWithoutPremiseInput_1.ThreadsOnPremiseCreateOrConnectWithoutPremiseInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnPremiseUpdateManyWithoutPremiseInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnPremiseUpsertWithWhereUniqueWithoutPremiseInput_1.ThreadsOnPremiseUpsertWithWhereUniqueWithoutPremiseInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnPremiseUpdateManyWithoutPremiseInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseCreateManyPremiseInputEnvelope_1.ThreadsOnPremiseCreateManyPremiseInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseCreateManyPremiseInputEnvelope_1.ThreadsOnPremiseCreateManyPremiseInputEnvelope)
], ThreadsOnPremiseUpdateManyWithoutPremiseInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnPremiseWhereUniqueInput_1.ThreadsOnPremiseWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnPremiseUpdateManyWithoutPremiseInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnPremiseWhereUniqueInput_1.ThreadsOnPremiseWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnPremiseUpdateManyWithoutPremiseInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnPremiseWhereUniqueInput_1.ThreadsOnPremiseWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnPremiseUpdateManyWithoutPremiseInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnPremiseWhereUniqueInput_1.ThreadsOnPremiseWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnPremiseUpdateManyWithoutPremiseInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnPremiseUpdateWithWhereUniqueWithoutPremiseInput_1.ThreadsOnPremiseUpdateWithWhereUniqueWithoutPremiseInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnPremiseUpdateManyWithoutPremiseInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnPremiseUpdateManyWithWhereWithoutPremiseInput_1.ThreadsOnPremiseUpdateManyWithWhereWithoutPremiseInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnPremiseUpdateManyWithoutPremiseInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnPremiseScalarWhereInput_1.ThreadsOnPremiseScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnPremiseUpdateManyWithoutPremiseInput.prototype, "deleteMany", void 0);
ThreadsOnPremiseUpdateManyWithoutPremiseInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnPremiseUpdateManyWithoutPremiseInput", {
        isAbstract: true
    })
], ThreadsOnPremiseUpdateManyWithoutPremiseInput);
exports.ThreadsOnPremiseUpdateManyWithoutPremiseInput = ThreadsOnPremiseUpdateManyWithoutPremiseInput;
