"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnTimelineCreateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TimelineCreateNestedOneWithoutVotesOnTimelineInput_1 = require("../inputs/TimelineCreateNestedOneWithoutVotesOnTimelineInput");
let VotesOnTimelineCreateWithoutUserInput = class VotesOnTimelineCreateWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineCreateNestedOneWithoutVotesOnTimelineInput_1.TimelineCreateNestedOneWithoutVotesOnTimelineInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TimelineCreateNestedOneWithoutVotesOnTimelineInput_1.TimelineCreateNestedOneWithoutVotesOnTimelineInput)
], VotesOnTimelineCreateWithoutUserInput.prototype, "timeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], VotesOnTimelineCreateWithoutUserInput.prototype, "vote", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VotesOnTimelineCreateWithoutUserInput.prototype, "createdAt", void 0);
VotesOnTimelineCreateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnTimelineCreateWithoutUserInput", {
        isAbstract: true
    })
], VotesOnTimelineCreateWithoutUserInput);
exports.VotesOnTimelineCreateWithoutUserInput = VotesOnTimelineCreateWithoutUserInput;
