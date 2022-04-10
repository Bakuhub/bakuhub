"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteVotesOnPremiseArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnPremiseWhereUniqueInput_1 = require("../../../inputs/VotesOnPremiseWhereUniqueInput");
let DeleteVotesOnPremiseArgs = class DeleteVotesOnPremiseArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseWhereUniqueInput_1.VotesOnPremiseWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseWhereUniqueInput_1.VotesOnPremiseWhereUniqueInput)
], DeleteVotesOnPremiseArgs.prototype, "where", void 0);
DeleteVotesOnPremiseArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteVotesOnPremiseArgs);
exports.DeleteVotesOnPremiseArgs = DeleteVotesOnPremiseArgs;
