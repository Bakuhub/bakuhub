"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyTagsOnVisionsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnVisionsCreateManyInput_1 = require("../../../inputs/TagsOnVisionsCreateManyInput");
let CreateManyTagsOnVisionsArgs = class CreateManyTagsOnVisionsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnVisionsCreateManyInput_1.TagsOnVisionsCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyTagsOnVisionsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyTagsOnVisionsArgs.prototype, "skipDuplicates", void 0);
CreateManyTagsOnVisionsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyTagsOnVisionsArgs);
exports.CreateManyTagsOnVisionsArgs = CreateManyTagsOnVisionsArgs;
