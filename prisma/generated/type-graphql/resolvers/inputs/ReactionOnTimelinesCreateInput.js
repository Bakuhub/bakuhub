"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnTimelinesCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TimelineCreateNestedOneWithoutReactionOnTimelinesInput_1 = require("../inputs/TimelineCreateNestedOneWithoutReactionOnTimelinesInput");
const UserCreateNestedOneWithoutReactionOnTimelinesInput_1 = require("../inputs/UserCreateNestedOneWithoutReactionOnTimelinesInput");
const Reaction_1 = require("../../enums/Reaction");
let ReactionOnTimelinesCreateInput = class ReactionOnTimelinesCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutReactionOnTimelinesInput_1.UserCreateNestedOneWithoutReactionOnTimelinesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutReactionOnTimelinesInput_1.UserCreateNestedOneWithoutReactionOnTimelinesInput)
], ReactionOnTimelinesCreateInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineCreateNestedOneWithoutReactionOnTimelinesInput_1.TimelineCreateNestedOneWithoutReactionOnTimelinesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TimelineCreateNestedOneWithoutReactionOnTimelinesInput_1.TimelineCreateNestedOneWithoutReactionOnTimelinesInput)
], ReactionOnTimelinesCreateInput.prototype, "timeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Reaction_1.Reaction, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnTimelinesCreateInput.prototype, "reaction", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReactionOnTimelinesCreateInput.prototype, "createdAt", void 0);
ReactionOnTimelinesCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnTimelinesCreateInput", {
        isAbstract: true
    })
], ReactionOnTimelinesCreateInput);
exports.ReactionOnTimelinesCreateInput = ReactionOnTimelinesCreateInput;
