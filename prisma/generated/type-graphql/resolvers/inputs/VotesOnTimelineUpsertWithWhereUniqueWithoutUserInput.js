"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnTimelineUpsertWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnTimelineCreateWithoutUserInput_1 = require("../inputs/VotesOnTimelineCreateWithoutUserInput");
const VotesOnTimelineUpdateWithoutUserInput_1 = require("../inputs/VotesOnTimelineUpdateWithoutUserInput");
const VotesOnTimelineWhereUniqueInput_1 = require("../inputs/VotesOnTimelineWhereUniqueInput");
let VotesOnTimelineUpsertWithWhereUniqueWithoutUserInput = class VotesOnTimelineUpsertWithWhereUniqueWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineWhereUniqueInput_1.VotesOnTimelineWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineWhereUniqueInput_1.VotesOnTimelineWhereUniqueInput)
], VotesOnTimelineUpsertWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineUpdateWithoutUserInput_1.VotesOnTimelineUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineUpdateWithoutUserInput_1.VotesOnTimelineUpdateWithoutUserInput)
], VotesOnTimelineUpsertWithWhereUniqueWithoutUserInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineCreateWithoutUserInput_1.VotesOnTimelineCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineCreateWithoutUserInput_1.VotesOnTimelineCreateWithoutUserInput)
], VotesOnTimelineUpsertWithWhereUniqueWithoutUserInput.prototype, "create", void 0);
VotesOnTimelineUpsertWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnTimelineUpsertWithWhereUniqueWithoutUserInput", {
        isAbstract: true
    })
], VotesOnTimelineUpsertWithWhereUniqueWithoutUserInput);
exports.VotesOnTimelineUpsertWithWhereUniqueWithoutUserInput = VotesOnTimelineUpsertWithWhereUniqueWithoutUserInput;
