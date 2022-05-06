"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVotesOnTimelineArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnTimelineUpdateInput_1 = require("../../../inputs/VotesOnTimelineUpdateInput");
const VotesOnTimelineWhereUniqueInput_1 = require("../../../inputs/VotesOnTimelineWhereUniqueInput");
let UpdateVotesOnTimelineArgs = class UpdateVotesOnTimelineArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineUpdateInput_1.VotesOnTimelineUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineUpdateInput_1.VotesOnTimelineUpdateInput)
], UpdateVotesOnTimelineArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineWhereUniqueInput_1.VotesOnTimelineWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineWhereUniqueInput_1.VotesOnTimelineWhereUniqueInput)
], UpdateVotesOnTimelineArgs.prototype, "where", void 0);
UpdateVotesOnTimelineArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateVotesOnTimelineArgs);
exports.UpdateVotesOnTimelineArgs = UpdateVotesOnTimelineArgs;
