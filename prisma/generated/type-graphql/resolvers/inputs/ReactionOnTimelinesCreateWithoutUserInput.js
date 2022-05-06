"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnTimelinesCreateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TimelineCreateNestedOneWithoutReactionOnTimelinesInput_1 = require("../inputs/TimelineCreateNestedOneWithoutReactionOnTimelinesInput");
const Reaction_1 = require("../../enums/Reaction");
let ReactionOnTimelinesCreateWithoutUserInput = class ReactionOnTimelinesCreateWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineCreateNestedOneWithoutReactionOnTimelinesInput_1.TimelineCreateNestedOneWithoutReactionOnTimelinesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TimelineCreateNestedOneWithoutReactionOnTimelinesInput_1.TimelineCreateNestedOneWithoutReactionOnTimelinesInput)
], ReactionOnTimelinesCreateWithoutUserInput.prototype, "timeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Reaction_1.Reaction, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnTimelinesCreateWithoutUserInput.prototype, "reaction", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReactionOnTimelinesCreateWithoutUserInput.prototype, "createdAt", void 0);
ReactionOnTimelinesCreateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnTimelinesCreateWithoutUserInput", {
        isAbstract: true
    })
], ReactionOnTimelinesCreateWithoutUserInput);
exports.ReactionOnTimelinesCreateWithoutUserInput = ReactionOnTimelinesCreateWithoutUserInput;
