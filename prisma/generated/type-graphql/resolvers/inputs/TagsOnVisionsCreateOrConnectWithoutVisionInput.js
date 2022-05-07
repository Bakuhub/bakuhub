"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnVisionsCreateOrConnectWithoutVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnVisionsCreateWithoutVisionInput_1 = require("../inputs/TagsOnVisionsCreateWithoutVisionInput");
const TagsOnVisionsWhereUniqueInput_1 = require("../inputs/TagsOnVisionsWhereUniqueInput");
let TagsOnVisionsCreateOrConnectWithoutVisionInput = class TagsOnVisionsCreateOrConnectWithoutVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnVisionsWhereUniqueInput_1.TagsOnVisionsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnVisionsWhereUniqueInput_1.TagsOnVisionsWhereUniqueInput)
], TagsOnVisionsCreateOrConnectWithoutVisionInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnVisionsCreateWithoutVisionInput_1.TagsOnVisionsCreateWithoutVisionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnVisionsCreateWithoutVisionInput_1.TagsOnVisionsCreateWithoutVisionInput)
], TagsOnVisionsCreateOrConnectWithoutVisionInput.prototype, "create", void 0);
TagsOnVisionsCreateOrConnectWithoutVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnVisionsCreateOrConnectWithoutVisionInput", {
        isAbstract: true
    })
], TagsOnVisionsCreateOrConnectWithoutVisionInput);
exports.TagsOnVisionsCreateOrConnectWithoutVisionInput = TagsOnVisionsCreateOrConnectWithoutVisionInput;
