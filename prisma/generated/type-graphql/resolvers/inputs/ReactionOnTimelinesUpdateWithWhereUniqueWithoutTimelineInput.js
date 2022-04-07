"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnTimelinesUpdateWithoutTimelineInput_1 = require("../inputs/ReactionOnTimelinesUpdateWithoutTimelineInput");
const ReactionOnTimelinesWhereUniqueInput_1 = require("../inputs/ReactionOnTimelinesWhereUniqueInput");
let ReactionOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput = class ReactionOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesWhereUniqueInput_1.ReactionOnTimelinesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesWhereUniqueInput_1.ReactionOnTimelinesWhereUniqueInput)
], ReactionOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesUpdateWithoutTimelineInput_1.ReactionOnTimelinesUpdateWithoutTimelineInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesUpdateWithoutTimelineInput_1.ReactionOnTimelinesUpdateWithoutTimelineInput)
], ReactionOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput.prototype, "data", void 0);
ReactionOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput", {
        isAbstract: true
    })
], ReactionOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput);
exports.ReactionOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput = ReactionOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput;
