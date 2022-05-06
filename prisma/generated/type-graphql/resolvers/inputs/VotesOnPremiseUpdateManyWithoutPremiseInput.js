"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnPremiseUpdateManyWithoutPremiseInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnPremiseCreateManyPremiseInputEnvelope_1 = require("../inputs/VotesOnPremiseCreateManyPremiseInputEnvelope");
const VotesOnPremiseCreateOrConnectWithoutPremiseInput_1 = require("../inputs/VotesOnPremiseCreateOrConnectWithoutPremiseInput");
const VotesOnPremiseCreateWithoutPremiseInput_1 = require("../inputs/VotesOnPremiseCreateWithoutPremiseInput");
const VotesOnPremiseScalarWhereInput_1 = require("../inputs/VotesOnPremiseScalarWhereInput");
const VotesOnPremiseUpdateManyWithWhereWithoutPremiseInput_1 = require("../inputs/VotesOnPremiseUpdateManyWithWhereWithoutPremiseInput");
const VotesOnPremiseUpdateWithWhereUniqueWithoutPremiseInput_1 = require("../inputs/VotesOnPremiseUpdateWithWhereUniqueWithoutPremiseInput");
const VotesOnPremiseUpsertWithWhereUniqueWithoutPremiseInput_1 = require("../inputs/VotesOnPremiseUpsertWithWhereUniqueWithoutPremiseInput");
const VotesOnPremiseWhereUniqueInput_1 = require("../inputs/VotesOnPremiseWhereUniqueInput");
let VotesOnPremiseUpdateManyWithoutPremiseInput = class VotesOnPremiseUpdateManyWithoutPremiseInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnPremiseCreateWithoutPremiseInput_1.VotesOnPremiseCreateWithoutPremiseInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnPremiseUpdateManyWithoutPremiseInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnPremiseCreateOrConnectWithoutPremiseInput_1.VotesOnPremiseCreateOrConnectWithoutPremiseInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnPremiseUpdateManyWithoutPremiseInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnPremiseUpsertWithWhereUniqueWithoutPremiseInput_1.VotesOnPremiseUpsertWithWhereUniqueWithoutPremiseInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnPremiseUpdateManyWithoutPremiseInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseCreateManyPremiseInputEnvelope_1.VotesOnPremiseCreateManyPremiseInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseCreateManyPremiseInputEnvelope_1.VotesOnPremiseCreateManyPremiseInputEnvelope)
], VotesOnPremiseUpdateManyWithoutPremiseInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnPremiseWhereUniqueInput_1.VotesOnPremiseWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnPremiseUpdateManyWithoutPremiseInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnPremiseWhereUniqueInput_1.VotesOnPremiseWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnPremiseUpdateManyWithoutPremiseInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnPremiseWhereUniqueInput_1.VotesOnPremiseWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnPremiseUpdateManyWithoutPremiseInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnPremiseWhereUniqueInput_1.VotesOnPremiseWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnPremiseUpdateManyWithoutPremiseInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnPremiseUpdateWithWhereUniqueWithoutPremiseInput_1.VotesOnPremiseUpdateWithWhereUniqueWithoutPremiseInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnPremiseUpdateManyWithoutPremiseInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnPremiseUpdateManyWithWhereWithoutPremiseInput_1.VotesOnPremiseUpdateManyWithWhereWithoutPremiseInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnPremiseUpdateManyWithoutPremiseInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnPremiseScalarWhereInput_1.VotesOnPremiseScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnPremiseUpdateManyWithoutPremiseInput.prototype, "deleteMany", void 0);
VotesOnPremiseUpdateManyWithoutPremiseInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnPremiseUpdateManyWithoutPremiseInput", {
        isAbstract: true
    })
], VotesOnPremiseUpdateManyWithoutPremiseInput);
exports.VotesOnPremiseUpdateManyWithoutPremiseInput = VotesOnPremiseUpdateManyWithoutPremiseInput;
