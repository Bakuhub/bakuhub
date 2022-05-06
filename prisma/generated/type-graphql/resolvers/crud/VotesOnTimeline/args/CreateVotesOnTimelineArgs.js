"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateVotesOnTimelineArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnTimelineCreateInput_1 = require("../../../inputs/VotesOnTimelineCreateInput");
let CreateVotesOnTimelineArgs = class CreateVotesOnTimelineArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineCreateInput_1.VotesOnTimelineCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineCreateInput_1.VotesOnTimelineCreateInput)
], CreateVotesOnTimelineArgs.prototype, "data", void 0);
CreateVotesOnTimelineArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateVotesOnTimelineArgs);
exports.CreateVotesOnTimelineArgs = CreateVotesOnTimelineArgs;
