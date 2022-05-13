"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyVisionViewsHistoryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionViewsHistoryCreateManyInput_1 = require("../../../inputs/VisionViewsHistoryCreateManyInput");
let CreateManyVisionViewsHistoryArgs = class CreateManyVisionViewsHistoryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionViewsHistoryCreateManyInput_1.VisionViewsHistoryCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyVisionViewsHistoryArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyVisionViewsHistoryArgs.prototype, "skipDuplicates", void 0);
CreateManyVisionViewsHistoryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyVisionViewsHistoryArgs);
exports.CreateManyVisionViewsHistoryArgs = CreateManyVisionViewsHistoryArgs;
