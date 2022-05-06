"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsOnTimelinesUpdateManyWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionsOnTimelinesCreateManyUserInputEnvelope_1 = require("../inputs/SubscriptionsOnTimelinesCreateManyUserInputEnvelope");
const SubscriptionsOnTimelinesCreateOrConnectWithoutUserInput_1 = require("../inputs/SubscriptionsOnTimelinesCreateOrConnectWithoutUserInput");
const SubscriptionsOnTimelinesCreateWithoutUserInput_1 = require("../inputs/SubscriptionsOnTimelinesCreateWithoutUserInput");
const SubscriptionsOnTimelinesScalarWhereInput_1 = require("../inputs/SubscriptionsOnTimelinesScalarWhereInput");
const SubscriptionsOnTimelinesUpdateManyWithWhereWithoutUserInput_1 = require("../inputs/SubscriptionsOnTimelinesUpdateManyWithWhereWithoutUserInput");
const SubscriptionsOnTimelinesUpdateWithWhereUniqueWithoutUserInput_1 = require("../inputs/SubscriptionsOnTimelinesUpdateWithWhereUniqueWithoutUserInput");
const SubscriptionsOnTimelinesUpsertWithWhereUniqueWithoutUserInput_1 = require("../inputs/SubscriptionsOnTimelinesUpsertWithWhereUniqueWithoutUserInput");
const SubscriptionsOnTimelinesWhereUniqueInput_1 = require("../inputs/SubscriptionsOnTimelinesWhereUniqueInput");
let SubscriptionsOnTimelinesUpdateManyWithoutUserInput = class SubscriptionsOnTimelinesUpdateManyWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesCreateWithoutUserInput_1.SubscriptionsOnTimelinesCreateWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubscriptionsOnTimelinesUpdateManyWithoutUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesCreateOrConnectWithoutUserInput_1.SubscriptionsOnTimelinesCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubscriptionsOnTimelinesUpdateManyWithoutUserInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesUpsertWithWhereUniqueWithoutUserInput_1.SubscriptionsOnTimelinesUpsertWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubscriptionsOnTimelinesUpdateManyWithoutUserInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnTimelinesCreateManyUserInputEnvelope_1.SubscriptionsOnTimelinesCreateManyUserInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnTimelinesCreateManyUserInputEnvelope_1.SubscriptionsOnTimelinesCreateManyUserInputEnvelope)
], SubscriptionsOnTimelinesUpdateManyWithoutUserInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesWhereUniqueInput_1.SubscriptionsOnTimelinesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubscriptionsOnTimelinesUpdateManyWithoutUserInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesWhereUniqueInput_1.SubscriptionsOnTimelinesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubscriptionsOnTimelinesUpdateManyWithoutUserInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesWhereUniqueInput_1.SubscriptionsOnTimelinesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubscriptionsOnTimelinesUpdateManyWithoutUserInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesWhereUniqueInput_1.SubscriptionsOnTimelinesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubscriptionsOnTimelinesUpdateManyWithoutUserInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesUpdateWithWhereUniqueWithoutUserInput_1.SubscriptionsOnTimelinesUpdateWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubscriptionsOnTimelinesUpdateManyWithoutUserInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesUpdateManyWithWhereWithoutUserInput_1.SubscriptionsOnTimelinesUpdateManyWithWhereWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubscriptionsOnTimelinesUpdateManyWithoutUserInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesScalarWhereInput_1.SubscriptionsOnTimelinesScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubscriptionsOnTimelinesUpdateManyWithoutUserInput.prototype, "deleteMany", void 0);
SubscriptionsOnTimelinesUpdateManyWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SubscriptionsOnTimelinesUpdateManyWithoutUserInput", {
        isAbstract: true
    })
], SubscriptionsOnTimelinesUpdateManyWithoutUserInput);
exports.SubscriptionsOnTimelinesUpdateManyWithoutUserInput = SubscriptionsOnTimelinesUpdateManyWithoutUserInput;
