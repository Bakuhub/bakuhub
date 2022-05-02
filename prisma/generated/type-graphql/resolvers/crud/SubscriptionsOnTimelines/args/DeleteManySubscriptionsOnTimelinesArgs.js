"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManySubscriptionsOnTimelinesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionsOnTimelinesWhereInput_1 = require("../../../inputs/SubscriptionsOnTimelinesWhereInput");
let DeleteManySubscriptionsOnTimelinesArgs = class DeleteManySubscriptionsOnTimelinesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnTimelinesWhereInput_1.SubscriptionsOnTimelinesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnTimelinesWhereInput_1.SubscriptionsOnTimelinesWhereInput)
], DeleteManySubscriptionsOnTimelinesArgs.prototype, "where", void 0);
DeleteManySubscriptionsOnTimelinesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManySubscriptionsOnTimelinesArgs);
exports.DeleteManySubscriptionsOnTimelinesArgs = DeleteManySubscriptionsOnTimelinesArgs;
