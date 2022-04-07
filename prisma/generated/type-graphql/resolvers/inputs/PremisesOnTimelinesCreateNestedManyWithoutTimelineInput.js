"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremisesOnTimelinesCreateNestedManyWithoutTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremisesOnTimelinesCreateManyTimelineInputEnvelope_1 = require("../inputs/PremisesOnTimelinesCreateManyTimelineInputEnvelope");
const PremisesOnTimelinesCreateOrConnectWithoutTimelineInput_1 = require("../inputs/PremisesOnTimelinesCreateOrConnectWithoutTimelineInput");
const PremisesOnTimelinesCreateWithoutTimelineInput_1 = require("../inputs/PremisesOnTimelinesCreateWithoutTimelineInput");
const PremisesOnTimelinesWhereUniqueInput_1 = require("../inputs/PremisesOnTimelinesWhereUniqueInput");
let PremisesOnTimelinesCreateNestedManyWithoutTimelineInput = class PremisesOnTimelinesCreateNestedManyWithoutTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PremisesOnTimelinesCreateWithoutTimelineInput_1.PremisesOnTimelinesCreateWithoutTimelineInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PremisesOnTimelinesCreateNestedManyWithoutTimelineInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PremisesOnTimelinesCreateOrConnectWithoutTimelineInput_1.PremisesOnTimelinesCreateOrConnectWithoutTimelineInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PremisesOnTimelinesCreateNestedManyWithoutTimelineInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremisesOnTimelinesCreateManyTimelineInputEnvelope_1.PremisesOnTimelinesCreateManyTimelineInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremisesOnTimelinesCreateManyTimelineInputEnvelope_1.PremisesOnTimelinesCreateManyTimelineInputEnvelope)
], PremisesOnTimelinesCreateNestedManyWithoutTimelineInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PremisesOnTimelinesWhereUniqueInput_1.PremisesOnTimelinesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PremisesOnTimelinesCreateNestedManyWithoutTimelineInput.prototype, "connect", void 0);
PremisesOnTimelinesCreateNestedManyWithoutTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PremisesOnTimelinesCreateNestedManyWithoutTimelineInput", {
        isAbstract: true
    })
], PremisesOnTimelinesCreateNestedManyWithoutTimelineInput);
exports.PremisesOnTimelinesCreateNestedManyWithoutTimelineInput = PremisesOnTimelinesCreateNestedManyWithoutTimelineInput;
