"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueVotesOnPremiseArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnPremiseWhereUniqueInput_1 = require("../../../inputs/VotesOnPremiseWhereUniqueInput");
let FindUniqueVotesOnPremiseArgs = class FindUniqueVotesOnPremiseArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseWhereUniqueInput_1.VotesOnPremiseWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseWhereUniqueInput_1.VotesOnPremiseWhereUniqueInput)
], FindUniqueVotesOnPremiseArgs.prototype, "where", void 0);
FindUniqueVotesOnPremiseArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueVotesOnPremiseArgs);
exports.FindUniqueVotesOnPremiseArgs = FindUniqueVotesOnPremiseArgs;
