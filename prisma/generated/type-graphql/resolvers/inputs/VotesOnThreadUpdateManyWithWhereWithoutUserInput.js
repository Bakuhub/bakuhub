"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnThreadUpdateManyWithWhereWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnThreadScalarWhereInput_1 = require("../inputs/VotesOnThreadScalarWhereInput");
const VotesOnThreadUpdateManyMutationInput_1 = require("../inputs/VotesOnThreadUpdateManyMutationInput");
let VotesOnThreadUpdateManyWithWhereWithoutUserInput = class VotesOnThreadUpdateManyWithWhereWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadScalarWhereInput_1.VotesOnThreadScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnThreadScalarWhereInput_1.VotesOnThreadScalarWhereInput)
], VotesOnThreadUpdateManyWithWhereWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadUpdateManyMutationInput_1.VotesOnThreadUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnThreadUpdateManyMutationInput_1.VotesOnThreadUpdateManyMutationInput)
], VotesOnThreadUpdateManyWithWhereWithoutUserInput.prototype, "data", void 0);
VotesOnThreadUpdateManyWithWhereWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnThreadUpdateManyWithWhereWithoutUserInput", {
        isAbstract: true
    })
], VotesOnThreadUpdateManyWithWhereWithoutUserInput);
exports.VotesOnThreadUpdateManyWithWhereWithoutUserInput = VotesOnThreadUpdateManyWithWhereWithoutUserInput;
