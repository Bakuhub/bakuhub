"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnThreadUpdateWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnThreadUpdateWithoutUserInput_1 = require("../inputs/VotesOnThreadUpdateWithoutUserInput");
const VotesOnThreadWhereUniqueInput_1 = require("../inputs/VotesOnThreadWhereUniqueInput");
let VotesOnThreadUpdateWithWhereUniqueWithoutUserInput = class VotesOnThreadUpdateWithWhereUniqueWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadWhereUniqueInput_1.VotesOnThreadWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnThreadWhereUniqueInput_1.VotesOnThreadWhereUniqueInput)
], VotesOnThreadUpdateWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadUpdateWithoutUserInput_1.VotesOnThreadUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnThreadUpdateWithoutUserInput_1.VotesOnThreadUpdateWithoutUserInput)
], VotesOnThreadUpdateWithWhereUniqueWithoutUserInput.prototype, "data", void 0);
VotesOnThreadUpdateWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnThreadUpdateWithWhereUniqueWithoutUserInput", {
        isAbstract: true
    })
], VotesOnThreadUpdateWithWhereUniqueWithoutUserInput);
exports.VotesOnThreadUpdateWithWhereUniqueWithoutUserInput = VotesOnThreadUpdateWithWhereUniqueWithoutUserInput;
