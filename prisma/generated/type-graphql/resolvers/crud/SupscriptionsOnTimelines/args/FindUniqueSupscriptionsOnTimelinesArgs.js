"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueSupscriptionsOnTimelinesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SupscriptionsOnTimelinesWhereUniqueInput_1 = require("../../../inputs/SupscriptionsOnTimelinesWhereUniqueInput");
let FindUniqueSupscriptionsOnTimelinesArgs = class FindUniqueSupscriptionsOnTimelinesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SupscriptionsOnTimelinesWhereUniqueInput_1.SupscriptionsOnTimelinesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SupscriptionsOnTimelinesWhereUniqueInput_1.SupscriptionsOnTimelinesWhereUniqueInput)
], FindUniqueSupscriptionsOnTimelinesArgs.prototype, "where", void 0);
FindUniqueSupscriptionsOnTimelinesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueSupscriptionsOnTimelinesArgs);
exports.FindUniqueSupscriptionsOnTimelinesArgs = FindUniqueSupscriptionsOnTimelinesArgs;
