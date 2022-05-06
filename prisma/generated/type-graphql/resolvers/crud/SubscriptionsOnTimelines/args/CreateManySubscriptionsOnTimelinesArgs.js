"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManySubscriptionsOnTimelinesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionsOnTimelinesCreateManyInput_1 = require("../../../inputs/SubscriptionsOnTimelinesCreateManyInput");
let CreateManySubscriptionsOnTimelinesArgs = class CreateManySubscriptionsOnTimelinesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesCreateManyInput_1.SubscriptionsOnTimelinesCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManySubscriptionsOnTimelinesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManySubscriptionsOnTimelinesArgs.prototype, "skipDuplicates", void 0);
CreateManySubscriptionsOnTimelinesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManySubscriptionsOnTimelinesArgs);
exports.CreateManySubscriptionsOnTimelinesArgs = CreateManySubscriptionsOnTimelinesArgs;
