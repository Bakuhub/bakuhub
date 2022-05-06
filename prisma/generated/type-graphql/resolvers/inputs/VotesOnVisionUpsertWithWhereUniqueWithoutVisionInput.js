"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnVisionUpsertWithWhereUniqueWithoutVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnVisionCreateWithoutVisionInput_1 = require("../inputs/VotesOnVisionCreateWithoutVisionInput");
const VotesOnVisionUpdateWithoutVisionInput_1 = require("../inputs/VotesOnVisionUpdateWithoutVisionInput");
const VotesOnVisionWhereUniqueInput_1 = require("../inputs/VotesOnVisionWhereUniqueInput");
let VotesOnVisionUpsertWithWhereUniqueWithoutVisionInput = class VotesOnVisionUpsertWithWhereUniqueWithoutVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionWhereUniqueInput_1.VotesOnVisionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnVisionWhereUniqueInput_1.VotesOnVisionWhereUniqueInput)
], VotesOnVisionUpsertWithWhereUniqueWithoutVisionInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionUpdateWithoutVisionInput_1.VotesOnVisionUpdateWithoutVisionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnVisionUpdateWithoutVisionInput_1.VotesOnVisionUpdateWithoutVisionInput)
], VotesOnVisionUpsertWithWhereUniqueWithoutVisionInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionCreateWithoutVisionInput_1.VotesOnVisionCreateWithoutVisionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnVisionCreateWithoutVisionInput_1.VotesOnVisionCreateWithoutVisionInput)
], VotesOnVisionUpsertWithWhereUniqueWithoutVisionInput.prototype, "create", void 0);
VotesOnVisionUpsertWithWhereUniqueWithoutVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnVisionUpsertWithWhereUniqueWithoutVisionInput", {
        isAbstract: true
    })
], VotesOnVisionUpsertWithWhereUniqueWithoutVisionInput);
exports.VotesOnVisionUpsertWithWhereUniqueWithoutVisionInput = VotesOnVisionUpsertWithWhereUniqueWithoutVisionInput;
