"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManySupscriptionsOnTimelinesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SupscriptionsOnTimelinesCreateManyInput_1 = require("../../../inputs/SupscriptionsOnTimelinesCreateManyInput");
let CreateManySupscriptionsOnTimelinesArgs = class CreateManySupscriptionsOnTimelinesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SupscriptionsOnTimelinesCreateManyInput_1.SupscriptionsOnTimelinesCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManySupscriptionsOnTimelinesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManySupscriptionsOnTimelinesArgs.prototype, "skipDuplicates", void 0);
CreateManySupscriptionsOnTimelinesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManySupscriptionsOnTimelinesArgs);
exports.CreateManySupscriptionsOnTimelinesArgs = CreateManySupscriptionsOnTimelinesArgs;
