"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnVisionsUpdateManyWithoutVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnVisionsCreateManyVisionInputEnvelope_1 = require("../inputs/ReactionOnVisionsCreateManyVisionInputEnvelope");
const ReactionOnVisionsCreateOrConnectWithoutVisionInput_1 = require("../inputs/ReactionOnVisionsCreateOrConnectWithoutVisionInput");
const ReactionOnVisionsCreateWithoutVisionInput_1 = require("../inputs/ReactionOnVisionsCreateWithoutVisionInput");
const ReactionOnVisionsScalarWhereInput_1 = require("../inputs/ReactionOnVisionsScalarWhereInput");
const ReactionOnVisionsUpdateManyWithWhereWithoutVisionInput_1 = require("../inputs/ReactionOnVisionsUpdateManyWithWhereWithoutVisionInput");
const ReactionOnVisionsUpdateWithWhereUniqueWithoutVisionInput_1 = require("../inputs/ReactionOnVisionsUpdateWithWhereUniqueWithoutVisionInput");
const ReactionOnVisionsUpsertWithWhereUniqueWithoutVisionInput_1 = require("../inputs/ReactionOnVisionsUpsertWithWhereUniqueWithoutVisionInput");
const ReactionOnVisionsWhereUniqueInput_1 = require("../inputs/ReactionOnVisionsWhereUniqueInput");
let ReactionOnVisionsUpdateManyWithoutVisionInput = class ReactionOnVisionsUpdateManyWithoutVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnVisionsCreateWithoutVisionInput_1.ReactionOnVisionsCreateWithoutVisionInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnVisionsUpdateManyWithoutVisionInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnVisionsCreateOrConnectWithoutVisionInput_1.ReactionOnVisionsCreateOrConnectWithoutVisionInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnVisionsUpdateManyWithoutVisionInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnVisionsUpsertWithWhereUniqueWithoutVisionInput_1.ReactionOnVisionsUpsertWithWhereUniqueWithoutVisionInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnVisionsUpdateManyWithoutVisionInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnVisionsCreateManyVisionInputEnvelope_1.ReactionOnVisionsCreateManyVisionInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnVisionsCreateManyVisionInputEnvelope_1.ReactionOnVisionsCreateManyVisionInputEnvelope)
], ReactionOnVisionsUpdateManyWithoutVisionInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnVisionsWhereUniqueInput_1.ReactionOnVisionsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnVisionsUpdateManyWithoutVisionInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnVisionsWhereUniqueInput_1.ReactionOnVisionsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnVisionsUpdateManyWithoutVisionInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnVisionsWhereUniqueInput_1.ReactionOnVisionsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnVisionsUpdateManyWithoutVisionInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnVisionsWhereUniqueInput_1.ReactionOnVisionsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnVisionsUpdateManyWithoutVisionInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnVisionsUpdateWithWhereUniqueWithoutVisionInput_1.ReactionOnVisionsUpdateWithWhereUniqueWithoutVisionInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnVisionsUpdateManyWithoutVisionInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnVisionsUpdateManyWithWhereWithoutVisionInput_1.ReactionOnVisionsUpdateManyWithWhereWithoutVisionInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnVisionsUpdateManyWithoutVisionInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnVisionsScalarWhereInput_1.ReactionOnVisionsScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnVisionsUpdateManyWithoutVisionInput.prototype, "deleteMany", void 0);
ReactionOnVisionsUpdateManyWithoutVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnVisionsUpdateManyWithoutVisionInput", {
        isAbstract: true
    })
], ReactionOnVisionsUpdateManyWithoutVisionInput);
exports.ReactionOnVisionsUpdateManyWithoutVisionInput = ReactionOnVisionsUpdateManyWithoutVisionInput;
