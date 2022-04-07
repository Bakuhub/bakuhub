"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyTagsOnTimelinesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnTimelinesCreateManyInput_1 = require("../../../inputs/TagsOnTimelinesCreateManyInput");
let CreateManyTagsOnTimelinesArgs = class CreateManyTagsOnTimelinesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnTimelinesCreateManyInput_1.TagsOnTimelinesCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyTagsOnTimelinesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyTagsOnTimelinesArgs.prototype, "skipDuplicates", void 0);
CreateManyTagsOnTimelinesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyTagsOnTimelinesArgs);
exports.CreateManyTagsOnTimelinesArgs = CreateManyTagsOnTimelinesArgs;
