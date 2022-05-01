"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupscriptionsOnTimelinesUpdateManyWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SupscriptionsOnTimelinesCreateManyUserInputEnvelope_1 = require("../inputs/SupscriptionsOnTimelinesCreateManyUserInputEnvelope");
const SupscriptionsOnTimelinesCreateOrConnectWithoutUserInput_1 = require("../inputs/SupscriptionsOnTimelinesCreateOrConnectWithoutUserInput");
const SupscriptionsOnTimelinesCreateWithoutUserInput_1 = require("../inputs/SupscriptionsOnTimelinesCreateWithoutUserInput");
const SupscriptionsOnTimelinesScalarWhereInput_1 = require("../inputs/SupscriptionsOnTimelinesScalarWhereInput");
const SupscriptionsOnTimelinesUpdateManyWithWhereWithoutUserInput_1 = require("../inputs/SupscriptionsOnTimelinesUpdateManyWithWhereWithoutUserInput");
const SupscriptionsOnTimelinesUpdateWithWhereUniqueWithoutUserInput_1 = require("../inputs/SupscriptionsOnTimelinesUpdateWithWhereUniqueWithoutUserInput");
const SupscriptionsOnTimelinesUpsertWithWhereUniqueWithoutUserInput_1 = require("../inputs/SupscriptionsOnTimelinesUpsertWithWhereUniqueWithoutUserInput");
const SupscriptionsOnTimelinesWhereUniqueInput_1 = require("../inputs/SupscriptionsOnTimelinesWhereUniqueInput");
let SupscriptionsOnTimelinesUpdateManyWithoutUserInput = class SupscriptionsOnTimelinesUpdateManyWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SupscriptionsOnTimelinesCreateWithoutUserInput_1.SupscriptionsOnTimelinesCreateWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SupscriptionsOnTimelinesUpdateManyWithoutUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SupscriptionsOnTimelinesCreateOrConnectWithoutUserInput_1.SupscriptionsOnTimelinesCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SupscriptionsOnTimelinesUpdateManyWithoutUserInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SupscriptionsOnTimelinesUpsertWithWhereUniqueWithoutUserInput_1.SupscriptionsOnTimelinesUpsertWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SupscriptionsOnTimelinesUpdateManyWithoutUserInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SupscriptionsOnTimelinesCreateManyUserInputEnvelope_1.SupscriptionsOnTimelinesCreateManyUserInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SupscriptionsOnTimelinesCreateManyUserInputEnvelope_1.SupscriptionsOnTimelinesCreateManyUserInputEnvelope)
], SupscriptionsOnTimelinesUpdateManyWithoutUserInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SupscriptionsOnTimelinesWhereUniqueInput_1.SupscriptionsOnTimelinesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SupscriptionsOnTimelinesUpdateManyWithoutUserInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SupscriptionsOnTimelinesWhereUniqueInput_1.SupscriptionsOnTimelinesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SupscriptionsOnTimelinesUpdateManyWithoutUserInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SupscriptionsOnTimelinesWhereUniqueInput_1.SupscriptionsOnTimelinesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SupscriptionsOnTimelinesUpdateManyWithoutUserInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SupscriptionsOnTimelinesWhereUniqueInput_1.SupscriptionsOnTimelinesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SupscriptionsOnTimelinesUpdateManyWithoutUserInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SupscriptionsOnTimelinesUpdateWithWhereUniqueWithoutUserInput_1.SupscriptionsOnTimelinesUpdateWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SupscriptionsOnTimelinesUpdateManyWithoutUserInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SupscriptionsOnTimelinesUpdateManyWithWhereWithoutUserInput_1.SupscriptionsOnTimelinesUpdateManyWithWhereWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SupscriptionsOnTimelinesUpdateManyWithoutUserInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SupscriptionsOnTimelinesScalarWhereInput_1.SupscriptionsOnTimelinesScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SupscriptionsOnTimelinesUpdateManyWithoutUserInput.prototype, "deleteMany", void 0);
SupscriptionsOnTimelinesUpdateManyWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SupscriptionsOnTimelinesUpdateManyWithoutUserInput", {
        isAbstract: true
    })
], SupscriptionsOnTimelinesUpdateManyWithoutUserInput);
exports.SupscriptionsOnTimelinesUpdateManyWithoutUserInput = SupscriptionsOnTimelinesUpdateManyWithoutUserInput;
