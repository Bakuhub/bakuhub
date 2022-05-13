"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionViewsHistoryCreateNestedManyWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionViewsHistoryCreateManyUserInputEnvelope_1 = require("../inputs/VisionViewsHistoryCreateManyUserInputEnvelope");
const VisionViewsHistoryCreateOrConnectWithoutUserInput_1 = require("../inputs/VisionViewsHistoryCreateOrConnectWithoutUserInput");
const VisionViewsHistoryCreateWithoutUserInput_1 = require("../inputs/VisionViewsHistoryCreateWithoutUserInput");
const VisionViewsHistoryWhereUniqueInput_1 = require("../inputs/VisionViewsHistoryWhereUniqueInput");
let VisionViewsHistoryCreateNestedManyWithoutUserInput = class VisionViewsHistoryCreateNestedManyWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionViewsHistoryCreateWithoutUserInput_1.VisionViewsHistoryCreateWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionViewsHistoryCreateNestedManyWithoutUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionViewsHistoryCreateOrConnectWithoutUserInput_1.VisionViewsHistoryCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionViewsHistoryCreateNestedManyWithoutUserInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionViewsHistoryCreateManyUserInputEnvelope_1.VisionViewsHistoryCreateManyUserInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionViewsHistoryCreateManyUserInputEnvelope_1.VisionViewsHistoryCreateManyUserInputEnvelope)
], VisionViewsHistoryCreateNestedManyWithoutUserInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionViewsHistoryWhereUniqueInput_1.VisionViewsHistoryWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionViewsHistoryCreateNestedManyWithoutUserInput.prototype, "connect", void 0);
VisionViewsHistoryCreateNestedManyWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionViewsHistoryCreateNestedManyWithoutUserInput", {
        isAbstract: true
    })
], VisionViewsHistoryCreateNestedManyWithoutUserInput);
exports.VisionViewsHistoryCreateNestedManyWithoutUserInput = VisionViewsHistoryCreateNestedManyWithoutUserInput;
