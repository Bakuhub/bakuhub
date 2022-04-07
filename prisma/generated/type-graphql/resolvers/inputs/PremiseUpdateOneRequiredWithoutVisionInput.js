"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremiseUpdateOneRequiredWithoutVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremiseCreateOrConnectWithoutVisionInput_1 = require("../inputs/PremiseCreateOrConnectWithoutVisionInput");
const PremiseCreateWithoutVisionInput_1 = require("../inputs/PremiseCreateWithoutVisionInput");
const PremiseUpdateWithoutVisionInput_1 = require("../inputs/PremiseUpdateWithoutVisionInput");
const PremiseUpsertWithoutVisionInput_1 = require("../inputs/PremiseUpsertWithoutVisionInput");
const PremiseWhereUniqueInput_1 = require("../inputs/PremiseWhereUniqueInput");
let PremiseUpdateOneRequiredWithoutVisionInput = class PremiseUpdateOneRequiredWithoutVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseCreateWithoutVisionInput_1.PremiseCreateWithoutVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseCreateWithoutVisionInput_1.PremiseCreateWithoutVisionInput)
], PremiseUpdateOneRequiredWithoutVisionInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseCreateOrConnectWithoutVisionInput_1.PremiseCreateOrConnectWithoutVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseCreateOrConnectWithoutVisionInput_1.PremiseCreateOrConnectWithoutVisionInput)
], PremiseUpdateOneRequiredWithoutVisionInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseUpsertWithoutVisionInput_1.PremiseUpsertWithoutVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseUpsertWithoutVisionInput_1.PremiseUpsertWithoutVisionInput)
], PremiseUpdateOneRequiredWithoutVisionInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseWhereUniqueInput_1.PremiseWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseWhereUniqueInput_1.PremiseWhereUniqueInput)
], PremiseUpdateOneRequiredWithoutVisionInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseUpdateWithoutVisionInput_1.PremiseUpdateWithoutVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseUpdateWithoutVisionInput_1.PremiseUpdateWithoutVisionInput)
], PremiseUpdateOneRequiredWithoutVisionInput.prototype, "update", void 0);
PremiseUpdateOneRequiredWithoutVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PremiseUpdateOneRequiredWithoutVisionInput", {
        isAbstract: true
    })
], PremiseUpdateOneRequiredWithoutVisionInput);
exports.PremiseUpdateOneRequiredWithoutVisionInput = PremiseUpdateOneRequiredWithoutVisionInput;
