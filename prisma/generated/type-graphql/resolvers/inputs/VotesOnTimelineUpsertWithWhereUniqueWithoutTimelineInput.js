"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnTimelineUpsertWithWhereUniqueWithoutTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnTimelineCreateWithoutTimelineInput_1 = require("../inputs/VotesOnTimelineCreateWithoutTimelineInput");
const VotesOnTimelineUpdateWithoutTimelineInput_1 = require("../inputs/VotesOnTimelineUpdateWithoutTimelineInput");
const VotesOnTimelineWhereUniqueInput_1 = require("../inputs/VotesOnTimelineWhereUniqueInput");
let VotesOnTimelineUpsertWithWhereUniqueWithoutTimelineInput = class VotesOnTimelineUpsertWithWhereUniqueWithoutTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineWhereUniqueInput_1.VotesOnTimelineWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineWhereUniqueInput_1.VotesOnTimelineWhereUniqueInput)
], VotesOnTimelineUpsertWithWhereUniqueWithoutTimelineInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineUpdateWithoutTimelineInput_1.VotesOnTimelineUpdateWithoutTimelineInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineUpdateWithoutTimelineInput_1.VotesOnTimelineUpdateWithoutTimelineInput)
], VotesOnTimelineUpsertWithWhereUniqueWithoutTimelineInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineCreateWithoutTimelineInput_1.VotesOnTimelineCreateWithoutTimelineInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineCreateWithoutTimelineInput_1.VotesOnTimelineCreateWithoutTimelineInput)
], VotesOnTimelineUpsertWithWhereUniqueWithoutTimelineInput.prototype, "create", void 0);
VotesOnTimelineUpsertWithWhereUniqueWithoutTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnTimelineUpsertWithWhereUniqueWithoutTimelineInput", {
        isAbstract: true
    })
], VotesOnTimelineUpsertWithWhereUniqueWithoutTimelineInput);
exports.VotesOnTimelineUpsertWithWhereUniqueWithoutTimelineInput = VotesOnTimelineUpsertWithWhereUniqueWithoutTimelineInput;
