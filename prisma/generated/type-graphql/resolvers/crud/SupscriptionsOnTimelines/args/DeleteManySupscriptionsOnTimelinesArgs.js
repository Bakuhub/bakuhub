"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManySupscriptionsOnTimelinesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SupscriptionsOnTimelinesWhereInput_1 = require("../../../inputs/SupscriptionsOnTimelinesWhereInput");
let DeleteManySupscriptionsOnTimelinesArgs = class DeleteManySupscriptionsOnTimelinesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SupscriptionsOnTimelinesWhereInput_1.SupscriptionsOnTimelinesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SupscriptionsOnTimelinesWhereInput_1.SupscriptionsOnTimelinesWhereInput)
], DeleteManySupscriptionsOnTimelinesArgs.prototype, "where", void 0);
DeleteManySupscriptionsOnTimelinesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManySupscriptionsOnTimelinesArgs);
exports.DeleteManySupscriptionsOnTimelinesArgs = DeleteManySupscriptionsOnTimelinesArgs;
