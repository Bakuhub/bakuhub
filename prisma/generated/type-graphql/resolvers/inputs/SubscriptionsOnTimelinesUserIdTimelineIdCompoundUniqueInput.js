"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsOnTimelinesUserIdTimelineIdCompoundUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let SubscriptionsOnTimelinesUserIdTimelineIdCompoundUniqueInput = class SubscriptionsOnTimelinesUserIdTimelineIdCompoundUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SubscriptionsOnTimelinesUserIdTimelineIdCompoundUniqueInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SubscriptionsOnTimelinesUserIdTimelineIdCompoundUniqueInput.prototype, "timelineId", void 0);
SubscriptionsOnTimelinesUserIdTimelineIdCompoundUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SubscriptionsOnTimelinesUserIdTimelineIdCompoundUniqueInput", {
        isAbstract: true
    })
], SubscriptionsOnTimelinesUserIdTimelineIdCompoundUniqueInput);
exports.SubscriptionsOnTimelinesUserIdTimelineIdCompoundUniqueInput = SubscriptionsOnTimelinesUserIdTimelineIdCompoundUniqueInput;
