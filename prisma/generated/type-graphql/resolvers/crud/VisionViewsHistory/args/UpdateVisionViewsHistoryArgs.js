"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVisionViewsHistoryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionViewsHistoryUpdateInput_1 = require("../../../inputs/VisionViewsHistoryUpdateInput");
const VisionViewsHistoryWhereUniqueInput_1 = require("../../../inputs/VisionViewsHistoryWhereUniqueInput");
let UpdateVisionViewsHistoryArgs = class UpdateVisionViewsHistoryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionViewsHistoryUpdateInput_1.VisionViewsHistoryUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionViewsHistoryUpdateInput_1.VisionViewsHistoryUpdateInput)
], UpdateVisionViewsHistoryArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionViewsHistoryWhereUniqueInput_1.VisionViewsHistoryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionViewsHistoryWhereUniqueInput_1.VisionViewsHistoryWhereUniqueInput)
], UpdateVisionViewsHistoryArgs.prototype, "where", void 0);
UpdateVisionViewsHistoryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateVisionViewsHistoryArgs);
exports.UpdateVisionViewsHistoryArgs = UpdateVisionViewsHistoryArgs;
