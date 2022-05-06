"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertVotesOnTimelineArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnTimelineCreateInput_1 = require("../../../inputs/VotesOnTimelineCreateInput");
const VotesOnTimelineUpdateInput_1 = require("../../../inputs/VotesOnTimelineUpdateInput");
const VotesOnTimelineWhereUniqueInput_1 = require("../../../inputs/VotesOnTimelineWhereUniqueInput");
let UpsertVotesOnTimelineArgs = class UpsertVotesOnTimelineArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineWhereUniqueInput_1.VotesOnTimelineWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineWhereUniqueInput_1.VotesOnTimelineWhereUniqueInput)
], UpsertVotesOnTimelineArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineCreateInput_1.VotesOnTimelineCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineCreateInput_1.VotesOnTimelineCreateInput)
], UpsertVotesOnTimelineArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineUpdateInput_1.VotesOnTimelineUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineUpdateInput_1.VotesOnTimelineUpdateInput)
], UpsertVotesOnTimelineArgs.prototype, "update", void 0);
UpsertVotesOnTimelineArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertVotesOnTimelineArgs);
exports.UpsertVotesOnTimelineArgs = UpsertVotesOnTimelineArgs;
