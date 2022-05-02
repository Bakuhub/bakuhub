"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsOnTimelinesUpdateManyWithWhereWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionsOnTimelinesScalarWhereInput_1 = require("../inputs/SubscriptionsOnTimelinesScalarWhereInput");
const SubscriptionsOnTimelinesUpdateManyMutationInput_1 = require("../inputs/SubscriptionsOnTimelinesUpdateManyMutationInput");
let SubscriptionsOnTimelinesUpdateManyWithWhereWithoutUserInput = class SubscriptionsOnTimelinesUpdateManyWithWhereWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnTimelinesScalarWhereInput_1.SubscriptionsOnTimelinesScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnTimelinesScalarWhereInput_1.SubscriptionsOnTimelinesScalarWhereInput)
], SubscriptionsOnTimelinesUpdateManyWithWhereWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnTimelinesUpdateManyMutationInput_1.SubscriptionsOnTimelinesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnTimelinesUpdateManyMutationInput_1.SubscriptionsOnTimelinesUpdateManyMutationInput)
], SubscriptionsOnTimelinesUpdateManyWithWhereWithoutUserInput.prototype, "data", void 0);
SubscriptionsOnTimelinesUpdateManyWithWhereWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SubscriptionsOnTimelinesUpdateManyWithWhereWithoutUserInput", {
        isAbstract: true
    })
], SubscriptionsOnTimelinesUpdateManyWithWhereWithoutUserInput);
exports.SubscriptionsOnTimelinesUpdateManyWithWhereWithoutUserInput = SubscriptionsOnTimelinesUpdateManyWithWhereWithoutUserInput;
