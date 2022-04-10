"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteVotesOnTimelineArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnTimelineWhereUniqueInput_1 = require("../../../inputs/VotesOnTimelineWhereUniqueInput");
let DeleteVotesOnTimelineArgs = class DeleteVotesOnTimelineArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineWhereUniqueInput_1.VotesOnTimelineWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineWhereUniqueInput_1.VotesOnTimelineWhereUniqueInput)
], DeleteVotesOnTimelineArgs.prototype, "where", void 0);
DeleteVotesOnTimelineArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteVotesOnTimelineArgs);
exports.DeleteVotesOnTimelineArgs = DeleteVotesOnTimelineArgs;
