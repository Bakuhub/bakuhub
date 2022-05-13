"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionViewsHistoryUpdateManyWithWhereWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionViewsHistoryScalarWhereInput_1 = require("../inputs/VisionViewsHistoryScalarWhereInput");
const VisionViewsHistoryUpdateManyMutationInput_1 = require("../inputs/VisionViewsHistoryUpdateManyMutationInput");
let VisionViewsHistoryUpdateManyWithWhereWithoutUserInput = class VisionViewsHistoryUpdateManyWithWhereWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionViewsHistoryScalarWhereInput_1.VisionViewsHistoryScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionViewsHistoryScalarWhereInput_1.VisionViewsHistoryScalarWhereInput)
], VisionViewsHistoryUpdateManyWithWhereWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionViewsHistoryUpdateManyMutationInput_1.VisionViewsHistoryUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionViewsHistoryUpdateManyMutationInput_1.VisionViewsHistoryUpdateManyMutationInput)
], VisionViewsHistoryUpdateManyWithWhereWithoutUserInput.prototype, "data", void 0);
VisionViewsHistoryUpdateManyWithWhereWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionViewsHistoryUpdateManyWithWhereWithoutUserInput", {
        isAbstract: true
    })
], VisionViewsHistoryUpdateManyWithWhereWithoutUserInput);
exports.VisionViewsHistoryUpdateManyWithWhereWithoutUserInput = VisionViewsHistoryUpdateManyWithWhereWithoutUserInput;
