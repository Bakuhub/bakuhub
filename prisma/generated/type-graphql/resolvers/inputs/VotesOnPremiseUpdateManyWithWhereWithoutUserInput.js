"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnPremiseUpdateManyWithWhereWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnPremiseScalarWhereInput_1 = require("../inputs/VotesOnPremiseScalarWhereInput");
const VotesOnPremiseUpdateManyMutationInput_1 = require("../inputs/VotesOnPremiseUpdateManyMutationInput");
let VotesOnPremiseUpdateManyWithWhereWithoutUserInput = class VotesOnPremiseUpdateManyWithWhereWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseScalarWhereInput_1.VotesOnPremiseScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseScalarWhereInput_1.VotesOnPremiseScalarWhereInput)
], VotesOnPremiseUpdateManyWithWhereWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseUpdateManyMutationInput_1.VotesOnPremiseUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseUpdateManyMutationInput_1.VotesOnPremiseUpdateManyMutationInput)
], VotesOnPremiseUpdateManyWithWhereWithoutUserInput.prototype, "data", void 0);
VotesOnPremiseUpdateManyWithWhereWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnPremiseUpdateManyWithWhereWithoutUserInput", {
        isAbstract: true
    })
], VotesOnPremiseUpdateManyWithWhereWithoutUserInput);
exports.VotesOnPremiseUpdateManyWithWhereWithoutUserInput = VotesOnPremiseUpdateManyWithWhereWithoutUserInput;
