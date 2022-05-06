"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsOnTimelinesCreateOrConnectWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionsOnTimelinesCreateWithoutUserInput_1 = require("../inputs/SubscriptionsOnTimelinesCreateWithoutUserInput");
const SubscriptionsOnTimelinesWhereUniqueInput_1 = require("../inputs/SubscriptionsOnTimelinesWhereUniqueInput");
let SubscriptionsOnTimelinesCreateOrConnectWithoutUserInput = class SubscriptionsOnTimelinesCreateOrConnectWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnTimelinesWhereUniqueInput_1.SubscriptionsOnTimelinesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnTimelinesWhereUniqueInput_1.SubscriptionsOnTimelinesWhereUniqueInput)
], SubscriptionsOnTimelinesCreateOrConnectWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnTimelinesCreateWithoutUserInput_1.SubscriptionsOnTimelinesCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnTimelinesCreateWithoutUserInput_1.SubscriptionsOnTimelinesCreateWithoutUserInput)
], SubscriptionsOnTimelinesCreateOrConnectWithoutUserInput.prototype, "create", void 0);
SubscriptionsOnTimelinesCreateOrConnectWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SubscriptionsOnTimelinesCreateOrConnectWithoutUserInput", {
        isAbstract: true
    })
], SubscriptionsOnTimelinesCreateOrConnectWithoutUserInput);
exports.SubscriptionsOnTimelinesCreateOrConnectWithoutUserInput = SubscriptionsOnTimelinesCreateOrConnectWithoutUserInput;
