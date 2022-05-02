"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSubscriptionsOnTimelinesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionsOnTimelinesCreateInput_1 = require("../../../inputs/SubscriptionsOnTimelinesCreateInput");
let CreateSubscriptionsOnTimelinesArgs = class CreateSubscriptionsOnTimelinesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnTimelinesCreateInput_1.SubscriptionsOnTimelinesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnTimelinesCreateInput_1.SubscriptionsOnTimelinesCreateInput)
], CreateSubscriptionsOnTimelinesArgs.prototype, "data", void 0);
CreateSubscriptionsOnTimelinesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateSubscriptionsOnTimelinesArgs);
exports.CreateSubscriptionsOnTimelinesArgs = CreateSubscriptionsOnTimelinesArgs;
