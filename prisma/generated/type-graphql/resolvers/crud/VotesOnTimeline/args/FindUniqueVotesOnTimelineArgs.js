"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueVotesOnTimelineArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnTimelineWhereUniqueInput_1 = require("../../../inputs/VotesOnTimelineWhereUniqueInput");
let FindUniqueVotesOnTimelineArgs = class FindUniqueVotesOnTimelineArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineWhereUniqueInput_1.VotesOnTimelineWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineWhereUniqueInput_1.VotesOnTimelineWhereUniqueInput)
], FindUniqueVotesOnTimelineArgs.prototype, "where", void 0);
FindUniqueVotesOnTimelineArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueVotesOnTimelineArgs);
exports.FindUniqueVotesOnTimelineArgs = FindUniqueVotesOnTimelineArgs;
