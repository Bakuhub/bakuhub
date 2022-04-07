"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyReferenceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReferenceUpdateManyMutationInput_1 = require("../../../inputs/ReferenceUpdateManyMutationInput");
const ReferenceWhereInput_1 = require("../../../inputs/ReferenceWhereInput");
let UpdateManyReferenceArgs = class UpdateManyReferenceArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReferenceUpdateManyMutationInput_1.ReferenceUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReferenceUpdateManyMutationInput_1.ReferenceUpdateManyMutationInput)
], UpdateManyReferenceArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReferenceWhereInput_1.ReferenceWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReferenceWhereInput_1.ReferenceWhereInput)
], UpdateManyReferenceArgs.prototype, "where", void 0);
UpdateManyReferenceArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyReferenceArgs);
exports.UpdateManyReferenceArgs = UpdateManyReferenceArgs;
