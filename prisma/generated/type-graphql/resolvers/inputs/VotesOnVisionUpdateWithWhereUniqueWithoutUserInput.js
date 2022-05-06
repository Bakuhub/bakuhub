"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnVisionUpdateWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnVisionUpdateWithoutUserInput_1 = require("../inputs/VotesOnVisionUpdateWithoutUserInput");
const VotesOnVisionWhereUniqueInput_1 = require("../inputs/VotesOnVisionWhereUniqueInput");
let VotesOnVisionUpdateWithWhereUniqueWithoutUserInput = class VotesOnVisionUpdateWithWhereUniqueWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionWhereUniqueInput_1.VotesOnVisionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnVisionWhereUniqueInput_1.VotesOnVisionWhereUniqueInput)
], VotesOnVisionUpdateWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionUpdateWithoutUserInput_1.VotesOnVisionUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnVisionUpdateWithoutUserInput_1.VotesOnVisionUpdateWithoutUserInput)
], VotesOnVisionUpdateWithWhereUniqueWithoutUserInput.prototype, "data", void 0);
VotesOnVisionUpdateWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnVisionUpdateWithWhereUniqueWithoutUserInput", {
        isAbstract: true
    })
], VotesOnVisionUpdateWithWhereUniqueWithoutUserInput);
exports.VotesOnVisionUpdateWithWhereUniqueWithoutUserInput = VotesOnVisionUpdateWithWhereUniqueWithoutUserInput;
