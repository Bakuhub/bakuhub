"use strict";
var VisionViewsHistoryScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionViewsHistoryScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let VisionViewsHistoryScalarWhereInput = VisionViewsHistoryScalarWhereInput_1 = class VisionViewsHistoryScalarWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionViewsHistoryScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionViewsHistoryScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionViewsHistoryScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionViewsHistoryScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionViewsHistoryScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionViewsHistoryScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], VisionViewsHistoryScalarWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], VisionViewsHistoryScalarWhereInput.prototype, "visionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], VisionViewsHistoryScalarWhereInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], VisionViewsHistoryScalarWhereInput.prototype, "createdAt", void 0);
VisionViewsHistoryScalarWhereInput = VisionViewsHistoryScalarWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionViewsHistoryScalarWhereInput", {
        isAbstract: true
    })
], VisionViewsHistoryScalarWhereInput);
exports.VisionViewsHistoryScalarWhereInput = VisionViewsHistoryScalarWhereInput;
