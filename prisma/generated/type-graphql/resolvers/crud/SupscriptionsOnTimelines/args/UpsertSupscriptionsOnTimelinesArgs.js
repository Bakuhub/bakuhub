"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertSupscriptionsOnTimelinesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SupscriptionsOnTimelinesCreateInput_1 = require("../../../inputs/SupscriptionsOnTimelinesCreateInput");
const SupscriptionsOnTimelinesUpdateInput_1 = require("../../../inputs/SupscriptionsOnTimelinesUpdateInput");
const SupscriptionsOnTimelinesWhereUniqueInput_1 = require("../../../inputs/SupscriptionsOnTimelinesWhereUniqueInput");
let UpsertSupscriptionsOnTimelinesArgs = class UpsertSupscriptionsOnTimelinesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SupscriptionsOnTimelinesWhereUniqueInput_1.SupscriptionsOnTimelinesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SupscriptionsOnTimelinesWhereUniqueInput_1.SupscriptionsOnTimelinesWhereUniqueInput)
], UpsertSupscriptionsOnTimelinesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SupscriptionsOnTimelinesCreateInput_1.SupscriptionsOnTimelinesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SupscriptionsOnTimelinesCreateInput_1.SupscriptionsOnTimelinesCreateInput)
], UpsertSupscriptionsOnTimelinesArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SupscriptionsOnTimelinesUpdateInput_1.SupscriptionsOnTimelinesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SupscriptionsOnTimelinesUpdateInput_1.SupscriptionsOnTimelinesUpdateInput)
], UpsertSupscriptionsOnTimelinesArgs.prototype, "update", void 0);
UpsertSupscriptionsOnTimelinesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertSupscriptionsOnTimelinesArgs);
exports.UpsertSupscriptionsOnTimelinesArgs = UpsertSupscriptionsOnTimelinesArgs;
