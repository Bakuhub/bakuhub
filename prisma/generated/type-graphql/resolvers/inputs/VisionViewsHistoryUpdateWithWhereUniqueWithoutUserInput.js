"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionViewsHistoryUpdateWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionViewsHistoryUpdateWithoutUserInput_1 = require("../inputs/VisionViewsHistoryUpdateWithoutUserInput");
const VisionViewsHistoryWhereUniqueInput_1 = require("../inputs/VisionViewsHistoryWhereUniqueInput");
let VisionViewsHistoryUpdateWithWhereUniqueWithoutUserInput = class VisionViewsHistoryUpdateWithWhereUniqueWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionViewsHistoryWhereUniqueInput_1.VisionViewsHistoryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionViewsHistoryWhereUniqueInput_1.VisionViewsHistoryWhereUniqueInput)
], VisionViewsHistoryUpdateWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionViewsHistoryUpdateWithoutUserInput_1.VisionViewsHistoryUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionViewsHistoryUpdateWithoutUserInput_1.VisionViewsHistoryUpdateWithoutUserInput)
], VisionViewsHistoryUpdateWithWhereUniqueWithoutUserInput.prototype, "data", void 0);
VisionViewsHistoryUpdateWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionViewsHistoryUpdateWithWhereUniqueWithoutUserInput", {
        isAbstract: true
    })
], VisionViewsHistoryUpdateWithWhereUniqueWithoutUserInput);
exports.VisionViewsHistoryUpdateWithWhereUniqueWithoutUserInput = VisionViewsHistoryUpdateWithWhereUniqueWithoutUserInput;
