"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnTimelinesCreateWithoutTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateNestedOneWithoutReactionOnTimelinesInput_1 = require("../inputs/UserCreateNestedOneWithoutReactionOnTimelinesInput");
const Reaction_1 = require("../../enums/Reaction");
let ReactionOnTimelinesCreateWithoutTimelineInput = class ReactionOnTimelinesCreateWithoutTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutReactionOnTimelinesInput_1.UserCreateNestedOneWithoutReactionOnTimelinesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutReactionOnTimelinesInput_1.UserCreateNestedOneWithoutReactionOnTimelinesInput)
], ReactionOnTimelinesCreateWithoutTimelineInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Reaction_1.Reaction, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnTimelinesCreateWithoutTimelineInput.prototype, "reaction", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReactionOnTimelinesCreateWithoutTimelineInput.prototype, "createdAt", void 0);
ReactionOnTimelinesCreateWithoutTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnTimelinesCreateWithoutTimelineInput", {
        isAbstract: true
    })
], ReactionOnTimelinesCreateWithoutTimelineInput);
exports.ReactionOnTimelinesCreateWithoutTimelineInput = ReactionOnTimelinesCreateWithoutTimelineInput;
