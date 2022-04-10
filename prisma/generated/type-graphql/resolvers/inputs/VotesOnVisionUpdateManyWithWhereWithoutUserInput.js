"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnVisionUpdateManyWithWhereWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnVisionScalarWhereInput_1 = require("../inputs/VotesOnVisionScalarWhereInput");
const VotesOnVisionUpdateManyMutationInput_1 = require("../inputs/VotesOnVisionUpdateManyMutationInput");
let VotesOnVisionUpdateManyWithWhereWithoutUserInput = class VotesOnVisionUpdateManyWithWhereWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionScalarWhereInput_1.VotesOnVisionScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnVisionScalarWhereInput_1.VotesOnVisionScalarWhereInput)
], VotesOnVisionUpdateManyWithWhereWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionUpdateManyMutationInput_1.VotesOnVisionUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnVisionUpdateManyMutationInput_1.VotesOnVisionUpdateManyMutationInput)
], VotesOnVisionUpdateManyWithWhereWithoutUserInput.prototype, "data", void 0);
VotesOnVisionUpdateManyWithWhereWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnVisionUpdateManyWithWhereWithoutUserInput", {
        isAbstract: true
    })
], VotesOnVisionUpdateManyWithWhereWithoutUserInput);
exports.VotesOnVisionUpdateManyWithWhereWithoutUserInput = VotesOnVisionUpdateManyWithWhereWithoutUserInput;
