"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTagsOnTimelinesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnTimelinesWhereUniqueInput_1 = require("../../../inputs/TagsOnTimelinesWhereUniqueInput");
let DeleteTagsOnTimelinesArgs = class DeleteTagsOnTimelinesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesWhereUniqueInput_1.TagsOnTimelinesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesWhereUniqueInput_1.TagsOnTimelinesWhereUniqueInput)
], DeleteTagsOnTimelinesArgs.prototype, "where", void 0);
DeleteTagsOnTimelinesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteTagsOnTimelinesArgs);
exports.DeleteTagsOnTimelinesArgs = DeleteTagsOnTimelinesArgs;
