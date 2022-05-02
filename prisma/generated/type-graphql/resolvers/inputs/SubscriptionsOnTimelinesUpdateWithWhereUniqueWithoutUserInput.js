"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsOnTimelinesUpdateWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionsOnTimelinesUpdateWithoutUserInput_1 = require("../inputs/SubscriptionsOnTimelinesUpdateWithoutUserInput");
const SubscriptionsOnTimelinesWhereUniqueInput_1 = require("../inputs/SubscriptionsOnTimelinesWhereUniqueInput");
let SubscriptionsOnTimelinesUpdateWithWhereUniqueWithoutUserInput = class SubscriptionsOnTimelinesUpdateWithWhereUniqueWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnTimelinesWhereUniqueInput_1.SubscriptionsOnTimelinesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnTimelinesWhereUniqueInput_1.SubscriptionsOnTimelinesWhereUniqueInput)
], SubscriptionsOnTimelinesUpdateWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnTimelinesUpdateWithoutUserInput_1.SubscriptionsOnTimelinesUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnTimelinesUpdateWithoutUserInput_1.SubscriptionsOnTimelinesUpdateWithoutUserInput)
], SubscriptionsOnTimelinesUpdateWithWhereUniqueWithoutUserInput.prototype, "data", void 0);
SubscriptionsOnTimelinesUpdateWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SubscriptionsOnTimelinesUpdateWithWhereUniqueWithoutUserInput", {
        isAbstract: true
    })
], SubscriptionsOnTimelinesUpdateWithWhereUniqueWithoutUserInput);
exports.SubscriptionsOnTimelinesUpdateWithWhereUniqueWithoutUserInput = SubscriptionsOnTimelinesUpdateWithWhereUniqueWithoutUserInput;
