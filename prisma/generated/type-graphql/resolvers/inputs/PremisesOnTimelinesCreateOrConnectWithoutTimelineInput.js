"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremisesOnTimelinesCreateOrConnectWithoutTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremisesOnTimelinesCreateWithoutTimelineInput_1 = require("../inputs/PremisesOnTimelinesCreateWithoutTimelineInput");
const PremisesOnTimelinesWhereUniqueInput_1 = require("../inputs/PremisesOnTimelinesWhereUniqueInput");
let PremisesOnTimelinesCreateOrConnectWithoutTimelineInput = class PremisesOnTimelinesCreateOrConnectWithoutTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremisesOnTimelinesWhereUniqueInput_1.PremisesOnTimelinesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremisesOnTimelinesWhereUniqueInput_1.PremisesOnTimelinesWhereUniqueInput)
], PremisesOnTimelinesCreateOrConnectWithoutTimelineInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremisesOnTimelinesCreateWithoutTimelineInput_1.PremisesOnTimelinesCreateWithoutTimelineInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremisesOnTimelinesCreateWithoutTimelineInput_1.PremisesOnTimelinesCreateWithoutTimelineInput)
], PremisesOnTimelinesCreateOrConnectWithoutTimelineInput.prototype, "create", void 0);
PremisesOnTimelinesCreateOrConnectWithoutTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PremisesOnTimelinesCreateOrConnectWithoutTimelineInput", {
        isAbstract: true
    })
], PremisesOnTimelinesCreateOrConnectWithoutTimelineInput);
exports.PremisesOnTimelinesCreateOrConnectWithoutTimelineInput = PremisesOnTimelinesCreateOrConnectWithoutTimelineInput;
