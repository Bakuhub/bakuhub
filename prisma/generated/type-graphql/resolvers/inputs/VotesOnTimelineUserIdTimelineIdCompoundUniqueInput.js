"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnTimelineUserIdTimelineIdCompoundUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let VotesOnTimelineUserIdTimelineIdCompoundUniqueInput = class VotesOnTimelineUserIdTimelineIdCompoundUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnTimelineUserIdTimelineIdCompoundUniqueInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnTimelineUserIdTimelineIdCompoundUniqueInput.prototype, "timelineId", void 0);
VotesOnTimelineUserIdTimelineIdCompoundUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnTimelineUserIdTimelineIdCompoundUniqueInput", {
        isAbstract: true
    })
], VotesOnTimelineUserIdTimelineIdCompoundUniqueInput);
exports.VotesOnTimelineUserIdTimelineIdCompoundUniqueInput = VotesOnTimelineUserIdTimelineIdCompoundUniqueInput;
