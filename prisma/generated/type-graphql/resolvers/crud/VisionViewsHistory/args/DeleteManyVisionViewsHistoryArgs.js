"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyVisionViewsHistoryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionViewsHistoryWhereInput_1 = require("../../../inputs/VisionViewsHistoryWhereInput");
let DeleteManyVisionViewsHistoryArgs = class DeleteManyVisionViewsHistoryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionViewsHistoryWhereInput_1.VisionViewsHistoryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionViewsHistoryWhereInput_1.VisionViewsHistoryWhereInput)
], DeleteManyVisionViewsHistoryArgs.prototype, "where", void 0);
DeleteManyVisionViewsHistoryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyVisionViewsHistoryArgs);
exports.DeleteManyVisionViewsHistoryArgs = DeleteManyVisionViewsHistoryArgs;
