"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsOnPremisesUpdateManyWithoutPremiseInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionsOnPremisesCreateManyPremiseInputEnvelope_1 = require("../inputs/SubscriptionsOnPremisesCreateManyPremiseInputEnvelope");
const SubscriptionsOnPremisesCreateOrConnectWithoutPremiseInput_1 = require("../inputs/SubscriptionsOnPremisesCreateOrConnectWithoutPremiseInput");
const SubscriptionsOnPremisesCreateWithoutPremiseInput_1 = require("../inputs/SubscriptionsOnPremisesCreateWithoutPremiseInput");
const SubscriptionsOnPremisesScalarWhereInput_1 = require("../inputs/SubscriptionsOnPremisesScalarWhereInput");
const SubscriptionsOnPremisesUpdateManyWithWhereWithoutPremiseInput_1 = require("../inputs/SubscriptionsOnPremisesUpdateManyWithWhereWithoutPremiseInput");
const SubscriptionsOnPremisesUpdateWithWhereUniqueWithoutPremiseInput_1 = require("../inputs/SubscriptionsOnPremisesUpdateWithWhereUniqueWithoutPremiseInput");
const SubscriptionsOnPremisesUpsertWithWhereUniqueWithoutPremiseInput_1 = require("../inputs/SubscriptionsOnPremisesUpsertWithWhereUniqueWithoutPremiseInput");
const SubscriptionsOnPremisesWhereUniqueInput_1 = require("../inputs/SubscriptionsOnPremisesWhereUniqueInput");
let SubscriptionsOnPremisesUpdateManyWithoutPremiseInput = class SubscriptionsOnPremisesUpdateManyWithoutPremiseInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnPremisesCreateWithoutPremiseInput_1.SubscriptionsOnPremisesCreateWithoutPremiseInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubscriptionsOnPremisesUpdateManyWithoutPremiseInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnPremisesCreateOrConnectWithoutPremiseInput_1.SubscriptionsOnPremisesCreateOrConnectWithoutPremiseInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubscriptionsOnPremisesUpdateManyWithoutPremiseInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnPremisesUpsertWithWhereUniqueWithoutPremiseInput_1.SubscriptionsOnPremisesUpsertWithWhereUniqueWithoutPremiseInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubscriptionsOnPremisesUpdateManyWithoutPremiseInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnPremisesCreateManyPremiseInputEnvelope_1.SubscriptionsOnPremisesCreateManyPremiseInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnPremisesCreateManyPremiseInputEnvelope_1.SubscriptionsOnPremisesCreateManyPremiseInputEnvelope)
], SubscriptionsOnPremisesUpdateManyWithoutPremiseInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnPremisesWhereUniqueInput_1.SubscriptionsOnPremisesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubscriptionsOnPremisesUpdateManyWithoutPremiseInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnPremisesWhereUniqueInput_1.SubscriptionsOnPremisesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubscriptionsOnPremisesUpdateManyWithoutPremiseInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnPremisesWhereUniqueInput_1.SubscriptionsOnPremisesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubscriptionsOnPremisesUpdateManyWithoutPremiseInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnPremisesWhereUniqueInput_1.SubscriptionsOnPremisesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubscriptionsOnPremisesUpdateManyWithoutPremiseInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnPremisesUpdateWithWhereUniqueWithoutPremiseInput_1.SubscriptionsOnPremisesUpdateWithWhereUniqueWithoutPremiseInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubscriptionsOnPremisesUpdateManyWithoutPremiseInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnPremisesUpdateManyWithWhereWithoutPremiseInput_1.SubscriptionsOnPremisesUpdateManyWithWhereWithoutPremiseInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubscriptionsOnPremisesUpdateManyWithoutPremiseInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnPremisesScalarWhereInput_1.SubscriptionsOnPremisesScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubscriptionsOnPremisesUpdateManyWithoutPremiseInput.prototype, "deleteMany", void 0);
SubscriptionsOnPremisesUpdateManyWithoutPremiseInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SubscriptionsOnPremisesUpdateManyWithoutPremiseInput", {
        isAbstract: true
    })
], SubscriptionsOnPremisesUpdateManyWithoutPremiseInput);
exports.SubscriptionsOnPremisesUpdateManyWithoutPremiseInput = SubscriptionsOnPremisesUpdateManyWithoutPremiseInput;
