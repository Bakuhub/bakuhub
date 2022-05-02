"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsOnTimelinesCreateNestedManyWithoutTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionsOnTimelinesCreateManyTimelineInputEnvelope_1 = require("../inputs/SubscriptionsOnTimelinesCreateManyTimelineInputEnvelope");
const SubscriptionsOnTimelinesCreateOrConnectWithoutTimelineInput_1 = require("../inputs/SubscriptionsOnTimelinesCreateOrConnectWithoutTimelineInput");
const SubscriptionsOnTimelinesCreateWithoutTimelineInput_1 = require("../inputs/SubscriptionsOnTimelinesCreateWithoutTimelineInput");
const SubscriptionsOnTimelinesWhereUniqueInput_1 = require("../inputs/SubscriptionsOnTimelinesWhereUniqueInput");
let SubscriptionsOnTimelinesCreateNestedManyWithoutTimelineInput = class SubscriptionsOnTimelinesCreateNestedManyWithoutTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesCreateWithoutTimelineInput_1.SubscriptionsOnTimelinesCreateWithoutTimelineInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubscriptionsOnTimelinesCreateNestedManyWithoutTimelineInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesCreateOrConnectWithoutTimelineInput_1.SubscriptionsOnTimelinesCreateOrConnectWithoutTimelineInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubscriptionsOnTimelinesCreateNestedManyWithoutTimelineInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnTimelinesCreateManyTimelineInputEnvelope_1.SubscriptionsOnTimelinesCreateManyTimelineInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnTimelinesCreateManyTimelineInputEnvelope_1.SubscriptionsOnTimelinesCreateManyTimelineInputEnvelope)
], SubscriptionsOnTimelinesCreateNestedManyWithoutTimelineInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesWhereUniqueInput_1.SubscriptionsOnTimelinesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubscriptionsOnTimelinesCreateNestedManyWithoutTimelineInput.prototype, "connect", void 0);
SubscriptionsOnTimelinesCreateNestedManyWithoutTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SubscriptionsOnTimelinesCreateNestedManyWithoutTimelineInput", {
        isAbstract: true
    })
], SubscriptionsOnTimelinesCreateNestedManyWithoutTimelineInput);
exports.SubscriptionsOnTimelinesCreateNestedManyWithoutTimelineInput = SubscriptionsOnTimelinesCreateNestedManyWithoutTimelineInput;
