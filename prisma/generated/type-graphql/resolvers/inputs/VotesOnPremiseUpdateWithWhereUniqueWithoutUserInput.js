"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnPremiseUpdateWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnPremiseUpdateWithoutUserInput_1 = require("../inputs/VotesOnPremiseUpdateWithoutUserInput");
const VotesOnPremiseWhereUniqueInput_1 = require("../inputs/VotesOnPremiseWhereUniqueInput");
let VotesOnPremiseUpdateWithWhereUniqueWithoutUserInput = class VotesOnPremiseUpdateWithWhereUniqueWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseWhereUniqueInput_1.VotesOnPremiseWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseWhereUniqueInput_1.VotesOnPremiseWhereUniqueInput)
], VotesOnPremiseUpdateWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseUpdateWithoutUserInput_1.VotesOnPremiseUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseUpdateWithoutUserInput_1.VotesOnPremiseUpdateWithoutUserInput)
], VotesOnPremiseUpdateWithWhereUniqueWithoutUserInput.prototype, "data", void 0);
VotesOnPremiseUpdateWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnPremiseUpdateWithWhereUniqueWithoutUserInput", {
        isAbstract: true
    })
], VotesOnPremiseUpdateWithWhereUniqueWithoutUserInput);
exports.VotesOnPremiseUpdateWithWhereUniqueWithoutUserInput = VotesOnPremiseUpdateWithWhereUniqueWithoutUserInput;
