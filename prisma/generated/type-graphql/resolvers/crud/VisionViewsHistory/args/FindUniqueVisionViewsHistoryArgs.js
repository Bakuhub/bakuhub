"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueVisionViewsHistoryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionViewsHistoryWhereUniqueInput_1 = require("../../../inputs/VisionViewsHistoryWhereUniqueInput");
let FindUniqueVisionViewsHistoryArgs = class FindUniqueVisionViewsHistoryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionViewsHistoryWhereUniqueInput_1.VisionViewsHistoryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionViewsHistoryWhereUniqueInput_1.VisionViewsHistoryWhereUniqueInput)
], FindUniqueVisionViewsHistoryArgs.prototype, "where", void 0);
FindUniqueVisionViewsHistoryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueVisionViewsHistoryArgs);
exports.FindUniqueVisionViewsHistoryArgs = FindUniqueVisionViewsHistoryArgs;
