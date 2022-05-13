"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateVisionViewsHistoryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionViewsHistoryCreateInput_1 = require("../../../inputs/VisionViewsHistoryCreateInput");
let CreateVisionViewsHistoryArgs = class CreateVisionViewsHistoryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionViewsHistoryCreateInput_1.VisionViewsHistoryCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionViewsHistoryCreateInput_1.VisionViewsHistoryCreateInput)
], CreateVisionViewsHistoryArgs.prototype, "data", void 0);
CreateVisionViewsHistoryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateVisionViewsHistoryArgs);
exports.CreateVisionViewsHistoryArgs = CreateVisionViewsHistoryArgs;
