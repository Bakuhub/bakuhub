"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertSubscriptionsOnTimelinesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionsOnTimelinesCreateInput_1 = require("../../../inputs/SubscriptionsOnTimelinesCreateInput");
const SubscriptionsOnTimelinesUpdateInput_1 = require("../../../inputs/SubscriptionsOnTimelinesUpdateInput");
const SubscriptionsOnTimelinesWhereUniqueInput_1 = require("../../../inputs/SubscriptionsOnTimelinesWhereUniqueInput");
let UpsertSubscriptionsOnTimelinesArgs = class UpsertSubscriptionsOnTimelinesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnTimelinesWhereUniqueInput_1.SubscriptionsOnTimelinesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnTimelinesWhereUniqueInput_1.SubscriptionsOnTimelinesWhereUniqueInput)
], UpsertSubscriptionsOnTimelinesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnTimelinesCreateInput_1.SubscriptionsOnTimelinesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnTimelinesCreateInput_1.SubscriptionsOnTimelinesCreateInput)
], UpsertSubscriptionsOnTimelinesArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnTimelinesUpdateInput_1.SubscriptionsOnTimelinesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnTimelinesUpdateInput_1.SubscriptionsOnTimelinesUpdateInput)
], UpsertSubscriptionsOnTimelinesArgs.prototype, "update", void 0);
UpsertSubscriptionsOnTimelinesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertSubscriptionsOnTimelinesArgs);
exports.UpsertSubscriptionsOnTimelinesArgs = UpsertSubscriptionsOnTimelinesArgs;
