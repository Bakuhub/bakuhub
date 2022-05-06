"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremisesOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremisesOnTimelinesUpdateWithoutTimelineInput_1 = require("../inputs/PremisesOnTimelinesUpdateWithoutTimelineInput");
const PremisesOnTimelinesWhereUniqueInput_1 = require("../inputs/PremisesOnTimelinesWhereUniqueInput");
let PremisesOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput = class PremisesOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremisesOnTimelinesWhereUniqueInput_1.PremisesOnTimelinesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremisesOnTimelinesWhereUniqueInput_1.PremisesOnTimelinesWhereUniqueInput)
], PremisesOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremisesOnTimelinesUpdateWithoutTimelineInput_1.PremisesOnTimelinesUpdateWithoutTimelineInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremisesOnTimelinesUpdateWithoutTimelineInput_1.PremisesOnTimelinesUpdateWithoutTimelineInput)
], PremisesOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput.prototype, "data", void 0);
PremisesOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PremisesOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput", {
        isAbstract: true
    })
], PremisesOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput);
exports.PremisesOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput = PremisesOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput;
