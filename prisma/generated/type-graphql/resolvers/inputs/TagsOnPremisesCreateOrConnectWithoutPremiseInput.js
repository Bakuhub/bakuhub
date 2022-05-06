"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnPremisesCreateOrConnectWithoutPremiseInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnPremisesCreateWithoutPremiseInput_1 = require("../inputs/TagsOnPremisesCreateWithoutPremiseInput");
const TagsOnPremisesWhereUniqueInput_1 = require("../inputs/TagsOnPremisesWhereUniqueInput");
let TagsOnPremisesCreateOrConnectWithoutPremiseInput = class TagsOnPremisesCreateOrConnectWithoutPremiseInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesWhereUniqueInput_1.TagsOnPremisesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesWhereUniqueInput_1.TagsOnPremisesWhereUniqueInput)
], TagsOnPremisesCreateOrConnectWithoutPremiseInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesCreateWithoutPremiseInput_1.TagsOnPremisesCreateWithoutPremiseInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesCreateWithoutPremiseInput_1.TagsOnPremisesCreateWithoutPremiseInput)
], TagsOnPremisesCreateOrConnectWithoutPremiseInput.prototype, "create", void 0);
TagsOnPremisesCreateOrConnectWithoutPremiseInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnPremisesCreateOrConnectWithoutPremiseInput", {
        isAbstract: true
    })
], TagsOnPremisesCreateOrConnectWithoutPremiseInput);
exports.TagsOnPremisesCreateOrConnectWithoutPremiseInput = TagsOnPremisesCreateOrConnectWithoutPremiseInput;
