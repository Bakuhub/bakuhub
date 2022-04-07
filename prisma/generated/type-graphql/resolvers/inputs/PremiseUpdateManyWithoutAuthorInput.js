"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremiseUpdateManyWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremiseCreateManyAuthorInputEnvelope_1 = require("../inputs/PremiseCreateManyAuthorInputEnvelope");
const PremiseCreateOrConnectWithoutAuthorInput_1 = require("../inputs/PremiseCreateOrConnectWithoutAuthorInput");
const PremiseCreateWithoutAuthorInput_1 = require("../inputs/PremiseCreateWithoutAuthorInput");
const PremiseScalarWhereInput_1 = require("../inputs/PremiseScalarWhereInput");
const PremiseUpdateManyWithWhereWithoutAuthorInput_1 = require("../inputs/PremiseUpdateManyWithWhereWithoutAuthorInput");
const PremiseUpdateWithWhereUniqueWithoutAuthorInput_1 = require("../inputs/PremiseUpdateWithWhereUniqueWithoutAuthorInput");
const PremiseUpsertWithWhereUniqueWithoutAuthorInput_1 = require("../inputs/PremiseUpsertWithWhereUniqueWithoutAuthorInput");
const PremiseWhereUniqueInput_1 = require("../inputs/PremiseWhereUniqueInput");
let PremiseUpdateManyWithoutAuthorInput = class PremiseUpdateManyWithoutAuthorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PremiseCreateWithoutAuthorInput_1.PremiseCreateWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PremiseUpdateManyWithoutAuthorInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PremiseCreateOrConnectWithoutAuthorInput_1.PremiseCreateOrConnectWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PremiseUpdateManyWithoutAuthorInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PremiseUpsertWithWhereUniqueWithoutAuthorInput_1.PremiseUpsertWithWhereUniqueWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PremiseUpdateManyWithoutAuthorInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseCreateManyAuthorInputEnvelope_1.PremiseCreateManyAuthorInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseCreateManyAuthorInputEnvelope_1.PremiseCreateManyAuthorInputEnvelope)
], PremiseUpdateManyWithoutAuthorInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PremiseWhereUniqueInput_1.PremiseWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PremiseUpdateManyWithoutAuthorInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PremiseWhereUniqueInput_1.PremiseWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PremiseUpdateManyWithoutAuthorInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PremiseWhereUniqueInput_1.PremiseWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PremiseUpdateManyWithoutAuthorInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PremiseWhereUniqueInput_1.PremiseWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PremiseUpdateManyWithoutAuthorInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PremiseUpdateWithWhereUniqueWithoutAuthorInput_1.PremiseUpdateWithWhereUniqueWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PremiseUpdateManyWithoutAuthorInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PremiseUpdateManyWithWhereWithoutAuthorInput_1.PremiseUpdateManyWithWhereWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PremiseUpdateManyWithoutAuthorInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PremiseScalarWhereInput_1.PremiseScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PremiseUpdateManyWithoutAuthorInput.prototype, "deleteMany", void 0);
PremiseUpdateManyWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PremiseUpdateManyWithoutAuthorInput", {
        isAbstract: true
    })
], PremiseUpdateManyWithoutAuthorInput);
exports.PremiseUpdateManyWithoutAuthorInput = PremiseUpdateManyWithoutAuthorInput;
