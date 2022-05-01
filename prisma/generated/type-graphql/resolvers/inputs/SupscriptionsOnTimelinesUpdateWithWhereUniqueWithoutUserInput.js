"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupscriptionsOnTimelinesUpdateWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SupscriptionsOnTimelinesUpdateWithoutUserInput_1 = require("../inputs/SupscriptionsOnTimelinesUpdateWithoutUserInput");
const SupscriptionsOnTimelinesWhereUniqueInput_1 = require("../inputs/SupscriptionsOnTimelinesWhereUniqueInput");
let SupscriptionsOnTimelinesUpdateWithWhereUniqueWithoutUserInput = class SupscriptionsOnTimelinesUpdateWithWhereUniqueWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SupscriptionsOnTimelinesWhereUniqueInput_1.SupscriptionsOnTimelinesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SupscriptionsOnTimelinesWhereUniqueInput_1.SupscriptionsOnTimelinesWhereUniqueInput)
], SupscriptionsOnTimelinesUpdateWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SupscriptionsOnTimelinesUpdateWithoutUserInput_1.SupscriptionsOnTimelinesUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SupscriptionsOnTimelinesUpdateWithoutUserInput_1.SupscriptionsOnTimelinesUpdateWithoutUserInput)
], SupscriptionsOnTimelinesUpdateWithWhereUniqueWithoutUserInput.prototype, "data", void 0);
SupscriptionsOnTimelinesUpdateWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SupscriptionsOnTimelinesUpdateWithWhereUniqueWithoutUserInput", {
        isAbstract: true
    })
], SupscriptionsOnTimelinesUpdateWithWhereUniqueWithoutUserInput);
exports.SupscriptionsOnTimelinesUpdateWithWhereUniqueWithoutUserInput = SupscriptionsOnTimelinesUpdateWithWhereUniqueWithoutUserInput;
