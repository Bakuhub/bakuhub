"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTagsOnPremisesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnPremisesWhereUniqueInput_1 = require("../../../inputs/TagsOnPremisesWhereUniqueInput");
let DeleteTagsOnPremisesArgs = class DeleteTagsOnPremisesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesWhereUniqueInput_1.TagsOnPremisesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesWhereUniqueInput_1.TagsOnPremisesWhereUniqueInput)
], DeleteTagsOnPremisesArgs.prototype, "where", void 0);
DeleteTagsOnPremisesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteTagsOnPremisesArgs);
exports.DeleteTagsOnPremisesArgs = DeleteTagsOnPremisesArgs;
