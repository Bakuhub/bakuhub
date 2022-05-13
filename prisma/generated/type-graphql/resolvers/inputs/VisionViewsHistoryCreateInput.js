"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionViewsHistoryCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateNestedOneWithoutVisionViewsHistoryInput_1 = require("../inputs/UserCreateNestedOneWithoutVisionViewsHistoryInput");
const VisionCreateNestedOneWithoutVisionViewsHistoryInput_1 = require("../inputs/VisionCreateNestedOneWithoutVisionViewsHistoryInput");
let VisionViewsHistoryCreateInput = class VisionViewsHistoryCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisionViewsHistoryCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateNestedOneWithoutVisionViewsHistoryInput_1.VisionCreateNestedOneWithoutVisionViewsHistoryInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionCreateNestedOneWithoutVisionViewsHistoryInput_1.VisionCreateNestedOneWithoutVisionViewsHistoryInput)
], VisionViewsHistoryCreateInput.prototype, "vision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutVisionViewsHistoryInput_1.UserCreateNestedOneWithoutVisionViewsHistoryInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutVisionViewsHistoryInput_1.UserCreateNestedOneWithoutVisionViewsHistoryInput)
], VisionViewsHistoryCreateInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VisionViewsHistoryCreateInput.prototype, "createdAt", void 0);
VisionViewsHistoryCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionViewsHistoryCreateInput", {
        isAbstract: true
    })
], VisionViewsHistoryCreateInput);
exports.VisionViewsHistoryCreateInput = VisionViewsHistoryCreateInput;
