"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionUpdateOneWithoutNextVisionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionCreateOrConnectWithoutNextVisionsInput_1 = require("../inputs/VisionCreateOrConnectWithoutNextVisionsInput");
const VisionCreateWithoutNextVisionsInput_1 = require("../inputs/VisionCreateWithoutNextVisionsInput");
const VisionUpdateWithoutNextVisionsInput_1 = require("../inputs/VisionUpdateWithoutNextVisionsInput");
const VisionUpsertWithoutNextVisionsInput_1 = require("../inputs/VisionUpsertWithoutNextVisionsInput");
const VisionWhereUniqueInput_1 = require("../inputs/VisionWhereUniqueInput");
let VisionUpdateOneWithoutNextVisionsInput = class VisionUpdateOneWithoutNextVisionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateWithoutNextVisionsInput_1.VisionCreateWithoutNextVisionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionCreateWithoutNextVisionsInput_1.VisionCreateWithoutNextVisionsInput)
], VisionUpdateOneWithoutNextVisionsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateOrConnectWithoutNextVisionsInput_1.VisionCreateOrConnectWithoutNextVisionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionCreateOrConnectWithoutNextVisionsInput_1.VisionCreateOrConnectWithoutNextVisionsInput)
], VisionUpdateOneWithoutNextVisionsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionUpsertWithoutNextVisionsInput_1.VisionUpsertWithoutNextVisionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionUpsertWithoutNextVisionsInput_1.VisionUpsertWithoutNextVisionsInput)
], VisionUpdateOneWithoutNextVisionsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], VisionUpdateOneWithoutNextVisionsInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], VisionUpdateOneWithoutNextVisionsInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionWhereUniqueInput_1.VisionWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionWhereUniqueInput_1.VisionWhereUniqueInput)
], VisionUpdateOneWithoutNextVisionsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionUpdateWithoutNextVisionsInput_1.VisionUpdateWithoutNextVisionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionUpdateWithoutNextVisionsInput_1.VisionUpdateWithoutNextVisionsInput)
], VisionUpdateOneWithoutNextVisionsInput.prototype, "update", void 0);
VisionUpdateOneWithoutNextVisionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionUpdateOneWithoutNextVisionsInput", {
        isAbstract: true
    })
], VisionUpdateOneWithoutNextVisionsInput);
exports.VisionUpdateOneWithoutNextVisionsInput = VisionUpdateOneWithoutNextVisionsInput;
