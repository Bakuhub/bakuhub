"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnThreadUpdateManyWithWhereWithoutThreadInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnThreadScalarWhereInput_1 = require("../inputs/VotesOnThreadScalarWhereInput");
const VotesOnThreadUpdateManyMutationInput_1 = require("../inputs/VotesOnThreadUpdateManyMutationInput");
let VotesOnThreadUpdateManyWithWhereWithoutThreadInput = class VotesOnThreadUpdateManyWithWhereWithoutThreadInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadScalarWhereInput_1.VotesOnThreadScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnThreadScalarWhereInput_1.VotesOnThreadScalarWhereInput)
], VotesOnThreadUpdateManyWithWhereWithoutThreadInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadUpdateManyMutationInput_1.VotesOnThreadUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnThreadUpdateManyMutationInput_1.VotesOnThreadUpdateManyMutationInput)
], VotesOnThreadUpdateManyWithWhereWithoutThreadInput.prototype, "data", void 0);
VotesOnThreadUpdateManyWithWhereWithoutThreadInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnThreadUpdateManyWithWhereWithoutThreadInput", {
        isAbstract: true
    })
], VotesOnThreadUpdateManyWithWhereWithoutThreadInput);
exports.VotesOnThreadUpdateManyWithWhereWithoutThreadInput = VotesOnThreadUpdateManyWithWhereWithoutThreadInput;
