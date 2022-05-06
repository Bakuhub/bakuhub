"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyVotesOnPremiseArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnPremiseWhereInput_1 = require("../../../inputs/VotesOnPremiseWhereInput");
let DeleteManyVotesOnPremiseArgs = class DeleteManyVotesOnPremiseArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseWhereInput_1.VotesOnPremiseWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseWhereInput_1.VotesOnPremiseWhereInput)
], DeleteManyVotesOnPremiseArgs.prototype, "where", void 0);
DeleteManyVotesOnPremiseArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyVotesOnPremiseArgs);
exports.DeleteManyVotesOnPremiseArgs = DeleteManyVotesOnPremiseArgs;
