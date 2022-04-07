"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyTagsOnPremisesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnPremisesCreateManyInput_1 = require("../../../inputs/TagsOnPremisesCreateManyInput");
let CreateManyTagsOnPremisesArgs = class CreateManyTagsOnPremisesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnPremisesCreateManyInput_1.TagsOnPremisesCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyTagsOnPremisesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyTagsOnPremisesArgs.prototype, "skipDuplicates", void 0);
CreateManyTagsOnPremisesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyTagsOnPremisesArgs);
exports.CreateManyTagsOnPremisesArgs = CreateManyTagsOnPremisesArgs;
