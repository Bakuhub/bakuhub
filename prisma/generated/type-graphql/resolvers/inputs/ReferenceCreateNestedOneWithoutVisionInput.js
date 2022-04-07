"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenceCreateNestedOneWithoutVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReferenceCreateOrConnectWithoutVisionInput_1 = require("../inputs/ReferenceCreateOrConnectWithoutVisionInput");
const ReferenceCreateWithoutVisionInput_1 = require("../inputs/ReferenceCreateWithoutVisionInput");
const ReferenceWhereUniqueInput_1 = require("../inputs/ReferenceWhereUniqueInput");
let ReferenceCreateNestedOneWithoutVisionInput = class ReferenceCreateNestedOneWithoutVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReferenceCreateWithoutVisionInput_1.ReferenceCreateWithoutVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReferenceCreateWithoutVisionInput_1.ReferenceCreateWithoutVisionInput)
], ReferenceCreateNestedOneWithoutVisionInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReferenceCreateOrConnectWithoutVisionInput_1.ReferenceCreateOrConnectWithoutVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReferenceCreateOrConnectWithoutVisionInput_1.ReferenceCreateOrConnectWithoutVisionInput)
], ReferenceCreateNestedOneWithoutVisionInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReferenceWhereUniqueInput_1.ReferenceWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReferenceWhereUniqueInput_1.ReferenceWhereUniqueInput)
], ReferenceCreateNestedOneWithoutVisionInput.prototype, "connect", void 0);
ReferenceCreateNestedOneWithoutVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReferenceCreateNestedOneWithoutVisionInput", {
        isAbstract: true
    })
], ReferenceCreateNestedOneWithoutVisionInput);
exports.ReferenceCreateNestedOneWithoutVisionInput = ReferenceCreateNestedOneWithoutVisionInput;
