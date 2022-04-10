"use strict";
var VotesOnTimelineScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnTimelineScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let VotesOnTimelineScalarWhereInput = VotesOnTimelineScalarWhereInput_1 = class VotesOnTimelineScalarWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnTimelineScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnTimelineScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnTimelineScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnTimelineScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnTimelineScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnTimelineScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], VotesOnTimelineScalarWhereInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], VotesOnTimelineScalarWhereInput.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], VotesOnTimelineScalarWhereInput.prototype, "vote", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], VotesOnTimelineScalarWhereInput.prototype, "createdAt", void 0);
VotesOnTimelineScalarWhereInput = VotesOnTimelineScalarWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnTimelineScalarWhereInput", {
        isAbstract: true
    })
], VotesOnTimelineScalarWhereInput);
exports.VotesOnTimelineScalarWhereInput = VotesOnTimelineScalarWhereInput;
