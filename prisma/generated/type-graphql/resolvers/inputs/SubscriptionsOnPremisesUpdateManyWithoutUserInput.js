"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsOnPremisesUpdateManyWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionsOnPremisesCreateManyUserInputEnvelope_1 = require("../inputs/SubscriptionsOnPremisesCreateManyUserInputEnvelope");
const SubscriptionsOnPremisesCreateOrConnectWithoutUserInput_1 = require("../inputs/SubscriptionsOnPremisesCreateOrConnectWithoutUserInput");
const SubscriptionsOnPremisesCreateWithoutUserInput_1 = require("../inputs/SubscriptionsOnPremisesCreateWithoutUserInput");
const SubscriptionsOnPremisesScalarWhereInput_1 = require("../inputs/SubscriptionsOnPremisesScalarWhereInput");
const SubscriptionsOnPremisesUpdateManyWithWhereWithoutUserInput_1 = require("../inputs/SubscriptionsOnPremisesUpdateManyWithWhereWithoutUserInput");
const SubscriptionsOnPremisesUpdateWithWhereUniqueWithoutUserInput_1 = require("../inputs/SubscriptionsOnPremisesUpdateWithWhereUniqueWithoutUserInput");
const SubscriptionsOnPremisesUpsertWithWhereUniqueWithoutUserInput_1 = require("../inputs/SubscriptionsOnPremisesUpsertWithWhereUniqueWithoutUserInput");
const SubscriptionsOnPremisesWhereUniqueInput_1 = require("../inputs/SubscriptionsOnPremisesWhereUniqueInput");
let SubscriptionsOnPremisesUpdateManyWithoutUserInput = class SubscriptionsOnPremisesUpdateManyWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnPremisesCreateWithoutUserInput_1.SubscriptionsOnPremisesCreateWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubscriptionsOnPremisesUpdateManyWithoutUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnPremisesCreateOrConnectWithoutUserInput_1.SubscriptionsOnPremisesCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubscriptionsOnPremisesUpdateManyWithoutUserInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnPremisesUpsertWithWhereUniqueWithoutUserInput_1.SubscriptionsOnPremisesUpsertWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubscriptionsOnPremisesUpdateManyWithoutUserInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnPremisesCreateManyUserInputEnvelope_1.SubscriptionsOnPremisesCreateManyUserInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnPremisesCreateManyUserInputEnvelope_1.SubscriptionsOnPremisesCreateManyUserInputEnvelope)
], SubscriptionsOnPremisesUpdateManyWithoutUserInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnPremisesWhereUniqueInput_1.SubscriptionsOnPremisesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubscriptionsOnPremisesUpdateManyWithoutUserInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnPremisesWhereUniqueInput_1.SubscriptionsOnPremisesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubscriptionsOnPremisesUpdateManyWithoutUserInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnPremisesWhereUniqueInput_1.SubscriptionsOnPremisesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubscriptionsOnPremisesUpdateManyWithoutUserInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnPremisesWhereUniqueInput_1.SubscriptionsOnPremisesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubscriptionsOnPremisesUpdateManyWithoutUserInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnPremisesUpdateWithWhereUniqueWithoutUserInput_1.SubscriptionsOnPremisesUpdateWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubscriptionsOnPremisesUpdateManyWithoutUserInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnPremisesUpdateManyWithWhereWithoutUserInput_1.SubscriptionsOnPremisesUpdateManyWithWhereWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubscriptionsOnPremisesUpdateManyWithoutUserInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnPremisesScalarWhereInput_1.SubscriptionsOnPremisesScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubscriptionsOnPremisesUpdateManyWithoutUserInput.prototype, "deleteMany", void 0);
SubscriptionsOnPremisesUpdateManyWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SubscriptionsOnPremisesUpdateManyWithoutUserInput", {
        isAbstract: true
    })
], SubscriptionsOnPremisesUpdateManyWithoutUserInput);
exports.SubscriptionsOnPremisesUpdateManyWithoutUserInput = SubscriptionsOnPremisesUpdateManyWithoutUserInput;
