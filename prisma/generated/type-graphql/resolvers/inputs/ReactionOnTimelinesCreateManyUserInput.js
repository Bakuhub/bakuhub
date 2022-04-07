"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnTimelinesCreateManyUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Reaction_1 = require("../../enums/Reaction");
let ReactionOnTimelinesCreateManyUserInput = class ReactionOnTimelinesCreateManyUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnTimelinesCreateManyUserInput.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Reaction_1.Reaction, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnTimelinesCreateManyUserInput.prototype, "reaction", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReactionOnTimelinesCreateManyUserInput.prototype, "createdAt", void 0);
ReactionOnTimelinesCreateManyUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnTimelinesCreateManyUserInput", {
        isAbstract: true
    })
], ReactionOnTimelinesCreateManyUserInput);
exports.ReactionOnTimelinesCreateManyUserInput = ReactionOnTimelinesCreateManyUserInput;
