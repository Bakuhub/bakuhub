"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnVisionUpsertWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnVisionCreateWithoutUserInput_1 = require("../inputs/VotesOnVisionCreateWithoutUserInput");
const VotesOnVisionUpdateWithoutUserInput_1 = require("../inputs/VotesOnVisionUpdateWithoutUserInput");
const VotesOnVisionWhereUniqueInput_1 = require("../inputs/VotesOnVisionWhereUniqueInput");
let VotesOnVisionUpsertWithWhereUniqueWithoutUserInput = class VotesOnVisionUpsertWithWhereUniqueWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionWhereUniqueInput_1.VotesOnVisionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnVisionWhereUniqueInput_1.VotesOnVisionWhereUniqueInput)
], VotesOnVisionUpsertWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionUpdateWithoutUserInput_1.VotesOnVisionUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnVisionUpdateWithoutUserInput_1.VotesOnVisionUpdateWithoutUserInput)
], VotesOnVisionUpsertWithWhereUniqueWithoutUserInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionCreateWithoutUserInput_1.VotesOnVisionCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnVisionCreateWithoutUserInput_1.VotesOnVisionCreateWithoutUserInput)
], VotesOnVisionUpsertWithWhereUniqueWithoutUserInput.prototype, "create", void 0);
VotesOnVisionUpsertWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnVisionUpsertWithWhereUniqueWithoutUserInput", {
        isAbstract: true
    })
], VotesOnVisionUpsertWithWhereUniqueWithoutUserInput);
exports.VotesOnVisionUpsertWithWhereUniqueWithoutUserInput = VotesOnVisionUpsertWithWhereUniqueWithoutUserInput;
