"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnTimelineUpdateWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnTimelineUpdateWithoutUserInput_1 = require("../inputs/VotesOnTimelineUpdateWithoutUserInput");
const VotesOnTimelineWhereUniqueInput_1 = require("../inputs/VotesOnTimelineWhereUniqueInput");
let VotesOnTimelineUpdateWithWhereUniqueWithoutUserInput = class VotesOnTimelineUpdateWithWhereUniqueWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineWhereUniqueInput_1.VotesOnTimelineWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineWhereUniqueInput_1.VotesOnTimelineWhereUniqueInput)
], VotesOnTimelineUpdateWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineUpdateWithoutUserInput_1.VotesOnTimelineUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineUpdateWithoutUserInput_1.VotesOnTimelineUpdateWithoutUserInput)
], VotesOnTimelineUpdateWithWhereUniqueWithoutUserInput.prototype, "data", void 0);
VotesOnTimelineUpdateWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnTimelineUpdateWithWhereUniqueWithoutUserInput", {
        isAbstract: true
    })
], VotesOnTimelineUpdateWithWhereUniqueWithoutUserInput);
exports.VotesOnTimelineUpdateWithWhereUniqueWithoutUserInput = VotesOnTimelineUpdateWithWhereUniqueWithoutUserInput;
