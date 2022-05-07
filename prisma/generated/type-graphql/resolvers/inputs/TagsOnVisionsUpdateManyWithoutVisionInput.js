"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnVisionsUpdateManyWithoutVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnVisionsCreateManyVisionInputEnvelope_1 = require("../inputs/TagsOnVisionsCreateManyVisionInputEnvelope");
const TagsOnVisionsCreateOrConnectWithoutVisionInput_1 = require("../inputs/TagsOnVisionsCreateOrConnectWithoutVisionInput");
const TagsOnVisionsCreateWithoutVisionInput_1 = require("../inputs/TagsOnVisionsCreateWithoutVisionInput");
const TagsOnVisionsScalarWhereInput_1 = require("../inputs/TagsOnVisionsScalarWhereInput");
const TagsOnVisionsUpdateManyWithWhereWithoutVisionInput_1 = require("../inputs/TagsOnVisionsUpdateManyWithWhereWithoutVisionInput");
const TagsOnVisionsUpdateWithWhereUniqueWithoutVisionInput_1 = require("../inputs/TagsOnVisionsUpdateWithWhereUniqueWithoutVisionInput");
const TagsOnVisionsUpsertWithWhereUniqueWithoutVisionInput_1 = require("../inputs/TagsOnVisionsUpsertWithWhereUniqueWithoutVisionInput");
const TagsOnVisionsWhereUniqueInput_1 = require("../inputs/TagsOnVisionsWhereUniqueInput");
let TagsOnVisionsUpdateManyWithoutVisionInput = class TagsOnVisionsUpdateManyWithoutVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnVisionsCreateWithoutVisionInput_1.TagsOnVisionsCreateWithoutVisionInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnVisionsUpdateManyWithoutVisionInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnVisionsCreateOrConnectWithoutVisionInput_1.TagsOnVisionsCreateOrConnectWithoutVisionInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnVisionsUpdateManyWithoutVisionInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnVisionsUpsertWithWhereUniqueWithoutVisionInput_1.TagsOnVisionsUpsertWithWhereUniqueWithoutVisionInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnVisionsUpdateManyWithoutVisionInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnVisionsCreateManyVisionInputEnvelope_1.TagsOnVisionsCreateManyVisionInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnVisionsCreateManyVisionInputEnvelope_1.TagsOnVisionsCreateManyVisionInputEnvelope)
], TagsOnVisionsUpdateManyWithoutVisionInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnVisionsWhereUniqueInput_1.TagsOnVisionsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnVisionsUpdateManyWithoutVisionInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnVisionsWhereUniqueInput_1.TagsOnVisionsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnVisionsUpdateManyWithoutVisionInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnVisionsWhereUniqueInput_1.TagsOnVisionsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnVisionsUpdateManyWithoutVisionInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnVisionsWhereUniqueInput_1.TagsOnVisionsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnVisionsUpdateManyWithoutVisionInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnVisionsUpdateWithWhereUniqueWithoutVisionInput_1.TagsOnVisionsUpdateWithWhereUniqueWithoutVisionInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnVisionsUpdateManyWithoutVisionInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnVisionsUpdateManyWithWhereWithoutVisionInput_1.TagsOnVisionsUpdateManyWithWhereWithoutVisionInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnVisionsUpdateManyWithoutVisionInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnVisionsScalarWhereInput_1.TagsOnVisionsScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnVisionsUpdateManyWithoutVisionInput.prototype, "deleteMany", void 0);
TagsOnVisionsUpdateManyWithoutVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnVisionsUpdateManyWithoutVisionInput", {
        isAbstract: true
    })
], TagsOnVisionsUpdateManyWithoutVisionInput);
exports.TagsOnVisionsUpdateManyWithoutVisionInput = TagsOnVisionsUpdateManyWithoutVisionInput;
