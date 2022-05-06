"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyVotesOnTimelineArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnTimelineWhereInput_1 = require("../../../inputs/VotesOnTimelineWhereInput");
let DeleteManyVotesOnTimelineArgs = class DeleteManyVotesOnTimelineArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineWhereInput_1.VotesOnTimelineWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineWhereInput_1.VotesOnTimelineWhereInput)
], DeleteManyVotesOnTimelineArgs.prototype, "where", void 0);
DeleteManyVotesOnTimelineArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyVotesOnTimelineArgs);
exports.DeleteManyVotesOnTimelineArgs = DeleteManyVotesOnTimelineArgs;
