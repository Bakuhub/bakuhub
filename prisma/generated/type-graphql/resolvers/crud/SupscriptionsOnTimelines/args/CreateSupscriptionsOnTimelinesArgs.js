"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSupscriptionsOnTimelinesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SupscriptionsOnTimelinesCreateInput_1 = require("../../../inputs/SupscriptionsOnTimelinesCreateInput");
let CreateSupscriptionsOnTimelinesArgs = class CreateSupscriptionsOnTimelinesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SupscriptionsOnTimelinesCreateInput_1.SupscriptionsOnTimelinesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SupscriptionsOnTimelinesCreateInput_1.SupscriptionsOnTimelinesCreateInput)
], CreateSupscriptionsOnTimelinesArgs.prototype, "data", void 0);
CreateSupscriptionsOnTimelinesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateSupscriptionsOnTimelinesArgs);
exports.CreateSupscriptionsOnTimelinesArgs = CreateSupscriptionsOnTimelinesArgs;
