"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremisesOnTimelinesWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremisesOnTimelinesPremiseIdTimelineIdCompoundUniqueInput_1 = require("../inputs/PremisesOnTimelinesPremiseIdTimelineIdCompoundUniqueInput");
let PremisesOnTimelinesWhereUniqueInput = class PremisesOnTimelinesWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremisesOnTimelinesPremiseIdTimelineIdCompoundUniqueInput_1.PremisesOnTimelinesPremiseIdTimelineIdCompoundUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremisesOnTimelinesPremiseIdTimelineIdCompoundUniqueInput_1.PremisesOnTimelinesPremiseIdTimelineIdCompoundUniqueInput)
], PremisesOnTimelinesWhereUniqueInput.prototype, "premiseId_timelineId", void 0);
PremisesOnTimelinesWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PremisesOnTimelinesWhereUniqueInput", {
        isAbstract: true
    })
], PremisesOnTimelinesWhereUniqueInput);
exports.PremisesOnTimelinesWhereUniqueInput = PremisesOnTimelinesWhereUniqueInput;
