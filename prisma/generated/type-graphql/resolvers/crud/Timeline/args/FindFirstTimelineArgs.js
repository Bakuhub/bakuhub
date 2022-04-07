"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstTimelineArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TimelineOrderByWithRelationInput_1 = require("../../../inputs/TimelineOrderByWithRelationInput");
const TimelineWhereInput_1 = require("../../../inputs/TimelineWhereInput");
const TimelineWhereUniqueInput_1 = require("../../../inputs/TimelineWhereUniqueInput");
const TimelineScalarFieldEnum_1 = require("../../../../enums/TimelineScalarFieldEnum");
let FindFirstTimelineArgs = class FindFirstTimelineArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineWhereInput_1.TimelineWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineWhereInput_1.TimelineWhereInput)
], FindFirstTimelineArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TimelineOrderByWithRelationInput_1.TimelineOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstTimelineArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineWhereUniqueInput_1.TimelineWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineWhereUniqueInput_1.TimelineWhereUniqueInput)
], FindFirstTimelineArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstTimelineArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstTimelineArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TimelineScalarFieldEnum_1.TimelineScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstTimelineArgs.prototype, "distinct", void 0);
FindFirstTimelineArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstTimelineArgs);
exports.FindFirstTimelineArgs = FindFirstTimelineArgs;
