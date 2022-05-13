"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyVisionViewsHistoryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionViewsHistoryUpdateManyMutationInput_1 = require("../../../inputs/VisionViewsHistoryUpdateManyMutationInput");
const VisionViewsHistoryWhereInput_1 = require("../../../inputs/VisionViewsHistoryWhereInput");
let UpdateManyVisionViewsHistoryArgs = class UpdateManyVisionViewsHistoryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionViewsHistoryUpdateManyMutationInput_1.VisionViewsHistoryUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionViewsHistoryUpdateManyMutationInput_1.VisionViewsHistoryUpdateManyMutationInput)
], UpdateManyVisionViewsHistoryArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionViewsHistoryWhereInput_1.VisionViewsHistoryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionViewsHistoryWhereInput_1.VisionViewsHistoryWhereInput)
], UpdateManyVisionViewsHistoryArgs.prototype, "where", void 0);
UpdateManyVisionViewsHistoryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyVisionViewsHistoryArgs);
exports.UpdateManyVisionViewsHistoryArgs = UpdateManyVisionViewsHistoryArgs;
