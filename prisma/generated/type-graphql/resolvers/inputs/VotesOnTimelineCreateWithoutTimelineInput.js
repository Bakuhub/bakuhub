"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnTimelineCreateWithoutTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateNestedOneWithoutVotesOnTimelineInput_1 = require("../inputs/UserCreateNestedOneWithoutVotesOnTimelineInput");
let VotesOnTimelineCreateWithoutTimelineInput = class VotesOnTimelineCreateWithoutTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutVotesOnTimelineInput_1.UserCreateNestedOneWithoutVotesOnTimelineInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutVotesOnTimelineInput_1.UserCreateNestedOneWithoutVotesOnTimelineInput)
], VotesOnTimelineCreateWithoutTimelineInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], VotesOnTimelineCreateWithoutTimelineInput.prototype, "vote", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VotesOnTimelineCreateWithoutTimelineInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VotesOnTimelineCreateWithoutTimelineInput.prototype, "updatedAt", void 0);
VotesOnTimelineCreateWithoutTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnTimelineCreateWithoutTimelineInput", {
        isAbstract: true
    })
], VotesOnTimelineCreateWithoutTimelineInput);
exports.VotesOnTimelineCreateWithoutTimelineInput = VotesOnTimelineCreateWithoutTimelineInput;
