"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyVotesOnPremiseArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnPremiseUpdateManyMutationInput_1 = require("../../../inputs/VotesOnPremiseUpdateManyMutationInput");
const VotesOnPremiseWhereInput_1 = require("../../../inputs/VotesOnPremiseWhereInput");
let UpdateManyVotesOnPremiseArgs = class UpdateManyVotesOnPremiseArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseUpdateManyMutationInput_1.VotesOnPremiseUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseUpdateManyMutationInput_1.VotesOnPremiseUpdateManyMutationInput)
], UpdateManyVotesOnPremiseArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseWhereInput_1.VotesOnPremiseWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseWhereInput_1.VotesOnPremiseWhereInput)
], UpdateManyVotesOnPremiseArgs.prototype, "where", void 0);
UpdateManyVotesOnPremiseArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyVotesOnPremiseArgs);
exports.UpdateManyVotesOnPremiseArgs = UpdateManyVotesOnPremiseArgs;
