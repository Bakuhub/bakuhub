"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManySupscriptionsOnTimelinesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SupscriptionsOnTimelinesUpdateManyMutationInput_1 = require("../../../inputs/SupscriptionsOnTimelinesUpdateManyMutationInput");
const SupscriptionsOnTimelinesWhereInput_1 = require("../../../inputs/SupscriptionsOnTimelinesWhereInput");
let UpdateManySupscriptionsOnTimelinesArgs = class UpdateManySupscriptionsOnTimelinesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SupscriptionsOnTimelinesUpdateManyMutationInput_1.SupscriptionsOnTimelinesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SupscriptionsOnTimelinesUpdateManyMutationInput_1.SupscriptionsOnTimelinesUpdateManyMutationInput)
], UpdateManySupscriptionsOnTimelinesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SupscriptionsOnTimelinesWhereInput_1.SupscriptionsOnTimelinesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SupscriptionsOnTimelinesWhereInput_1.SupscriptionsOnTimelinesWhereInput)
], UpdateManySupscriptionsOnTimelinesArgs.prototype, "where", void 0);
UpdateManySupscriptionsOnTimelinesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManySupscriptionsOnTimelinesArgs);
exports.UpdateManySupscriptionsOnTimelinesArgs = UpdateManySupscriptionsOnTimelinesArgs;
