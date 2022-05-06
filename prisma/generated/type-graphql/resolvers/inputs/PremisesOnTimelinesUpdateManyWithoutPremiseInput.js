"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremisesOnTimelinesUpdateManyWithoutPremiseInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremisesOnTimelinesCreateManyPremiseInputEnvelope_1 = require("../inputs/PremisesOnTimelinesCreateManyPremiseInputEnvelope");
const PremisesOnTimelinesCreateOrConnectWithoutPremiseInput_1 = require("../inputs/PremisesOnTimelinesCreateOrConnectWithoutPremiseInput");
const PremisesOnTimelinesCreateWithoutPremiseInput_1 = require("../inputs/PremisesOnTimelinesCreateWithoutPremiseInput");
const PremisesOnTimelinesScalarWhereInput_1 = require("../inputs/PremisesOnTimelinesScalarWhereInput");
const PremisesOnTimelinesUpdateManyWithWhereWithoutPremiseInput_1 = require("../inputs/PremisesOnTimelinesUpdateManyWithWhereWithoutPremiseInput");
const PremisesOnTimelinesUpdateWithWhereUniqueWithoutPremiseInput_1 = require("../inputs/PremisesOnTimelinesUpdateWithWhereUniqueWithoutPremiseInput");
const PremisesOnTimelinesUpsertWithWhereUniqueWithoutPremiseInput_1 = require("../inputs/PremisesOnTimelinesUpsertWithWhereUniqueWithoutPremiseInput");
const PremisesOnTimelinesWhereUniqueInput_1 = require("../inputs/PremisesOnTimelinesWhereUniqueInput");
let PremisesOnTimelinesUpdateManyWithoutPremiseInput = class PremisesOnTimelinesUpdateManyWithoutPremiseInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PremisesOnTimelinesCreateWithoutPremiseInput_1.PremisesOnTimelinesCreateWithoutPremiseInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PremisesOnTimelinesUpdateManyWithoutPremiseInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PremisesOnTimelinesCreateOrConnectWithoutPremiseInput_1.PremisesOnTimelinesCreateOrConnectWithoutPremiseInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PremisesOnTimelinesUpdateManyWithoutPremiseInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PremisesOnTimelinesUpsertWithWhereUniqueWithoutPremiseInput_1.PremisesOnTimelinesUpsertWithWhereUniqueWithoutPremiseInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PremisesOnTimelinesUpdateManyWithoutPremiseInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremisesOnTimelinesCreateManyPremiseInputEnvelope_1.PremisesOnTimelinesCreateManyPremiseInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremisesOnTimelinesCreateManyPremiseInputEnvelope_1.PremisesOnTimelinesCreateManyPremiseInputEnvelope)
], PremisesOnTimelinesUpdateManyWithoutPremiseInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PremisesOnTimelinesWhereUniqueInput_1.PremisesOnTimelinesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PremisesOnTimelinesUpdateManyWithoutPremiseInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PremisesOnTimelinesWhereUniqueInput_1.PremisesOnTimelinesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PremisesOnTimelinesUpdateManyWithoutPremiseInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PremisesOnTimelinesWhereUniqueInput_1.PremisesOnTimelinesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PremisesOnTimelinesUpdateManyWithoutPremiseInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PremisesOnTimelinesWhereUniqueInput_1.PremisesOnTimelinesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PremisesOnTimelinesUpdateManyWithoutPremiseInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PremisesOnTimelinesUpdateWithWhereUniqueWithoutPremiseInput_1.PremisesOnTimelinesUpdateWithWhereUniqueWithoutPremiseInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PremisesOnTimelinesUpdateManyWithoutPremiseInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PremisesOnTimelinesUpdateManyWithWhereWithoutPremiseInput_1.PremisesOnTimelinesUpdateManyWithWhereWithoutPremiseInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PremisesOnTimelinesUpdateManyWithoutPremiseInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PremisesOnTimelinesScalarWhereInput_1.PremisesOnTimelinesScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PremisesOnTimelinesUpdateManyWithoutPremiseInput.prototype, "deleteMany", void 0);
PremisesOnTimelinesUpdateManyWithoutPremiseInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PremisesOnTimelinesUpdateManyWithoutPremiseInput", {
        isAbstract: true
    })
], PremisesOnTimelinesUpdateManyWithoutPremiseInput);
exports.PremisesOnTimelinesUpdateManyWithoutPremiseInput = PremisesOnTimelinesUpdateManyWithoutPremiseInput;
