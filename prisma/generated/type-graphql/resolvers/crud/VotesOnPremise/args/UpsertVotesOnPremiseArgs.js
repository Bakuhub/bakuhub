"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertVotesOnPremiseArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnPremiseCreateInput_1 = require("../../../inputs/VotesOnPremiseCreateInput");
const VotesOnPremiseUpdateInput_1 = require("../../../inputs/VotesOnPremiseUpdateInput");
const VotesOnPremiseWhereUniqueInput_1 = require("../../../inputs/VotesOnPremiseWhereUniqueInput");
let UpsertVotesOnPremiseArgs = class UpsertVotesOnPremiseArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseWhereUniqueInput_1.VotesOnPremiseWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseWhereUniqueInput_1.VotesOnPremiseWhereUniqueInput)
], UpsertVotesOnPremiseArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseCreateInput_1.VotesOnPremiseCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseCreateInput_1.VotesOnPremiseCreateInput)
], UpsertVotesOnPremiseArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseUpdateInput_1.VotesOnPremiseUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseUpdateInput_1.VotesOnPremiseUpdateInput)
], UpsertVotesOnPremiseArgs.prototype, "update", void 0);
UpsertVotesOnPremiseArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertVotesOnPremiseArgs);
exports.UpsertVotesOnPremiseArgs = UpsertVotesOnPremiseArgs;
