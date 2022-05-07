"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnVisionsCreateNestedManyWithoutTagInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnVisionsCreateManyTagInputEnvelope_1 = require("../inputs/TagsOnVisionsCreateManyTagInputEnvelope");
const TagsOnVisionsCreateOrConnectWithoutTagInput_1 = require("../inputs/TagsOnVisionsCreateOrConnectWithoutTagInput");
const TagsOnVisionsCreateWithoutTagInput_1 = require("../inputs/TagsOnVisionsCreateWithoutTagInput");
const TagsOnVisionsWhereUniqueInput_1 = require("../inputs/TagsOnVisionsWhereUniqueInput");
let TagsOnVisionsCreateNestedManyWithoutTagInput = class TagsOnVisionsCreateNestedManyWithoutTagInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnVisionsCreateWithoutTagInput_1.TagsOnVisionsCreateWithoutTagInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnVisionsCreateNestedManyWithoutTagInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnVisionsCreateOrConnectWithoutTagInput_1.TagsOnVisionsCreateOrConnectWithoutTagInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnVisionsCreateNestedManyWithoutTagInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnVisionsCreateManyTagInputEnvelope_1.TagsOnVisionsCreateManyTagInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnVisionsCreateManyTagInputEnvelope_1.TagsOnVisionsCreateManyTagInputEnvelope)
], TagsOnVisionsCreateNestedManyWithoutTagInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnVisionsWhereUniqueInput_1.TagsOnVisionsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnVisionsCreateNestedManyWithoutTagInput.prototype, "connect", void 0);
TagsOnVisionsCreateNestedManyWithoutTagInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnVisionsCreateNestedManyWithoutTagInput", {
        isAbstract: true
    })
], TagsOnVisionsCreateNestedManyWithoutTagInput);
exports.TagsOnVisionsCreateNestedManyWithoutTagInput = TagsOnVisionsCreateNestedManyWithoutTagInput;
