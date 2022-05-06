"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsOnTimelinesWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionsOnTimelinesUserIdTimelineIdCompoundUniqueInput_1 = require("../inputs/SubscriptionsOnTimelinesUserIdTimelineIdCompoundUniqueInput");
let SubscriptionsOnTimelinesWhereUniqueInput = class SubscriptionsOnTimelinesWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnTimelinesUserIdTimelineIdCompoundUniqueInput_1.SubscriptionsOnTimelinesUserIdTimelineIdCompoundUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnTimelinesUserIdTimelineIdCompoundUniqueInput_1.SubscriptionsOnTimelinesUserIdTimelineIdCompoundUniqueInput)
], SubscriptionsOnTimelinesWhereUniqueInput.prototype, "userId_timelineId", void 0);
SubscriptionsOnTimelinesWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SubscriptionsOnTimelinesWhereUniqueInput", {
        isAbstract: true
    })
], SubscriptionsOnTimelinesWhereUniqueInput);
exports.SubscriptionsOnTimelinesWhereUniqueInput = SubscriptionsOnTimelinesWhereUniqueInput;
