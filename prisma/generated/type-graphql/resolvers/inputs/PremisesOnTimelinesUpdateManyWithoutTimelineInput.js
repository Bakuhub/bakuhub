"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremisesOnTimelinesUpdateManyWithoutTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremisesOnTimelinesCreateManyTimelineInputEnvelope_1 = require("../inputs/PremisesOnTimelinesCreateManyTimelineInputEnvelope");
const PremisesOnTimelinesCreateOrConnectWithoutTimelineInput_1 = require("../inputs/PremisesOnTimelinesCreateOrConnectWithoutTimelineInput");
const PremisesOnTimelinesCreateWithoutTimelineInput_1 = require("../inputs/PremisesOnTimelinesCreateWithoutTimelineInput");
const PremisesOnTimelinesScalarWhereInput_1 = require("../inputs/PremisesOnTimelinesScalarWhereInput");
const PremisesOnTimelinesUpdateManyWithWhereWithoutTimelineInput_1 = require("../inputs/PremisesOnTimelinesUpdateManyWithWhereWithoutTimelineInput");
const PremisesOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput_1 = require("../inputs/PremisesOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput");
const PremisesOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput_1 = require("../inputs/PremisesOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput");
const PremisesOnTimelinesWhereUniqueInput_1 = require("../inputs/PremisesOnTimelinesWhereUniqueInput");
let PremisesOnTimelinesUpdateManyWithoutTimelineInput = class PremisesOnTimelinesUpdateManyWithoutTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PremisesOnTimelinesCreateWithoutTimelineInput_1.PremisesOnTimelinesCreateWithoutTimelineInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PremisesOnTimelinesUpdateManyWithoutTimelineInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PremisesOnTimelinesCreateOrConnectWithoutTimelineInput_1.PremisesOnTimelinesCreateOrConnectWithoutTimelineInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PremisesOnTimelinesUpdateManyWithoutTimelineInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PremisesOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput_1.PremisesOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PremisesOnTimelinesUpdateManyWithoutTimelineInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremisesOnTimelinesCreateManyTimelineInputEnvelope_1.PremisesOnTimelinesCreateManyTimelineInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremisesOnTimelinesCreateManyTimelineInputEnvelope_1.PremisesOnTimelinesCreateManyTimelineInputEnvelope)
], PremisesOnTimelinesUpdateManyWithoutTimelineInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PremisesOnTimelinesWhereUniqueInput_1.PremisesOnTimelinesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PremisesOnTimelinesUpdateManyWithoutTimelineInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PremisesOnTimelinesWhereUniqueInput_1.PremisesOnTimelinesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PremisesOnTimelinesUpdateManyWithoutTimelineInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PremisesOnTimelinesWhereUniqueInput_1.PremisesOnTimelinesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PremisesOnTimelinesUpdateManyWithoutTimelineInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PremisesOnTimelinesWhereUniqueInput_1.PremisesOnTimelinesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PremisesOnTimelinesUpdateManyWithoutTimelineInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PremisesOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput_1.PremisesOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PremisesOnTimelinesUpdateManyWithoutTimelineInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PremisesOnTimelinesUpdateManyWithWhereWithoutTimelineInput_1.PremisesOnTimelinesUpdateManyWithWhereWithoutTimelineInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PremisesOnTimelinesUpdateManyWithoutTimelineInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PremisesOnTimelinesScalarWhereInput_1.PremisesOnTimelinesScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PremisesOnTimelinesUpdateManyWithoutTimelineInput.prototype, "deleteMany", void 0);
PremisesOnTimelinesUpdateManyWithoutTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PremisesOnTimelinesUpdateManyWithoutTimelineInput", {
        isAbstract: true
    })
], PremisesOnTimelinesUpdateManyWithoutTimelineInput);
exports.PremisesOnTimelinesUpdateManyWithoutTimelineInput = PremisesOnTimelinesUpdateManyWithoutTimelineInput;
