"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenceUpsertWithoutVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReferenceCreateWithoutVisionInput_1 = require("../inputs/ReferenceCreateWithoutVisionInput");
const ReferenceUpdateWithoutVisionInput_1 = require("../inputs/ReferenceUpdateWithoutVisionInput");
let ReferenceUpsertWithoutVisionInput = class ReferenceUpsertWithoutVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReferenceUpdateWithoutVisionInput_1.ReferenceUpdateWithoutVisionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReferenceUpdateWithoutVisionInput_1.ReferenceUpdateWithoutVisionInput)
], ReferenceUpsertWithoutVisionInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReferenceCreateWithoutVisionInput_1.ReferenceCreateWithoutVisionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReferenceCreateWithoutVisionInput_1.ReferenceCreateWithoutVisionInput)
], ReferenceUpsertWithoutVisionInput.prototype, "create", void 0);
ReferenceUpsertWithoutVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReferenceUpsertWithoutVisionInput", {
        isAbstract: true
    })
], ReferenceUpsertWithoutVisionInput);
exports.ReferenceUpsertWithoutVisionInput = ReferenceUpsertWithoutVisionInput;
