"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSupscriptionsOnTimelinesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SupscriptionsOnTimelinesUpdateInput_1 = require("../../../inputs/SupscriptionsOnTimelinesUpdateInput");
const SupscriptionsOnTimelinesWhereUniqueInput_1 = require("../../../inputs/SupscriptionsOnTimelinesWhereUniqueInput");
let UpdateSupscriptionsOnTimelinesArgs = class UpdateSupscriptionsOnTimelinesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SupscriptionsOnTimelinesUpdateInput_1.SupscriptionsOnTimelinesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SupscriptionsOnTimelinesUpdateInput_1.SupscriptionsOnTimelinesUpdateInput)
], UpdateSupscriptionsOnTimelinesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SupscriptionsOnTimelinesWhereUniqueInput_1.SupscriptionsOnTimelinesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SupscriptionsOnTimelinesWhereUniqueInput_1.SupscriptionsOnTimelinesWhereUniqueInput)
], UpdateSupscriptionsOnTimelinesArgs.prototype, "where", void 0);
UpdateSupscriptionsOnTimelinesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateSupscriptionsOnTimelinesArgs);
exports.UpdateSupscriptionsOnTimelinesArgs = UpdateSupscriptionsOnTimelinesArgs;
