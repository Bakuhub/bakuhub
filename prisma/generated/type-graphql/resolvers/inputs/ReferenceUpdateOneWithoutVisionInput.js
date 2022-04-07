"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenceUpdateOneWithoutVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReferenceCreateOrConnectWithoutVisionInput_1 = require("../inputs/ReferenceCreateOrConnectWithoutVisionInput");
const ReferenceCreateWithoutVisionInput_1 = require("../inputs/ReferenceCreateWithoutVisionInput");
const ReferenceUpdateWithoutVisionInput_1 = require("../inputs/ReferenceUpdateWithoutVisionInput");
const ReferenceUpsertWithoutVisionInput_1 = require("../inputs/ReferenceUpsertWithoutVisionInput");
const ReferenceWhereUniqueInput_1 = require("../inputs/ReferenceWhereUniqueInput");
let ReferenceUpdateOneWithoutVisionInput = class ReferenceUpdateOneWithoutVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReferenceCreateWithoutVisionInput_1.ReferenceCreateWithoutVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReferenceCreateWithoutVisionInput_1.ReferenceCreateWithoutVisionInput)
], ReferenceUpdateOneWithoutVisionInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReferenceCreateOrConnectWithoutVisionInput_1.ReferenceCreateOrConnectWithoutVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReferenceCreateOrConnectWithoutVisionInput_1.ReferenceCreateOrConnectWithoutVisionInput)
], ReferenceUpdateOneWithoutVisionInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReferenceUpsertWithoutVisionInput_1.ReferenceUpsertWithoutVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReferenceUpsertWithoutVisionInput_1.ReferenceUpsertWithoutVisionInput)
], ReferenceUpdateOneWithoutVisionInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ReferenceUpdateOneWithoutVisionInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ReferenceUpdateOneWithoutVisionInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReferenceWhereUniqueInput_1.ReferenceWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReferenceWhereUniqueInput_1.ReferenceWhereUniqueInput)
], ReferenceUpdateOneWithoutVisionInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReferenceUpdateWithoutVisionInput_1.ReferenceUpdateWithoutVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReferenceUpdateWithoutVisionInput_1.ReferenceUpdateWithoutVisionInput)
], ReferenceUpdateOneWithoutVisionInput.prototype, "update", void 0);
ReferenceUpdateOneWithoutVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReferenceUpdateOneWithoutVisionInput", {
        isAbstract: true
    })
], ReferenceUpdateOneWithoutVisionInput);
exports.ReferenceUpdateOneWithoutVisionInput = ReferenceUpdateOneWithoutVisionInput;
