"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremisesOnTimelinesCreateManyTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let PremisesOnTimelinesCreateManyTimelineInput = class PremisesOnTimelinesCreateManyTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PremisesOnTimelinesCreateManyTimelineInput.prototype, "premiseId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PremisesOnTimelinesCreateManyTimelineInput.prototype, "assignedAt", void 0);
PremisesOnTimelinesCreateManyTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PremisesOnTimelinesCreateManyTimelineInput", {
        isAbstract: true
    })
], PremisesOnTimelinesCreateManyTimelineInput);
exports.PremisesOnTimelinesCreateManyTimelineInput = PremisesOnTimelinesCreateManyTimelineInput;
