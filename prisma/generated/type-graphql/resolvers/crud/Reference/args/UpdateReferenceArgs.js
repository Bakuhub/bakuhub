"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateReferenceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReferenceUpdateInput_1 = require("../../../inputs/ReferenceUpdateInput");
const ReferenceWhereUniqueInput_1 = require("../../../inputs/ReferenceWhereUniqueInput");
let UpdateReferenceArgs = class UpdateReferenceArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReferenceUpdateInput_1.ReferenceUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReferenceUpdateInput_1.ReferenceUpdateInput)
], UpdateReferenceArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReferenceWhereUniqueInput_1.ReferenceWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReferenceWhereUniqueInput_1.ReferenceWhereUniqueInput)
], UpdateReferenceArgs.prototype, "where", void 0);
UpdateReferenceArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateReferenceArgs);
exports.UpdateReferenceArgs = UpdateReferenceArgs;
