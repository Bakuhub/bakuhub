"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnVisionUpdateWithWhereUniqueWithoutVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnVisionUpdateWithoutVisionInput_1 = require("../inputs/VotesOnVisionUpdateWithoutVisionInput");
const VotesOnVisionWhereUniqueInput_1 = require("../inputs/VotesOnVisionWhereUniqueInput");
let VotesOnVisionUpdateWithWhereUniqueWithoutVisionInput = class VotesOnVisionUpdateWithWhereUniqueWithoutVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionWhereUniqueInput_1.VotesOnVisionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnVisionWhereUniqueInput_1.VotesOnVisionWhereUniqueInput)
], VotesOnVisionUpdateWithWhereUniqueWithoutVisionInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionUpdateWithoutVisionInput_1.VotesOnVisionUpdateWithoutVisionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnVisionUpdateWithoutVisionInput_1.VotesOnVisionUpdateWithoutVisionInput)
], VotesOnVisionUpdateWithWhereUniqueWithoutVisionInput.prototype, "data", void 0);
VotesOnVisionUpdateWithWhereUniqueWithoutVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnVisionUpdateWithWhereUniqueWithoutVisionInput", {
        isAbstract: true
    })
], VotesOnVisionUpdateWithWhereUniqueWithoutVisionInput);
exports.VotesOnVisionUpdateWithWhereUniqueWithoutVisionInput = VotesOnVisionUpdateWithWhereUniqueWithoutVisionInput;
