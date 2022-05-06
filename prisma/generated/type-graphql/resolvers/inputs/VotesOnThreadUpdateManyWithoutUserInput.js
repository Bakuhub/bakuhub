"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnThreadUpdateManyWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnThreadCreateManyUserInputEnvelope_1 = require("../inputs/VotesOnThreadCreateManyUserInputEnvelope");
const VotesOnThreadCreateOrConnectWithoutUserInput_1 = require("../inputs/VotesOnThreadCreateOrConnectWithoutUserInput");
const VotesOnThreadCreateWithoutUserInput_1 = require("../inputs/VotesOnThreadCreateWithoutUserInput");
const VotesOnThreadScalarWhereInput_1 = require("../inputs/VotesOnThreadScalarWhereInput");
const VotesOnThreadUpdateManyWithWhereWithoutUserInput_1 = require("../inputs/VotesOnThreadUpdateManyWithWhereWithoutUserInput");
const VotesOnThreadUpdateWithWhereUniqueWithoutUserInput_1 = require("../inputs/VotesOnThreadUpdateWithWhereUniqueWithoutUserInput");
const VotesOnThreadUpsertWithWhereUniqueWithoutUserInput_1 = require("../inputs/VotesOnThreadUpsertWithWhereUniqueWithoutUserInput");
const VotesOnThreadWhereUniqueInput_1 = require("../inputs/VotesOnThreadWhereUniqueInput");
let VotesOnThreadUpdateManyWithoutUserInput = class VotesOnThreadUpdateManyWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnThreadCreateWithoutUserInput_1.VotesOnThreadCreateWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnThreadUpdateManyWithoutUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnThreadCreateOrConnectWithoutUserInput_1.VotesOnThreadCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnThreadUpdateManyWithoutUserInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnThreadUpsertWithWhereUniqueWithoutUserInput_1.VotesOnThreadUpsertWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnThreadUpdateManyWithoutUserInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadCreateManyUserInputEnvelope_1.VotesOnThreadCreateManyUserInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnThreadCreateManyUserInputEnvelope_1.VotesOnThreadCreateManyUserInputEnvelope)
], VotesOnThreadUpdateManyWithoutUserInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnThreadWhereUniqueInput_1.VotesOnThreadWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnThreadUpdateManyWithoutUserInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnThreadWhereUniqueInput_1.VotesOnThreadWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnThreadUpdateManyWithoutUserInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnThreadWhereUniqueInput_1.VotesOnThreadWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnThreadUpdateManyWithoutUserInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnThreadWhereUniqueInput_1.VotesOnThreadWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnThreadUpdateManyWithoutUserInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnThreadUpdateWithWhereUniqueWithoutUserInput_1.VotesOnThreadUpdateWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnThreadUpdateManyWithoutUserInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnThreadUpdateManyWithWhereWithoutUserInput_1.VotesOnThreadUpdateManyWithWhereWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnThreadUpdateManyWithoutUserInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnThreadScalarWhereInput_1.VotesOnThreadScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnThreadUpdateManyWithoutUserInput.prototype, "deleteMany", void 0);
VotesOnThreadUpdateManyWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnThreadUpdateManyWithoutUserInput", {
        isAbstract: true
    })
], VotesOnThreadUpdateManyWithoutUserInput);
exports.VotesOnThreadUpdateManyWithoutUserInput = VotesOnThreadUpdateManyWithoutUserInput;
