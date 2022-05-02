"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsOnTimelinesCreateNestedManyWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionsOnTimelinesCreateManyUserInputEnvelope_1 = require("../inputs/SubscriptionsOnTimelinesCreateManyUserInputEnvelope");
const SubscriptionsOnTimelinesCreateOrConnectWithoutUserInput_1 = require("../inputs/SubscriptionsOnTimelinesCreateOrConnectWithoutUserInput");
const SubscriptionsOnTimelinesCreateWithoutUserInput_1 = require("../inputs/SubscriptionsOnTimelinesCreateWithoutUserInput");
const SubscriptionsOnTimelinesWhereUniqueInput_1 = require("../inputs/SubscriptionsOnTimelinesWhereUniqueInput");
let SubscriptionsOnTimelinesCreateNestedManyWithoutUserInput = class SubscriptionsOnTimelinesCreateNestedManyWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesCreateWithoutUserInput_1.SubscriptionsOnTimelinesCreateWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubscriptionsOnTimelinesCreateNestedManyWithoutUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesCreateOrConnectWithoutUserInput_1.SubscriptionsOnTimelinesCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubscriptionsOnTimelinesCreateNestedManyWithoutUserInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnTimelinesCreateManyUserInputEnvelope_1.SubscriptionsOnTimelinesCreateManyUserInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnTimelinesCreateManyUserInputEnvelope_1.SubscriptionsOnTimelinesCreateManyUserInputEnvelope)
], SubscriptionsOnTimelinesCreateNestedManyWithoutUserInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesWhereUniqueInput_1.SubscriptionsOnTimelinesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubscriptionsOnTimelinesCreateNestedManyWithoutUserInput.prototype, "connect", void 0);
SubscriptionsOnTimelinesCreateNestedManyWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SubscriptionsOnTimelinesCreateNestedManyWithoutUserInput", {
        isAbstract: true
    })
], SubscriptionsOnTimelinesCreateNestedManyWithoutUserInput);
exports.SubscriptionsOnTimelinesCreateNestedManyWithoutUserInput = SubscriptionsOnTimelinesCreateNestedManyWithoutUserInput;
