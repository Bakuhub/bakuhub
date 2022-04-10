"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnPremiseUpdateManyWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnPremiseCreateManyUserInputEnvelope_1 = require("../inputs/VotesOnPremiseCreateManyUserInputEnvelope");
const VotesOnPremiseCreateOrConnectWithoutUserInput_1 = require("../inputs/VotesOnPremiseCreateOrConnectWithoutUserInput");
const VotesOnPremiseCreateWithoutUserInput_1 = require("../inputs/VotesOnPremiseCreateWithoutUserInput");
const VotesOnPremiseScalarWhereInput_1 = require("../inputs/VotesOnPremiseScalarWhereInput");
const VotesOnPremiseUpdateManyWithWhereWithoutUserInput_1 = require("../inputs/VotesOnPremiseUpdateManyWithWhereWithoutUserInput");
const VotesOnPremiseUpdateWithWhereUniqueWithoutUserInput_1 = require("../inputs/VotesOnPremiseUpdateWithWhereUniqueWithoutUserInput");
const VotesOnPremiseUpsertWithWhereUniqueWithoutUserInput_1 = require("../inputs/VotesOnPremiseUpsertWithWhereUniqueWithoutUserInput");
const VotesOnPremiseWhereUniqueInput_1 = require("../inputs/VotesOnPremiseWhereUniqueInput");
let VotesOnPremiseUpdateManyWithoutUserInput = class VotesOnPremiseUpdateManyWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnPremiseCreateWithoutUserInput_1.VotesOnPremiseCreateWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnPremiseUpdateManyWithoutUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnPremiseCreateOrConnectWithoutUserInput_1.VotesOnPremiseCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnPremiseUpdateManyWithoutUserInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnPremiseUpsertWithWhereUniqueWithoutUserInput_1.VotesOnPremiseUpsertWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnPremiseUpdateManyWithoutUserInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseCreateManyUserInputEnvelope_1.VotesOnPremiseCreateManyUserInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseCreateManyUserInputEnvelope_1.VotesOnPremiseCreateManyUserInputEnvelope)
], VotesOnPremiseUpdateManyWithoutUserInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnPremiseWhereUniqueInput_1.VotesOnPremiseWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnPremiseUpdateManyWithoutUserInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnPremiseWhereUniqueInput_1.VotesOnPremiseWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnPremiseUpdateManyWithoutUserInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnPremiseWhereUniqueInput_1.VotesOnPremiseWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnPremiseUpdateManyWithoutUserInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnPremiseWhereUniqueInput_1.VotesOnPremiseWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnPremiseUpdateManyWithoutUserInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnPremiseUpdateWithWhereUniqueWithoutUserInput_1.VotesOnPremiseUpdateWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnPremiseUpdateManyWithoutUserInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnPremiseUpdateManyWithWhereWithoutUserInput_1.VotesOnPremiseUpdateManyWithWhereWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnPremiseUpdateManyWithoutUserInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnPremiseScalarWhereInput_1.VotesOnPremiseScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnPremiseUpdateManyWithoutUserInput.prototype, "deleteMany", void 0);
VotesOnPremiseUpdateManyWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnPremiseUpdateManyWithoutUserInput", {
        isAbstract: true
    })
], VotesOnPremiseUpdateManyWithoutUserInput);
exports.VotesOnPremiseUpdateManyWithoutUserInput = VotesOnPremiseUpdateManyWithoutUserInput;
