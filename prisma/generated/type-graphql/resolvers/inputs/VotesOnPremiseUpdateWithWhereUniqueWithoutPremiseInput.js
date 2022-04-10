"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnPremiseUpdateWithWhereUniqueWithoutPremiseInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnPremiseUpdateWithoutPremiseInput_1 = require("../inputs/VotesOnPremiseUpdateWithoutPremiseInput");
const VotesOnPremiseWhereUniqueInput_1 = require("../inputs/VotesOnPremiseWhereUniqueInput");
let VotesOnPremiseUpdateWithWhereUniqueWithoutPremiseInput = class VotesOnPremiseUpdateWithWhereUniqueWithoutPremiseInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseWhereUniqueInput_1.VotesOnPremiseWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseWhereUniqueInput_1.VotesOnPremiseWhereUniqueInput)
], VotesOnPremiseUpdateWithWhereUniqueWithoutPremiseInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseUpdateWithoutPremiseInput_1.VotesOnPremiseUpdateWithoutPremiseInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseUpdateWithoutPremiseInput_1.VotesOnPremiseUpdateWithoutPremiseInput)
], VotesOnPremiseUpdateWithWhereUniqueWithoutPremiseInput.prototype, "data", void 0);
VotesOnPremiseUpdateWithWhereUniqueWithoutPremiseInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnPremiseUpdateWithWhereUniqueWithoutPremiseInput", {
        isAbstract: true
    })
], VotesOnPremiseUpdateWithWhereUniqueWithoutPremiseInput);
exports.VotesOnPremiseUpdateWithWhereUniqueWithoutPremiseInput = VotesOnPremiseUpdateWithWhereUniqueWithoutPremiseInput;
