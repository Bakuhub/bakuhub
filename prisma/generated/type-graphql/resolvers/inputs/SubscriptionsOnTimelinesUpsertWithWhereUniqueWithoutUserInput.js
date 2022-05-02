"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsOnTimelinesUpsertWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionsOnTimelinesCreateWithoutUserInput_1 = require("../inputs/SubscriptionsOnTimelinesCreateWithoutUserInput");
const SubscriptionsOnTimelinesUpdateWithoutUserInput_1 = require("../inputs/SubscriptionsOnTimelinesUpdateWithoutUserInput");
const SubscriptionsOnTimelinesWhereUniqueInput_1 = require("../inputs/SubscriptionsOnTimelinesWhereUniqueInput");
let SubscriptionsOnTimelinesUpsertWithWhereUniqueWithoutUserInput = class SubscriptionsOnTimelinesUpsertWithWhereUniqueWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnTimelinesWhereUniqueInput_1.SubscriptionsOnTimelinesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnTimelinesWhereUniqueInput_1.SubscriptionsOnTimelinesWhereUniqueInput)
], SubscriptionsOnTimelinesUpsertWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnTimelinesUpdateWithoutUserInput_1.SubscriptionsOnTimelinesUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnTimelinesUpdateWithoutUserInput_1.SubscriptionsOnTimelinesUpdateWithoutUserInput)
], SubscriptionsOnTimelinesUpsertWithWhereUniqueWithoutUserInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnTimelinesCreateWithoutUserInput_1.SubscriptionsOnTimelinesCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnTimelinesCreateWithoutUserInput_1.SubscriptionsOnTimelinesCreateWithoutUserInput)
], SubscriptionsOnTimelinesUpsertWithWhereUniqueWithoutUserInput.prototype, "create", void 0);
SubscriptionsOnTimelinesUpsertWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SubscriptionsOnTimelinesUpsertWithWhereUniqueWithoutUserInput", {
        isAbstract: true
    })
], SubscriptionsOnTimelinesUpsertWithWhereUniqueWithoutUserInput);
exports.SubscriptionsOnTimelinesUpsertWithWhereUniqueWithoutUserInput = SubscriptionsOnTimelinesUpsertWithWhereUniqueWithoutUserInput;
