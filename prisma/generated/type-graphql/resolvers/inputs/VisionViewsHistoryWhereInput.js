"use strict";
var VisionViewsHistoryWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionViewsHistoryWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
const VisionRelationFilter_1 = require("../inputs/VisionRelationFilter");
let VisionViewsHistoryWhereInput = VisionViewsHistoryWhereInput_1 = class VisionViewsHistoryWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionViewsHistoryWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionViewsHistoryWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionViewsHistoryWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionViewsHistoryWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionViewsHistoryWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionViewsHistoryWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], VisionViewsHistoryWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], VisionViewsHistoryWhereInput.prototype, "visionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionRelationFilter_1.VisionRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionRelationFilter_1.VisionRelationFilter)
], VisionViewsHistoryWhereInput.prototype, "vision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], VisionViewsHistoryWhereInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], VisionViewsHistoryWhereInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], VisionViewsHistoryWhereInput.prototype, "createdAt", void 0);
VisionViewsHistoryWhereInput = VisionViewsHistoryWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionViewsHistoryWhereInput", {
        isAbstract: true
    })
], VisionViewsHistoryWhereInput);
exports.VisionViewsHistoryWhereInput = VisionViewsHistoryWhereInput;
