"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionViewsHistoryUpsertWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionViewsHistoryCreateWithoutUserInput_1 = require("../inputs/VisionViewsHistoryCreateWithoutUserInput");
const VisionViewsHistoryUpdateWithoutUserInput_1 = require("../inputs/VisionViewsHistoryUpdateWithoutUserInput");
const VisionViewsHistoryWhereUniqueInput_1 = require("../inputs/VisionViewsHistoryWhereUniqueInput");
let VisionViewsHistoryUpsertWithWhereUniqueWithoutUserInput = class VisionViewsHistoryUpsertWithWhereUniqueWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionViewsHistoryWhereUniqueInput_1.VisionViewsHistoryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionViewsHistoryWhereUniqueInput_1.VisionViewsHistoryWhereUniqueInput)
], VisionViewsHistoryUpsertWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionViewsHistoryUpdateWithoutUserInput_1.VisionViewsHistoryUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionViewsHistoryUpdateWithoutUserInput_1.VisionViewsHistoryUpdateWithoutUserInput)
], VisionViewsHistoryUpsertWithWhereUniqueWithoutUserInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionViewsHistoryCreateWithoutUserInput_1.VisionViewsHistoryCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionViewsHistoryCreateWithoutUserInput_1.VisionViewsHistoryCreateWithoutUserInput)
], VisionViewsHistoryUpsertWithWhereUniqueWithoutUserInput.prototype, "create", void 0);
VisionViewsHistoryUpsertWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionViewsHistoryUpsertWithWhereUniqueWithoutUserInput", {
        isAbstract: true
    })
], VisionViewsHistoryUpsertWithWhereUniqueWithoutUserInput);
exports.VisionViewsHistoryUpsertWithWhereUniqueWithoutUserInput = VisionViewsHistoryUpsertWithWhereUniqueWithoutUserInput;
