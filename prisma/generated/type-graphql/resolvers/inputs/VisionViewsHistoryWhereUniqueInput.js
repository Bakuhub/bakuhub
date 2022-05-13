"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionViewsHistoryWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let VisionViewsHistoryWhereUniqueInput = class VisionViewsHistoryWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisionViewsHistoryWhereUniqueInput.prototype, "id", void 0);
VisionViewsHistoryWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionViewsHistoryWhereUniqueInput", {
        isAbstract: true
    })
], VisionViewsHistoryWhereUniqueInput);
exports.VisionViewsHistoryWhereUniqueInput = VisionViewsHistoryWhereUniqueInput;
