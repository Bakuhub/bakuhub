"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnTimelineUpdateWithWhereUniqueWithoutTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnTimelineUpdateWithoutTimelineInput_1 = require("../inputs/VotesOnTimelineUpdateWithoutTimelineInput");
const VotesOnTimelineWhereUniqueInput_1 = require("../inputs/VotesOnTimelineWhereUniqueInput");
let VotesOnTimelineUpdateWithWhereUniqueWithoutTimelineInput = class VotesOnTimelineUpdateWithWhereUniqueWithoutTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineWhereUniqueInput_1.VotesOnTimelineWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineWhereUniqueInput_1.VotesOnTimelineWhereUniqueInput)
], VotesOnTimelineUpdateWithWhereUniqueWithoutTimelineInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineUpdateWithoutTimelineInput_1.VotesOnTimelineUpdateWithoutTimelineInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineUpdateWithoutTimelineInput_1.VotesOnTimelineUpdateWithoutTimelineInput)
], VotesOnTimelineUpdateWithWhereUniqueWithoutTimelineInput.prototype, "data", void 0);
VotesOnTimelineUpdateWithWhereUniqueWithoutTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnTimelineUpdateWithWhereUniqueWithoutTimelineInput", {
        isAbstract: true
    })
], VotesOnTimelineUpdateWithWhereUniqueWithoutTimelineInput);
exports.VotesOnTimelineUpdateWithWhereUniqueWithoutTimelineInput = VotesOnTimelineUpdateWithWhereUniqueWithoutTimelineInput;
