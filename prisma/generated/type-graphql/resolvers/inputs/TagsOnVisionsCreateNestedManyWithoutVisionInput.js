"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnVisionsCreateNestedManyWithoutVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnVisionsCreateManyVisionInputEnvelope_1 = require("../inputs/TagsOnVisionsCreateManyVisionInputEnvelope");
const TagsOnVisionsCreateOrConnectWithoutVisionInput_1 = require("../inputs/TagsOnVisionsCreateOrConnectWithoutVisionInput");
const TagsOnVisionsCreateWithoutVisionInput_1 = require("../inputs/TagsOnVisionsCreateWithoutVisionInput");
const TagsOnVisionsWhereUniqueInput_1 = require("../inputs/TagsOnVisionsWhereUniqueInput");
let TagsOnVisionsCreateNestedManyWithoutVisionInput = class TagsOnVisionsCreateNestedManyWithoutVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnVisionsCreateWithoutVisionInput_1.TagsOnVisionsCreateWithoutVisionInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnVisionsCreateNestedManyWithoutVisionInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnVisionsCreateOrConnectWithoutVisionInput_1.TagsOnVisionsCreateOrConnectWithoutVisionInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnVisionsCreateNestedManyWithoutVisionInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnVisionsCreateManyVisionInputEnvelope_1.TagsOnVisionsCreateManyVisionInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnVisionsCreateManyVisionInputEnvelope_1.TagsOnVisionsCreateManyVisionInputEnvelope)
], TagsOnVisionsCreateNestedManyWithoutVisionInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnVisionsWhereUniqueInput_1.TagsOnVisionsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnVisionsCreateNestedManyWithoutVisionInput.prototype, "connect", void 0);
TagsOnVisionsCreateNestedManyWithoutVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnVisionsCreateNestedManyWithoutVisionInput", {
        isAbstract: true
    })
], TagsOnVisionsCreateNestedManyWithoutVisionInput);
exports.TagsOnVisionsCreateNestedManyWithoutVisionInput = TagsOnVisionsCreateNestedManyWithoutVisionInput;
