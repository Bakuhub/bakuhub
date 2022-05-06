"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionsOnTimelinesUpdateWithoutTimelineInput_1 = require("../inputs/SubscriptionsOnTimelinesUpdateWithoutTimelineInput");
const SubscriptionsOnTimelinesWhereUniqueInput_1 = require("../inputs/SubscriptionsOnTimelinesWhereUniqueInput");
let SubscriptionsOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput = class SubscriptionsOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnTimelinesWhereUniqueInput_1.SubscriptionsOnTimelinesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnTimelinesWhereUniqueInput_1.SubscriptionsOnTimelinesWhereUniqueInput)
], SubscriptionsOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnTimelinesUpdateWithoutTimelineInput_1.SubscriptionsOnTimelinesUpdateWithoutTimelineInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnTimelinesUpdateWithoutTimelineInput_1.SubscriptionsOnTimelinesUpdateWithoutTimelineInput)
], SubscriptionsOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput.prototype, "data", void 0);
SubscriptionsOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SubscriptionsOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput", {
        isAbstract: true
    })
], SubscriptionsOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput);
exports.SubscriptionsOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput = SubscriptionsOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput;
