"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupscriptionsOnTimelinesUserIdTimelineIdCompoundUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let SupscriptionsOnTimelinesUserIdTimelineIdCompoundUniqueInput = class SupscriptionsOnTimelinesUserIdTimelineIdCompoundUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SupscriptionsOnTimelinesUserIdTimelineIdCompoundUniqueInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SupscriptionsOnTimelinesUserIdTimelineIdCompoundUniqueInput.prototype, "timelineId", void 0);
SupscriptionsOnTimelinesUserIdTimelineIdCompoundUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SupscriptionsOnTimelinesUserIdTimelineIdCompoundUniqueInput", {
        isAbstract: true
    })
], SupscriptionsOnTimelinesUserIdTimelineIdCompoundUniqueInput);
exports.SupscriptionsOnTimelinesUserIdTimelineIdCompoundUniqueInput = SupscriptionsOnTimelinesUserIdTimelineIdCompoundUniqueInput;
