"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVotesOnPremiseArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnPremiseUpdateInput_1 = require("../../../inputs/VotesOnPremiseUpdateInput");
const VotesOnPremiseWhereUniqueInput_1 = require("../../../inputs/VotesOnPremiseWhereUniqueInput");
let UpdateVotesOnPremiseArgs = class UpdateVotesOnPremiseArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseUpdateInput_1.VotesOnPremiseUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseUpdateInput_1.VotesOnPremiseUpdateInput)
], UpdateVotesOnPremiseArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseWhereUniqueInput_1.VotesOnPremiseWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseWhereUniqueInput_1.VotesOnPremiseWhereUniqueInput)
], UpdateVotesOnPremiseArgs.prototype, "where", void 0);
UpdateVotesOnPremiseArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateVotesOnPremiseArgs);
exports.UpdateVotesOnPremiseArgs = UpdateVotesOnPremiseArgs;
