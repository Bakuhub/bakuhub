"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteVisionViewsHistoryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionViewsHistoryWhereUniqueInput_1 = require("../../../inputs/VisionViewsHistoryWhereUniqueInput");
let DeleteVisionViewsHistoryArgs = class DeleteVisionViewsHistoryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionViewsHistoryWhereUniqueInput_1.VisionViewsHistoryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionViewsHistoryWhereUniqueInput_1.VisionViewsHistoryWhereUniqueInput)
], DeleteVisionViewsHistoryArgs.prototype, "where", void 0);
DeleteVisionViewsHistoryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteVisionViewsHistoryArgs);
exports.DeleteVisionViewsHistoryArgs = DeleteVisionViewsHistoryArgs;
