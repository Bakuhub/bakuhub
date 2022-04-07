"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let VisionWhereUniqueInput = class VisionWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisionWhereUniqueInput.prototype, "id", void 0);
VisionWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionWhereUniqueInput", {
        isAbstract: true
    })
], VisionWhereUniqueInput);
exports.VisionWhereUniqueInput = VisionWhereUniqueInput;
