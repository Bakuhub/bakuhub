"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnVisionsCreateOrConnectWithoutTagInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnVisionsCreateWithoutTagInput_1 = require("../inputs/TagsOnVisionsCreateWithoutTagInput");
const TagsOnVisionsWhereUniqueInput_1 = require("../inputs/TagsOnVisionsWhereUniqueInput");
let TagsOnVisionsCreateOrConnectWithoutTagInput = class TagsOnVisionsCreateOrConnectWithoutTagInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnVisionsWhereUniqueInput_1.TagsOnVisionsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnVisionsWhereUniqueInput_1.TagsOnVisionsWhereUniqueInput)
], TagsOnVisionsCreateOrConnectWithoutTagInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnVisionsCreateWithoutTagInput_1.TagsOnVisionsCreateWithoutTagInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnVisionsCreateWithoutTagInput_1.TagsOnVisionsCreateWithoutTagInput)
], TagsOnVisionsCreateOrConnectWithoutTagInput.prototype, "create", void 0);
TagsOnVisionsCreateOrConnectWithoutTagInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnVisionsCreateOrConnectWithoutTagInput", {
        isAbstract: true
    })
], TagsOnVisionsCreateOrConnectWithoutTagInput);
exports.TagsOnVisionsCreateOrConnectWithoutTagInput = TagsOnVisionsCreateOrConnectWithoutTagInput;
