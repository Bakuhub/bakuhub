"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateVotesOnPremiseArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnPremiseCreateInput_1 = require("../../../inputs/VotesOnPremiseCreateInput");
let CreateVotesOnPremiseArgs = class CreateVotesOnPremiseArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseCreateInput_1.VotesOnPremiseCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseCreateInput_1.VotesOnPremiseCreateInput)
], CreateVotesOnPremiseArgs.prototype, "data", void 0);
CreateVotesOnPremiseArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateVotesOnPremiseArgs);
exports.CreateVotesOnPremiseArgs = CreateVotesOnPremiseArgs;
