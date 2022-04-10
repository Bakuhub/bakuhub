"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnTimelineCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TimelineCreateNestedOneWithoutVotesOnTimelineInput_1 = require("../inputs/TimelineCreateNestedOneWithoutVotesOnTimelineInput");
const UserCreateNestedOneWithoutVotesOnTimelineInput_1 = require("../inputs/UserCreateNestedOneWithoutVotesOnTimelineInput");
let VotesOnTimelineCreateInput = class VotesOnTimelineCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutVotesOnTimelineInput_1.UserCreateNestedOneWithoutVotesOnTimelineInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutVotesOnTimelineInput_1.UserCreateNestedOneWithoutVotesOnTimelineInput)
], VotesOnTimelineCreateInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineCreateNestedOneWithoutVotesOnTimelineInput_1.TimelineCreateNestedOneWithoutVotesOnTimelineInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TimelineCreateNestedOneWithoutVotesOnTimelineInput_1.TimelineCreateNestedOneWithoutVotesOnTimelineInput)
], VotesOnTimelineCreateInput.prototype, "timeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], VotesOnTimelineCreateInput.prototype, "vote", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VotesOnTimelineCreateInput.prototype, "createdAt", void 0);
VotesOnTimelineCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnTimelineCreateInput", {
        isAbstract: true
    })
], VotesOnTimelineCreateInput);
exports.VotesOnTimelineCreateInput = VotesOnTimelineCreateInput;
