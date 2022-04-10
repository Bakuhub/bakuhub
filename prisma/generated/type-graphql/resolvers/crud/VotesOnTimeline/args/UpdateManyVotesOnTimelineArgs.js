"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyVotesOnTimelineArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnTimelineUpdateManyMutationInput_1 = require("../../../inputs/VotesOnTimelineUpdateManyMutationInput");
const VotesOnTimelineWhereInput_1 = require("../../../inputs/VotesOnTimelineWhereInput");
let UpdateManyVotesOnTimelineArgs = class UpdateManyVotesOnTimelineArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineUpdateManyMutationInput_1.VotesOnTimelineUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineUpdateManyMutationInput_1.VotesOnTimelineUpdateManyMutationInput)
], UpdateManyVotesOnTimelineArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineWhereInput_1.VotesOnTimelineWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineWhereInput_1.VotesOnTimelineWhereInput)
], UpdateManyVotesOnTimelineArgs.prototype, "where", void 0);
UpdateManyVotesOnTimelineArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyVotesOnTimelineArgs);
exports.UpdateManyVotesOnTimelineArgs = UpdateManyVotesOnTimelineArgs;
