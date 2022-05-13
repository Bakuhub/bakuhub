"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertVisionViewsHistoryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionViewsHistoryCreateInput_1 = require("../../../inputs/VisionViewsHistoryCreateInput");
const VisionViewsHistoryUpdateInput_1 = require("../../../inputs/VisionViewsHistoryUpdateInput");
const VisionViewsHistoryWhereUniqueInput_1 = require("../../../inputs/VisionViewsHistoryWhereUniqueInput");
let UpsertVisionViewsHistoryArgs = class UpsertVisionViewsHistoryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionViewsHistoryWhereUniqueInput_1.VisionViewsHistoryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionViewsHistoryWhereUniqueInput_1.VisionViewsHistoryWhereUniqueInput)
], UpsertVisionViewsHistoryArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionViewsHistoryCreateInput_1.VisionViewsHistoryCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionViewsHistoryCreateInput_1.VisionViewsHistoryCreateInput)
], UpsertVisionViewsHistoryArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionViewsHistoryUpdateInput_1.VisionViewsHistoryUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionViewsHistoryUpdateInput_1.VisionViewsHistoryUpdateInput)
], UpsertVisionViewsHistoryArgs.prototype, "update", void 0);
UpsertVisionViewsHistoryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertVisionViewsHistoryArgs);
exports.UpsertVisionViewsHistoryArgs = UpsertVisionViewsHistoryArgs;
