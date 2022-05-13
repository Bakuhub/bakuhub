"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionViewsHistoryCreateOrConnectWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionViewsHistoryCreateWithoutUserInput_1 = require("../inputs/VisionViewsHistoryCreateWithoutUserInput");
const VisionViewsHistoryWhereUniqueInput_1 = require("../inputs/VisionViewsHistoryWhereUniqueInput");
let VisionViewsHistoryCreateOrConnectWithoutUserInput = class VisionViewsHistoryCreateOrConnectWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionViewsHistoryWhereUniqueInput_1.VisionViewsHistoryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionViewsHistoryWhereUniqueInput_1.VisionViewsHistoryWhereUniqueInput)
], VisionViewsHistoryCreateOrConnectWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionViewsHistoryCreateWithoutUserInput_1.VisionViewsHistoryCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionViewsHistoryCreateWithoutUserInput_1.VisionViewsHistoryCreateWithoutUserInput)
], VisionViewsHistoryCreateOrConnectWithoutUserInput.prototype, "create", void 0);
VisionViewsHistoryCreateOrConnectWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionViewsHistoryCreateOrConnectWithoutUserInput", {
        isAbstract: true
    })
], VisionViewsHistoryCreateOrConnectWithoutUserInput);
exports.VisionViewsHistoryCreateOrConnectWithoutUserInput = VisionViewsHistoryCreateOrConnectWithoutUserInput;
