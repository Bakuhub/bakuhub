"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnTimelineWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnTimelineUserIdTimelineIdCompoundUniqueInput_1 = require("../inputs/VotesOnTimelineUserIdTimelineIdCompoundUniqueInput");
let VotesOnTimelineWhereUniqueInput = class VotesOnTimelineWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineUserIdTimelineIdCompoundUniqueInput_1.VotesOnTimelineUserIdTimelineIdCompoundUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineUserIdTimelineIdCompoundUniqueInput_1.VotesOnTimelineUserIdTimelineIdCompoundUniqueInput)
], VotesOnTimelineWhereUniqueInput.prototype, "userId_timelineId", void 0);
VotesOnTimelineWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnTimelineWhereUniqueInput", {
        isAbstract: true
    })
], VotesOnTimelineWhereUniqueInput);
exports.VotesOnTimelineWhereUniqueInput = VotesOnTimelineWhereUniqueInput;
