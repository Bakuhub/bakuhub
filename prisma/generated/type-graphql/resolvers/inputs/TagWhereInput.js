"use strict";
var TagWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const TagsOnPremisesListRelationFilter_1 = require("../inputs/TagsOnPremisesListRelationFilter");
const TagsOnTimelinesListRelationFilter_1 = require("../inputs/TagsOnTimelinesListRelationFilter");
let TagWhereInput = TagWhereInput_1 = class TagWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], TagWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TagWhereInput.prototype, "label", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesListRelationFilter_1.TagsOnPremisesListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesListRelationFilter_1.TagsOnPremisesListRelationFilter)
], TagWhereInput.prototype, "tagsOnPremises", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesListRelationFilter_1.TagsOnTimelinesListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesListRelationFilter_1.TagsOnTimelinesListRelationFilter)
], TagWhereInput.prototype, "tagsOnTimelines", void 0);
TagWhereInput = TagWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("TagWhereInput", {
        isAbstract: true
    })
], TagWhereInput);
exports.TagWhereInput = TagWhereInput;
