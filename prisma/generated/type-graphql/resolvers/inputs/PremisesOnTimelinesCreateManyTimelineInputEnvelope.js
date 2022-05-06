"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremisesOnTimelinesCreateManyTimelineInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremisesOnTimelinesCreateManyTimelineInput_1 = require("../inputs/PremisesOnTimelinesCreateManyTimelineInput");
let PremisesOnTimelinesCreateManyTimelineInputEnvelope = class PremisesOnTimelinesCreateManyTimelineInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PremisesOnTimelinesCreateManyTimelineInput_1.PremisesOnTimelinesCreateManyTimelineInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], PremisesOnTimelinesCreateManyTimelineInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], PremisesOnTimelinesCreateManyTimelineInputEnvelope.prototype, "skipDuplicates", void 0);
PremisesOnTimelinesCreateManyTimelineInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("PremisesOnTimelinesCreateManyTimelineInputEnvelope", {
        isAbstract: true
    })
], PremisesOnTimelinesCreateManyTimelineInputEnvelope);
exports.PremisesOnTimelinesCreateManyTimelineInputEnvelope = PremisesOnTimelinesCreateManyTimelineInputEnvelope;
