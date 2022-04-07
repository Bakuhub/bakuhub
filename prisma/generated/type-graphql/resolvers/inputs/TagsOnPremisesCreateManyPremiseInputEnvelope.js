"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnPremisesCreateManyPremiseInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnPremisesCreateManyPremiseInput_1 = require("../inputs/TagsOnPremisesCreateManyPremiseInput");
let TagsOnPremisesCreateManyPremiseInputEnvelope = class TagsOnPremisesCreateManyPremiseInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnPremisesCreateManyPremiseInput_1.TagsOnPremisesCreateManyPremiseInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnPremisesCreateManyPremiseInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], TagsOnPremisesCreateManyPremiseInputEnvelope.prototype, "skipDuplicates", void 0);
TagsOnPremisesCreateManyPremiseInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnPremisesCreateManyPremiseInputEnvelope", {
        isAbstract: true
    })
], TagsOnPremisesCreateManyPremiseInputEnvelope);
exports.TagsOnPremisesCreateManyPremiseInputEnvelope = TagsOnPremisesCreateManyPremiseInputEnvelope;
