"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnThreadUpdateManyWithoutThreadInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnThreadCreateManyThreadInputEnvelope_1 = require("../inputs/VotesOnThreadCreateManyThreadInputEnvelope");
const VotesOnThreadCreateOrConnectWithoutThreadInput_1 = require("../inputs/VotesOnThreadCreateOrConnectWithoutThreadInput");
const VotesOnThreadCreateWithoutThreadInput_1 = require("../inputs/VotesOnThreadCreateWithoutThreadInput");
const VotesOnThreadScalarWhereInput_1 = require("../inputs/VotesOnThreadScalarWhereInput");
const VotesOnThreadUpdateManyWithWhereWithoutThreadInput_1 = require("../inputs/VotesOnThreadUpdateManyWithWhereWithoutThreadInput");
const VotesOnThreadUpdateWithWhereUniqueWithoutThreadInput_1 = require("../inputs/VotesOnThreadUpdateWithWhereUniqueWithoutThreadInput");
const VotesOnThreadUpsertWithWhereUniqueWithoutThreadInput_1 = require("../inputs/VotesOnThreadUpsertWithWhereUniqueWithoutThreadInput");
const VotesOnThreadWhereUniqueInput_1 = require("../inputs/VotesOnThreadWhereUniqueInput");
let VotesOnThreadUpdateManyWithoutThreadInput = class VotesOnThreadUpdateManyWithoutThreadInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnThreadCreateWithoutThreadInput_1.VotesOnThreadCreateWithoutThreadInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnThreadUpdateManyWithoutThreadInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnThreadCreateOrConnectWithoutThreadInput_1.VotesOnThreadCreateOrConnectWithoutThreadInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnThreadUpdateManyWithoutThreadInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnThreadUpsertWithWhereUniqueWithoutThreadInput_1.VotesOnThreadUpsertWithWhereUniqueWithoutThreadInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnThreadUpdateManyWithoutThreadInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadCreateManyThreadInputEnvelope_1.VotesOnThreadCreateManyThreadInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnThreadCreateManyThreadInputEnvelope_1.VotesOnThreadCreateManyThreadInputEnvelope)
], VotesOnThreadUpdateManyWithoutThreadInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnThreadWhereUniqueInput_1.VotesOnThreadWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnThreadUpdateManyWithoutThreadInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnThreadWhereUniqueInput_1.VotesOnThreadWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnThreadUpdateManyWithoutThreadInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnThreadWhereUniqueInput_1.VotesOnThreadWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnThreadUpdateManyWithoutThreadInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnThreadWhereUniqueInput_1.VotesOnThreadWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnThreadUpdateManyWithoutThreadInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnThreadUpdateWithWhereUniqueWithoutThreadInput_1.VotesOnThreadUpdateWithWhereUniqueWithoutThreadInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnThreadUpdateManyWithoutThreadInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnThreadUpdateManyWithWhereWithoutThreadInput_1.VotesOnThreadUpdateManyWithWhereWithoutThreadInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnThreadUpdateManyWithoutThreadInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnThreadScalarWhereInput_1.VotesOnThreadScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnThreadUpdateManyWithoutThreadInput.prototype, "deleteMany", void 0);
VotesOnThreadUpdateManyWithoutThreadInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnThreadUpdateManyWithoutThreadInput", {
        isAbstract: true
    })
], VotesOnThreadUpdateManyWithoutThreadInput);
exports.VotesOnThreadUpdateManyWithoutThreadInput = VotesOnThreadUpdateManyWithoutThreadInput;
