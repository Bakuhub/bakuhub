"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupscriptionsOnTimelinesWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SupscriptionsOnTimelinesUserIdTimelineIdCompoundUniqueInput_1 = require("../inputs/SupscriptionsOnTimelinesUserIdTimelineIdCompoundUniqueInput");
let SupscriptionsOnTimelinesWhereUniqueInput = class SupscriptionsOnTimelinesWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SupscriptionsOnTimelinesUserIdTimelineIdCompoundUniqueInput_1.SupscriptionsOnTimelinesUserIdTimelineIdCompoundUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SupscriptionsOnTimelinesUserIdTimelineIdCompoundUniqueInput_1.SupscriptionsOnTimelinesUserIdTimelineIdCompoundUniqueInput)
], SupscriptionsOnTimelinesWhereUniqueInput.prototype, "userId_timelineId", void 0);
SupscriptionsOnTimelinesWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SupscriptionsOnTimelinesWhereUniqueInput", {
        isAbstract: true
    })
], SupscriptionsOnTimelinesWhereUniqueInput);
exports.SupscriptionsOnTimelinesWhereUniqueInput = SupscriptionsOnTimelinesWhereUniqueInput;
