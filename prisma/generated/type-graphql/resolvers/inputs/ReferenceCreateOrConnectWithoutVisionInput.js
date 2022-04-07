"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenceCreateOrConnectWithoutVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReferenceCreateWithoutVisionInput_1 = require("../inputs/ReferenceCreateWithoutVisionInput");
const ReferenceWhereUniqueInput_1 = require("../inputs/ReferenceWhereUniqueInput");
let ReferenceCreateOrConnectWithoutVisionInput = class ReferenceCreateOrConnectWithoutVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReferenceWhereUniqueInput_1.ReferenceWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReferenceWhereUniqueInput_1.ReferenceWhereUniqueInput)
], ReferenceCreateOrConnectWithoutVisionInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReferenceCreateWithoutVisionInput_1.ReferenceCreateWithoutVisionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReferenceCreateWithoutVisionInput_1.ReferenceCreateWithoutVisionInput)
], ReferenceCreateOrConnectWithoutVisionInput.prototype, "create", void 0);
ReferenceCreateOrConnectWithoutVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReferenceCreateOrConnectWithoutVisionInput", {
        isAbstract: true
    })
], ReferenceCreateOrConnectWithoutVisionInput);
exports.ReferenceCreateOrConnectWithoutVisionInput = ReferenceCreateOrConnectWithoutVisionInput;
