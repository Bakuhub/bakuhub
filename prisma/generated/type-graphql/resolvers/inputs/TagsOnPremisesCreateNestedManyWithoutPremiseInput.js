"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnPremisesCreateNestedManyWithoutPremiseInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnPremisesCreateManyPremiseInputEnvelope_1 = require("../inputs/TagsOnPremisesCreateManyPremiseInputEnvelope");
const TagsOnPremisesCreateOrConnectWithoutPremiseInput_1 = require("../inputs/TagsOnPremisesCreateOrConnectWithoutPremiseInput");
const TagsOnPremisesCreateWithoutPremiseInput_1 = require("../inputs/TagsOnPremisesCreateWithoutPremiseInput");
const TagsOnPremisesWhereUniqueInput_1 = require("../inputs/TagsOnPremisesWhereUniqueInput");
let TagsOnPremisesCreateNestedManyWithoutPremiseInput = class TagsOnPremisesCreateNestedManyWithoutPremiseInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnPremisesCreateWithoutPremiseInput_1.TagsOnPremisesCreateWithoutPremiseInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnPremisesCreateNestedManyWithoutPremiseInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnPremisesCreateOrConnectWithoutPremiseInput_1.TagsOnPremisesCreateOrConnectWithoutPremiseInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnPremisesCreateNestedManyWithoutPremiseInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesCreateManyPremiseInputEnvelope_1.TagsOnPremisesCreateManyPremiseInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesCreateManyPremiseInputEnvelope_1.TagsOnPremisesCreateManyPremiseInputEnvelope)
], TagsOnPremisesCreateNestedManyWithoutPremiseInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnPremisesWhereUniqueInput_1.TagsOnPremisesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnPremisesCreateNestedManyWithoutPremiseInput.prototype, "connect", void 0);
TagsOnPremisesCreateNestedManyWithoutPremiseInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnPremisesCreateNestedManyWithoutPremiseInput", {
        isAbstract: true
    })
], TagsOnPremisesCreateNestedManyWithoutPremiseInput);
exports.TagsOnPremisesCreateNestedManyWithoutPremiseInput = TagsOnPremisesCreateNestedManyWithoutPremiseInput;
