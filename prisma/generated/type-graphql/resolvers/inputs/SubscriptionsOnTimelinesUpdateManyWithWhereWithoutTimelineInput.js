"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsOnTimelinesUpdateManyWithWhereWithoutTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionsOnTimelinesScalarWhereInput_1 = require("../inputs/SubscriptionsOnTimelinesScalarWhereInput");
const SubscriptionsOnTimelinesUpdateManyMutationInput_1 = require("../inputs/SubscriptionsOnTimelinesUpdateManyMutationInput");
let SubscriptionsOnTimelinesUpdateManyWithWhereWithoutTimelineInput = class SubscriptionsOnTimelinesUpdateManyWithWhereWithoutTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnTimelinesScalarWhereInput_1.SubscriptionsOnTimelinesScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnTimelinesScalarWhereInput_1.SubscriptionsOnTimelinesScalarWhereInput)
], SubscriptionsOnTimelinesUpdateManyWithWhereWithoutTimelineInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnTimelinesUpdateManyMutationInput_1.SubscriptionsOnTimelinesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnTimelinesUpdateManyMutationInput_1.SubscriptionsOnTimelinesUpdateManyMutationInput)
], SubscriptionsOnTimelinesUpdateManyWithWhereWithoutTimelineInput.prototype, "data", void 0);
SubscriptionsOnTimelinesUpdateManyWithWhereWithoutTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SubscriptionsOnTimelinesUpdateManyWithWhereWithoutTimelineInput", {
        isAbstract: true
    })
], SubscriptionsOnTimelinesUpdateManyWithWhereWithoutTimelineInput);
exports.SubscriptionsOnTimelinesUpdateManyWithWhereWithoutTimelineInput = SubscriptionsOnTimelinesUpdateManyWithWhereWithoutTimelineInput;
