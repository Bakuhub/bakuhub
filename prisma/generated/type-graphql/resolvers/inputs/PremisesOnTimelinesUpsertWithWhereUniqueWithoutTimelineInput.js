"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremisesOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremisesOnTimelinesCreateWithoutTimelineInput_1 = require("../inputs/PremisesOnTimelinesCreateWithoutTimelineInput");
const PremisesOnTimelinesUpdateWithoutTimelineInput_1 = require("../inputs/PremisesOnTimelinesUpdateWithoutTimelineInput");
const PremisesOnTimelinesWhereUniqueInput_1 = require("../inputs/PremisesOnTimelinesWhereUniqueInput");
let PremisesOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput = class PremisesOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremisesOnTimelinesWhereUniqueInput_1.PremisesOnTimelinesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremisesOnTimelinesWhereUniqueInput_1.PremisesOnTimelinesWhereUniqueInput)
], PremisesOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremisesOnTimelinesUpdateWithoutTimelineInput_1.PremisesOnTimelinesUpdateWithoutTimelineInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremisesOnTimelinesUpdateWithoutTimelineInput_1.PremisesOnTimelinesUpdateWithoutTimelineInput)
], PremisesOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremisesOnTimelinesCreateWithoutTimelineInput_1.PremisesOnTimelinesCreateWithoutTimelineInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremisesOnTimelinesCreateWithoutTimelineInput_1.PremisesOnTimelinesCreateWithoutTimelineInput)
], PremisesOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput.prototype, "create", void 0);
PremisesOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PremisesOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput", {
        isAbstract: true
    })
], PremisesOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput);
exports.PremisesOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput = PremisesOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput;
