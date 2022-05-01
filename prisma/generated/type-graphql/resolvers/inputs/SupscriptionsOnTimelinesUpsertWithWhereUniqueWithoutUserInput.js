"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupscriptionsOnTimelinesUpsertWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SupscriptionsOnTimelinesCreateWithoutUserInput_1 = require("../inputs/SupscriptionsOnTimelinesCreateWithoutUserInput");
const SupscriptionsOnTimelinesUpdateWithoutUserInput_1 = require("../inputs/SupscriptionsOnTimelinesUpdateWithoutUserInput");
const SupscriptionsOnTimelinesWhereUniqueInput_1 = require("../inputs/SupscriptionsOnTimelinesWhereUniqueInput");
let SupscriptionsOnTimelinesUpsertWithWhereUniqueWithoutUserInput = class SupscriptionsOnTimelinesUpsertWithWhereUniqueWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SupscriptionsOnTimelinesWhereUniqueInput_1.SupscriptionsOnTimelinesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SupscriptionsOnTimelinesWhereUniqueInput_1.SupscriptionsOnTimelinesWhereUniqueInput)
], SupscriptionsOnTimelinesUpsertWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SupscriptionsOnTimelinesUpdateWithoutUserInput_1.SupscriptionsOnTimelinesUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SupscriptionsOnTimelinesUpdateWithoutUserInput_1.SupscriptionsOnTimelinesUpdateWithoutUserInput)
], SupscriptionsOnTimelinesUpsertWithWhereUniqueWithoutUserInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SupscriptionsOnTimelinesCreateWithoutUserInput_1.SupscriptionsOnTimelinesCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SupscriptionsOnTimelinesCreateWithoutUserInput_1.SupscriptionsOnTimelinesCreateWithoutUserInput)
], SupscriptionsOnTimelinesUpsertWithWhereUniqueWithoutUserInput.prototype, "create", void 0);
SupscriptionsOnTimelinesUpsertWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SupscriptionsOnTimelinesUpsertWithWhereUniqueWithoutUserInput", {
        isAbstract: true
    })
], SupscriptionsOnTimelinesUpsertWithWhereUniqueWithoutUserInput);
exports.SupscriptionsOnTimelinesUpsertWithWhereUniqueWithoutUserInput = SupscriptionsOnTimelinesUpsertWithWhereUniqueWithoutUserInput;
