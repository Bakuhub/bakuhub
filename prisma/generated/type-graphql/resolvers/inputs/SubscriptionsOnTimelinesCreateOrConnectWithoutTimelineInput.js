"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsOnTimelinesCreateOrConnectWithoutTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionsOnTimelinesCreateWithoutTimelineInput_1 = require("../inputs/SubscriptionsOnTimelinesCreateWithoutTimelineInput");
const SubscriptionsOnTimelinesWhereUniqueInput_1 = require("../inputs/SubscriptionsOnTimelinesWhereUniqueInput");
let SubscriptionsOnTimelinesCreateOrConnectWithoutTimelineInput = class SubscriptionsOnTimelinesCreateOrConnectWithoutTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnTimelinesWhereUniqueInput_1.SubscriptionsOnTimelinesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnTimelinesWhereUniqueInput_1.SubscriptionsOnTimelinesWhereUniqueInput)
], SubscriptionsOnTimelinesCreateOrConnectWithoutTimelineInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnTimelinesCreateWithoutTimelineInput_1.SubscriptionsOnTimelinesCreateWithoutTimelineInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnTimelinesCreateWithoutTimelineInput_1.SubscriptionsOnTimelinesCreateWithoutTimelineInput)
], SubscriptionsOnTimelinesCreateOrConnectWithoutTimelineInput.prototype, "create", void 0);
SubscriptionsOnTimelinesCreateOrConnectWithoutTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SubscriptionsOnTimelinesCreateOrConnectWithoutTimelineInput", {
        isAbstract: true
    })
], SubscriptionsOnTimelinesCreateOrConnectWithoutTimelineInput);
exports.SubscriptionsOnTimelinesCreateOrConnectWithoutTimelineInput = SubscriptionsOnTimelinesCreateOrConnectWithoutTimelineInput;
