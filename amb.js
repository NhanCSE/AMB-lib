"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassOperation = exports.CourseOperation = exports.AdminOperation = exports.TeacherOperation = exports.StudentOperation = void 0;
var axios_1 = require("axios");
var FormData = require("form-data");
var StudentOperation = /** @class */ (function () {
    function StudentOperation() {
        this.baseUrl = "https://academic-management-backend.onrender.com/api/v1/students";
    }
    StudentOperation.prototype.login = function (username, password) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post("".concat(this.baseUrl, "/login"), {
                                username: username,
                                password: password,
                            }, {
                                withCredentials: true,
                            })];
                    case 1:
                        response = _c.sent();
                        data = response.data;
                        return [2 /*return*/, { error: data.error, valid: data.valid, message: data.message, token: data.token }];
                    case 2:
                        error_1 = _c.sent();
                        console.log("Error logging in: ", (_a = error_1 === null || error_1 === void 0 ? void 0 : error_1.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_1 === null || error_1 === void 0 ? void 0 : error_1.request);
                        return [2 /*return*/, { error: (_b = error_1 === null || error_1 === void 0 ? void 0 : error_1.response) === null || _b === void 0 ? void 0 : _b.data, request: error_1 === null || error_1 === void 0 ? void 0 : error_1.request, status: error_1.response ? error_1.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    StudentOperation.prototype.create = function (info, token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_2;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post("".concat(this.baseUrl, "/create"), info, {
                                withCredentials: true,
                                headers: {
                                    Authorization: token.token
                                }
                            })];
                    case 1:
                        response = _c.sent();
                        data = response.data;
                        return [2 /*return*/, { error: data.error, data: data.data, message: data.message }];
                    case 2:
                        error_2 = _c.sent();
                        console.log("Error create new user: ", (_a = error_2 === null || error_2 === void 0 ? void 0 : error_2.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_2 === null || error_2 === void 0 ? void 0 : error_2.request);
                        return [2 /*return*/, { error: (_b = error_2 === null || error_2 === void 0 ? void 0 : error_2.response) === null || _b === void 0 ? void 0 : _b.data, request: error_2 === null || error_2 === void 0 ? void 0 : error_2.request, status: error_2.response ? error_2.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    StudentOperation.prototype.createByFile = function (info, token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var formData, response, data, error_3;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        formData = new FormData();
                        formData.append("file", info.file);
                        return [4 /*yield*/, axios_1.default.post("".concat(this.baseUrl, "/create_by_file"), formData, {
                                headers: {
                                    'Content-Type': 'multipart/form-data',
                                    Authorization: token.token
                                },
                                withCredentials: true,
                            })];
                    case 1:
                        response = _c.sent();
                        data = response.data;
                        return [2 /*return*/, { error: data.error, message: data.message }];
                    case 2:
                        error_3 = _c.sent();
                        console.error('Error creating orders by file:', (_a = error_3 === null || error_3 === void 0 ? void 0 : error_3.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_3 === null || error_3 === void 0 ? void 0 : error_3.request);
                        return [2 /*return*/, { error: (_b = error_3 === null || error_3 === void 0 ? void 0 : error_3.response) === null || _b === void 0 ? void 0 : _b.data, request: error_3 === null || error_3 === void 0 ? void 0 : error_3.request, status: error_3.response ? error_3.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    StudentOperation.prototype.updateByStudent = function (info, condition, token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_4;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.put("".concat(this.baseUrl, "/update?student_id=").concat(condition.student_id), info, {
                                withCredentials: true,
                                headers: {
                                    Authorization: token.token
                                }
                            })];
                    case 1:
                        response = _c.sent();
                        data = response.data;
                        return [2 /*return*/, { error: data.error, data: data.data, message: data.message }];
                    case 2:
                        error_4 = _c.sent();
                        console.log("Error update new user: ", (_a = error_4 === null || error_4 === void 0 ? void 0 : error_4.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_4 === null || error_4 === void 0 ? void 0 : error_4.request);
                        return [2 /*return*/, { error: (_b = error_4 === null || error_4 === void 0 ? void 0 : error_4.response) === null || _b === void 0 ? void 0 : _b.data, request: error_4 === null || error_4 === void 0 ? void 0 : error_4.request, status: error_4.response ? error_4.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    StudentOperation.prototype.updateByAdmin = function (info, condition, token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_5;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.put("".concat(this.baseUrl, "/update?student_id=").concat(condition.student_id), info, {
                                withCredentials: true,
                                headers: {
                                    Authorization: token.token
                                }
                            })];
                    case 1:
                        response = _c.sent();
                        data = response.data;
                        return [2 /*return*/, { error: data.error, data: data.data, message: data.message }];
                    case 2:
                        error_5 = _c.sent();
                        console.log("Error update new user: ", (_a = error_5 === null || error_5 === void 0 ? void 0 : error_5.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_5 === null || error_5 === void 0 ? void 0 : error_5.request);
                        return [2 /*return*/, { error: (_b = error_5 === null || error_5 === void 0 ? void 0 : error_5.response) === null || _b === void 0 ? void 0 : _b.data, request: error_5 === null || error_5 === void 0 ? void 0 : error_5.request, status: error_5.response ? error_5.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    StudentOperation.prototype.updatePassword = function (info) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_6;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.put("".concat(this.baseUrl, "/update_password"), info, {
                                withCredentials: true,
                            })];
                    case 1:
                        response = _c.sent();
                        data = response.data;
                        return [2 /*return*/, { error: data.error, data: data.data, message: data.message }];
                    case 2:
                        error_6 = _c.sent();
                        console.log("Error update new user: ", (_a = error_6 === null || error_6 === void 0 ? void 0 : error_6.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_6 === null || error_6 === void 0 ? void 0 : error_6.request);
                        return [2 /*return*/, { error: (_b = error_6 === null || error_6 === void 0 ? void 0 : error_6.response) === null || _b === void 0 ? void 0 : _b.data, request: error_6 === null || error_6 === void 0 ? void 0 : error_6.request, status: error_6.response ? error_6.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    StudentOperation.prototype.delete = function (condition, token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_7;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.delete("".concat(this.baseUrl, "/delete?student_id=").concat(condition.student_id), {
                                withCredentials: true,
                                headers: {
                                    Authorization: token.token
                                }
                            })];
                    case 1:
                        response = _c.sent();
                        data = response.data;
                        return [2 /*return*/, { error: data.error, data: data.data, message: data.message }];
                    case 2:
                        error_7 = _c.sent();
                        console.log("Error update new user: ", (_a = error_7 === null || error_7 === void 0 ? void 0 : error_7.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_7 === null || error_7 === void 0 ? void 0 : error_7.request);
                        return [2 /*return*/, { error: (_b = error_7 === null || error_7 === void 0 ? void 0 : error_7.response) === null || _b === void 0 ? void 0 : _b.data, request: error_7 === null || error_7 === void 0 ? void 0 : error_7.request, status: error_7.response ? error_7.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    StudentOperation.prototype.findByStudent = function (token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_8;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post("".concat(this.baseUrl, "/get"), {
                                withCredentials: true,
                                headers: {
                                    Authorization: token.token
                                }
                            })];
                    case 1:
                        response = _c.sent();
                        data = response.data;
                        return [2 /*return*/, { error: data.error, data: data.data, message: data.message }];
                    case 2:
                        error_8 = _c.sent();
                        console.log("Error update new user: ", (_a = error_8 === null || error_8 === void 0 ? void 0 : error_8.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_8 === null || error_8 === void 0 ? void 0 : error_8.request);
                        return [2 /*return*/, { error: (_b = error_8 === null || error_8 === void 0 ? void 0 : error_8.response) === null || _b === void 0 ? void 0 : _b.data, request: error_8 === null || error_8 === void 0 ? void 0 : error_8.request, status: error_8.response ? error_8.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    StudentOperation.prototype.findByAdmin = function (info, token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_9;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post("".concat(this.baseUrl, "/get"), info, {
                                withCredentials: true,
                                headers: {
                                    Authorization: token.token
                                }
                            })];
                    case 1:
                        response = _c.sent();
                        data = response.data;
                        return [2 /*return*/, { error: data.error, data: data.data, message: data.message }];
                    case 2:
                        error_9 = _c.sent();
                        console.log("Error update new user: ", (_a = error_9 === null || error_9 === void 0 ? void 0 : error_9.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_9 === null || error_9 === void 0 ? void 0 : error_9.request);
                        return [2 /*return*/, { error: (_b = error_9 === null || error_9 === void 0 ? void 0 : error_9.response) === null || _b === void 0 ? void 0 : _b.data, request: error_9 === null || error_9 === void 0 ? void 0 : error_9.request, status: error_9.response ? error_9.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    StudentOperation.prototype.findStudentRegisteredClass = function (token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_10;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get("".concat(this.baseUrl, "/get_classes"), {
                                withCredentials: true,
                                headers: {
                                    Authorization: token.token
                                }
                            })];
                    case 1:
                        response = _c.sent();
                        data = response.data;
                        return [2 /*return*/, { error: data.error, data: data.data, message: data.message }];
                    case 2:
                        error_10 = _c.sent();
                        console.log("Error update new user: ", (_a = error_10 === null || error_10 === void 0 ? void 0 : error_10.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_10 === null || error_10 === void 0 ? void 0 : error_10.request);
                        return [2 /*return*/, { error: (_b = error_10 === null || error_10 === void 0 ? void 0 : error_10.response) === null || _b === void 0 ? void 0 : _b.data, request: error_10 === null || error_10 === void 0 ? void 0 : error_10.request, status: error_10.response ? error_10.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    StudentOperation.prototype.getScore = function (token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_11;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get("".concat(this.baseUrl, "/get_score"), {
                                withCredentials: true,
                                headers: {
                                    Authorization: token.token
                                }
                            })];
                    case 1:
                        response = _c.sent();
                        data = response.data;
                        return [2 /*return*/, { error: data.error, data: data.data, message: data.message }];
                    case 2:
                        error_11 = _c.sent();
                        console.log("Error update new user: ", (_a = error_11 === null || error_11 === void 0 ? void 0 : error_11.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_11 === null || error_11 === void 0 ? void 0 : error_11.request);
                        return [2 /*return*/, { error: (_b = error_11 === null || error_11 === void 0 ? void 0 : error_11.response) === null || _b === void 0 ? void 0 : _b.data, request: error_11 === null || error_11 === void 0 ? void 0 : error_11.request, status: error_11.response ? error_11.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return StudentOperation;
}());
exports.StudentOperation = StudentOperation;
var TeacherOperation = /** @class */ (function () {
    function TeacherOperation() {
        this.baseUrl = "https://academic-management-backend.onrender.com/api/v1/teachers";
    }
    TeacherOperation.prototype.login = function (username, password) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_12;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post("".concat(this.baseUrl, "/login"), {
                                username: username,
                                password: password,
                            }, {
                                withCredentials: true,
                            })];
                    case 1:
                        response = _c.sent();
                        data = response.data;
                        return [2 /*return*/, { error: data.error, valid: data.valid, message: data.message, token: data.token }];
                    case 2:
                        error_12 = _c.sent();
                        console.log("Error logging in: ", (_a = error_12 === null || error_12 === void 0 ? void 0 : error_12.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_12 === null || error_12 === void 0 ? void 0 : error_12.request);
                        return [2 /*return*/, { error: (_b = error_12 === null || error_12 === void 0 ? void 0 : error_12.response) === null || _b === void 0 ? void 0 : _b.data, request: error_12 === null || error_12 === void 0 ? void 0 : error_12.request, status: error_12.response ? error_12.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TeacherOperation.prototype.create = function (info, token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_13;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post("".concat(this.baseUrl, "/create"), info, {
                                withCredentials: true,
                                headers: {
                                    Authorization: token.token
                                }
                            })];
                    case 1:
                        response = _c.sent();
                        data = response.data;
                        return [2 /*return*/, { error: data.error, data: data.data, message: data.message }];
                    case 2:
                        error_13 = _c.sent();
                        console.log("Error create new user: ", (_a = error_13 === null || error_13 === void 0 ? void 0 : error_13.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_13 === null || error_13 === void 0 ? void 0 : error_13.request);
                        return [2 /*return*/, { error: (_b = error_13 === null || error_13 === void 0 ? void 0 : error_13.response) === null || _b === void 0 ? void 0 : _b.data, request: error_13 === null || error_13 === void 0 ? void 0 : error_13.request, status: error_13.response ? error_13.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TeacherOperation.prototype.updateByTeacher = function (info, condition, token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_14;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.put("".concat(this.baseUrl, "/update?teacher_id=").concat(condition.teacher_id), info, {
                                withCredentials: true,
                                headers: {
                                    Authorization: token.token
                                }
                            })];
                    case 1:
                        response = _c.sent();
                        data = response.data;
                        return [2 /*return*/, { error: data.error, data: data.data, message: data.message }];
                    case 2:
                        error_14 = _c.sent();
                        console.log("Error update new user: ", (_a = error_14 === null || error_14 === void 0 ? void 0 : error_14.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_14 === null || error_14 === void 0 ? void 0 : error_14.request);
                        return [2 /*return*/, { error: (_b = error_14 === null || error_14 === void 0 ? void 0 : error_14.response) === null || _b === void 0 ? void 0 : _b.data, request: error_14 === null || error_14 === void 0 ? void 0 : error_14.request, status: error_14.response ? error_14.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TeacherOperation.prototype.updateByAdmin = function (info, condition, token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_15;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.put("".concat(this.baseUrl, "/update?teacher_id=").concat(condition.teacher_id), info, {
                                withCredentials: true,
                                headers: {
                                    Authorization: token.token
                                }
                            })];
                    case 1:
                        response = _c.sent();
                        data = response.data;
                        return [2 /*return*/, { error: data.error, data: data.data, message: data.message }];
                    case 2:
                        error_15 = _c.sent();
                        console.log("Error update new user: ", (_a = error_15 === null || error_15 === void 0 ? void 0 : error_15.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_15 === null || error_15 === void 0 ? void 0 : error_15.request);
                        return [2 /*return*/, { error: (_b = error_15 === null || error_15 === void 0 ? void 0 : error_15.response) === null || _b === void 0 ? void 0 : _b.data, request: error_15 === null || error_15 === void 0 ? void 0 : error_15.request, status: error_15.response ? error_15.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TeacherOperation.prototype.updatePassword = function (info, token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_16;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.put("".concat(this.baseUrl, "/update_password"), info, {
                                withCredentials: true,
                                headers: {
                                    Authorization: token.token
                                }
                            })];
                    case 1:
                        response = _c.sent();
                        data = response.data;
                        return [2 /*return*/, { error: data.error, data: data.data, message: data.message }];
                    case 2:
                        error_16 = _c.sent();
                        console.log("Error update new user: ", (_a = error_16 === null || error_16 === void 0 ? void 0 : error_16.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_16 === null || error_16 === void 0 ? void 0 : error_16.request);
                        return [2 /*return*/, { error: (_b = error_16 === null || error_16 === void 0 ? void 0 : error_16.response) === null || _b === void 0 ? void 0 : _b.data, request: error_16 === null || error_16 === void 0 ? void 0 : error_16.request, status: error_16.response ? error_16.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TeacherOperation.prototype.delete = function (condition, token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_17;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.delete("".concat(this.baseUrl, "/delete?teacher_id=").concat(condition.teacher_id), {
                                withCredentials: true,
                                headers: {
                                    Authorization: token.token
                                }
                            })];
                    case 1:
                        response = _c.sent();
                        data = response.data;
                        return [2 /*return*/, { error: data.error, data: data.data, message: data.message }];
                    case 2:
                        error_17 = _c.sent();
                        console.log("Error update new user: ", (_a = error_17 === null || error_17 === void 0 ? void 0 : error_17.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_17 === null || error_17 === void 0 ? void 0 : error_17.request);
                        return [2 /*return*/, { error: (_b = error_17 === null || error_17 === void 0 ? void 0 : error_17.response) === null || _b === void 0 ? void 0 : _b.data, request: error_17 === null || error_17 === void 0 ? void 0 : error_17.request, status: error_17.response ? error_17.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TeacherOperation.prototype.findByTeacher = function (token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_18;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post("".concat(this.baseUrl, "/get"), {
                                withCredentials: true,
                                headers: {
                                    Authorization: token.token
                                }
                            })];
                    case 1:
                        response = _c.sent();
                        data = response.data;
                        return [2 /*return*/, { error: data.error, data: data.data, message: data.message }];
                    case 2:
                        error_18 = _c.sent();
                        console.log("Error update new user: ", (_a = error_18 === null || error_18 === void 0 ? void 0 : error_18.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_18 === null || error_18 === void 0 ? void 0 : error_18.request);
                        return [2 /*return*/, { error: (_b = error_18 === null || error_18 === void 0 ? void 0 : error_18.response) === null || _b === void 0 ? void 0 : _b.data, request: error_18 === null || error_18 === void 0 ? void 0 : error_18.request, status: error_18.response ? error_18.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TeacherOperation.prototype.findByAdmin = function (info, token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_19;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post("".concat(this.baseUrl, "/get"), info, {
                                withCredentials: true,
                                headers: {
                                    Authorization: token.token
                                }
                            })];
                    case 1:
                        response = _c.sent();
                        data = response.data;
                        return [2 /*return*/, { error: data.error, data: data.data, message: data.message }];
                    case 2:
                        error_19 = _c.sent();
                        console.log("Error update new user: ", (_a = error_19 === null || error_19 === void 0 ? void 0 : error_19.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_19 === null || error_19 === void 0 ? void 0 : error_19.request);
                        return [2 /*return*/, { error: (_b = error_19 === null || error_19 === void 0 ? void 0 : error_19.response) === null || _b === void 0 ? void 0 : _b.data, request: error_19 === null || error_19 === void 0 ? void 0 : error_19.request, status: error_19.response ? error_19.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TeacherOperation.prototype.findTeacherRegisteredClass = function (token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_20;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get("".concat(this.baseUrl, "/get_classes"), {
                                withCredentials: true,
                                headers: {
                                    Authorization: token.token
                                }
                            })];
                    case 1:
                        response = _c.sent();
                        data = response.data;
                        return [2 /*return*/, { error: data.error, data: data.data, message: data.message }];
                    case 2:
                        error_20 = _c.sent();
                        console.log("Error update new user: ", (_a = error_20 === null || error_20 === void 0 ? void 0 : error_20.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_20 === null || error_20 === void 0 ? void 0 : error_20.request);
                        return [2 /*return*/, { error: (_b = error_20 === null || error_20 === void 0 ? void 0 : error_20.response) === null || _b === void 0 ? void 0 : _b.data, request: error_20 === null || error_20 === void 0 ? void 0 : error_20.request, status: error_20.response ? error_20.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return TeacherOperation;
}());
exports.TeacherOperation = TeacherOperation;
var AdminOperation = /** @class */ (function () {
    function AdminOperation() {
        this.baseUrl = "https://academic-management-backend.onrender.com/api/v1/admins";
    }
    AdminOperation.prototype.login = function (username, password) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_21;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post("".concat(this.baseUrl, "/login"), {
                                username: username,
                                password: password,
                            }, {
                                withCredentials: true,
                            })];
                    case 1:
                        response = _c.sent();
                        data = response.data;
                        return [2 /*return*/, { error: data.error, valid: data.valid, message: data.message, token: data.token }];
                    case 2:
                        error_21 = _c.sent();
                        console.log("Error logging in: ", (_a = error_21 === null || error_21 === void 0 ? void 0 : error_21.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_21 === null || error_21 === void 0 ? void 0 : error_21.request);
                        return [2 /*return*/, { error: (_b = error_21 === null || error_21 === void 0 ? void 0 : error_21.response) === null || _b === void 0 ? void 0 : _b.data, request: error_21 === null || error_21 === void 0 ? void 0 : error_21.request, status: error_21.response ? error_21.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AdminOperation.prototype.create = function (info, token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_22;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post("".concat(this.baseUrl, "/create"), info, {
                                withCredentials: true,
                                headers: {
                                    Authorization: token.token
                                }
                            })];
                    case 1:
                        response = _c.sent();
                        data = response.data;
                        return [2 /*return*/, { error: data.error, data: data.data, message: data.message }];
                    case 2:
                        error_22 = _c.sent();
                        console.log("Error create new user: ", (_a = error_22 === null || error_22 === void 0 ? void 0 : error_22.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_22 === null || error_22 === void 0 ? void 0 : error_22.request);
                        return [2 /*return*/, { error: (_b = error_22 === null || error_22 === void 0 ? void 0 : error_22.response) === null || _b === void 0 ? void 0 : _b.data, request: error_22 === null || error_22 === void 0 ? void 0 : error_22.request, status: error_22.response ? error_22.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return AdminOperation;
}());
exports.AdminOperation = AdminOperation;
var CourseOperation = /** @class */ (function () {
    function CourseOperation() {
        this.baseUrl = "https://academic-management-backend.onrender.com/api/v1/courses";
    }
    CourseOperation.prototype.create = function (info, token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_23;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post("".concat(this.baseUrl, "/create"), info, {
                                withCredentials: true,
                                headers: {
                                    Authorization: token.token
                                }
                            })];
                    case 1:
                        response = _c.sent();
                        data = response.data;
                        return [2 /*return*/, { error: data.error, data: data.data, message: data.message }];
                    case 2:
                        error_23 = _c.sent();
                        console.log("Error create new user: ", (_a = error_23 === null || error_23 === void 0 ? void 0 : error_23.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_23 === null || error_23 === void 0 ? void 0 : error_23.request);
                        return [2 /*return*/, { error: (_b = error_23 === null || error_23 === void 0 ? void 0 : error_23.response) === null || _b === void 0 ? void 0 : _b.data, request: error_23 === null || error_23 === void 0 ? void 0 : error_23.request, status: error_23.response ? error_23.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CourseOperation.prototype.update = function (info, condition, token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_24;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.put("".concat(this.baseUrl, "/update?course_id=").concat(condition.course_id), info, {
                                withCredentials: true,
                                headers: {
                                    Authorization: token.token
                                }
                            })];
                    case 1:
                        response = _c.sent();
                        data = response.data;
                        return [2 /*return*/, { error: data.error, data: data.data, message: data.message }];
                    case 2:
                        error_24 = _c.sent();
                        console.log("Error update new user: ", (_a = error_24 === null || error_24 === void 0 ? void 0 : error_24.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_24 === null || error_24 === void 0 ? void 0 : error_24.request);
                        return [2 /*return*/, { error: (_b = error_24 === null || error_24 === void 0 ? void 0 : error_24.response) === null || _b === void 0 ? void 0 : _b.data, request: error_24 === null || error_24 === void 0 ? void 0 : error_24.request, status: error_24.response ? error_24.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CourseOperation.prototype.delete = function (condition, token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_25;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.delete("".concat(this.baseUrl, "/delete?course_id=").concat(condition.course_id), {
                                withCredentials: true,
                                headers: {
                                    Authorization: token.token
                                }
                            })];
                    case 1:
                        response = _c.sent();
                        data = response.data;
                        return [2 /*return*/, { error: data.error, data: data.data, message: data.message }];
                    case 2:
                        error_25 = _c.sent();
                        console.log("Error update new user: ", (_a = error_25 === null || error_25 === void 0 ? void 0 : error_25.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_25 === null || error_25 === void 0 ? void 0 : error_25.request);
                        return [2 /*return*/, { error: (_b = error_25 === null || error_25 === void 0 ? void 0 : error_25.response) === null || _b === void 0 ? void 0 : _b.data, request: error_25 === null || error_25 === void 0 ? void 0 : error_25.request, status: error_25.response ? error_25.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CourseOperation.prototype.findAllCourses = function (info, token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_26;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post("".concat(this.baseUrl, "/get"), info, {
                                withCredentials: true,
                                headers: {
                                    Authorization: token.token
                                }
                            })];
                    case 1:
                        response = _c.sent();
                        data = response.data;
                        return [2 /*return*/, { error: data.error, data: data.data, message: data.message }];
                    case 2:
                        error_26 = _c.sent();
                        console.log("Error update new user: ", (_a = error_26 === null || error_26 === void 0 ? void 0 : error_26.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_26 === null || error_26 === void 0 ? void 0 : error_26.request);
                        return [2 /*return*/, { error: (_b = error_26 === null || error_26 === void 0 ? void 0 : error_26.response) === null || _b === void 0 ? void 0 : _b.data, request: error_26 === null || error_26 === void 0 ? void 0 : error_26.request, status: error_26.response ? error_26.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CourseOperation.prototype.findClasses = function (condition, token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_27;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get("".concat(this.baseUrl, "/get_classes?course_id=").concat(condition.course_id), {
                                withCredentials: true,
                                headers: {
                                    Authorization: token.token
                                }
                            })];
                    case 1:
                        response = _c.sent();
                        data = response.data;
                        return [2 /*return*/, { error: data.error, data: data.data, message: data.message }];
                    case 2:
                        error_27 = _c.sent();
                        console.log("Error update new user: ", (_a = error_27 === null || error_27 === void 0 ? void 0 : error_27.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_27 === null || error_27 === void 0 ? void 0 : error_27.request);
                        return [2 /*return*/, { error: (_b = error_27 === null || error_27 === void 0 ? void 0 : error_27.response) === null || _b === void 0 ? void 0 : _b.data, request: error_27 === null || error_27 === void 0 ? void 0 : error_27.request, status: error_27.response ? error_27.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return CourseOperation;
}());
exports.CourseOperation = CourseOperation;
var ClassOperation = /** @class */ (function () {
    function ClassOperation() {
        this.baseUrl = "https://academic-management-backend.onrender.com/api/v1/classes";
    }
    ClassOperation.prototype.create = function (info, token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_28;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post("".concat(this.baseUrl, "/create"), info, {
                                withCredentials: true,
                                headers: {
                                    Authorization: token.token
                                }
                            })];
                    case 1:
                        response = _c.sent();
                        data = response.data;
                        return [2 /*return*/, { error: data.error, data: data.data, message: data.message }];
                    case 2:
                        error_28 = _c.sent();
                        console.log("Error create new user: ", (_a = error_28 === null || error_28 === void 0 ? void 0 : error_28.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_28 === null || error_28 === void 0 ? void 0 : error_28.request);
                        return [2 /*return*/, { error: (_b = error_28 === null || error_28 === void 0 ? void 0 : error_28.response) === null || _b === void 0 ? void 0 : _b.data, request: error_28 === null || error_28 === void 0 ? void 0 : error_28.request, status: error_28.response ? error_28.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ClassOperation.prototype.register = function (info, token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_29;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post("".concat(this.baseUrl, "/register"), info, {
                                withCredentials: true,
                                headers: {
                                    Authorization: token.token
                                }
                            })];
                    case 1:
                        response = _c.sent();
                        data = response.data;
                        return [2 /*return*/, { error: data.error, data: data.data, message: data.message }];
                    case 2:
                        error_29 = _c.sent();
                        console.log("Error create new user: ", (_a = error_29 === null || error_29 === void 0 ? void 0 : error_29.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_29 === null || error_29 === void 0 ? void 0 : error_29.request);
                        return [2 /*return*/, { error: (_b = error_29 === null || error_29 === void 0 ? void 0 : error_29.response) === null || _b === void 0 ? void 0 : _b.data, request: error_29 === null || error_29 === void 0 ? void 0 : error_29.request, status: error_29.response ? error_29.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ClassOperation.prototype.updateScore = function (info, token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_30;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post("".concat(this.baseUrl, "/update_score"), info, {
                                withCredentials: true,
                                headers: {
                                    Authorization: token.token
                                }
                            })];
                    case 1:
                        response = _c.sent();
                        data = response.data;
                        return [2 /*return*/, { error: data.error, data: data.data, message: data.message }];
                    case 2:
                        error_30 = _c.sent();
                        console.log("Error create new user: ", (_a = error_30 === null || error_30 === void 0 ? void 0 : error_30.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_30 === null || error_30 === void 0 ? void 0 : error_30.request);
                        return [2 /*return*/, { error: (_b = error_30 === null || error_30 === void 0 ? void 0 : error_30.response) === null || _b === void 0 ? void 0 : _b.data, request: error_30 === null || error_30 === void 0 ? void 0 : error_30.request, status: error_30.response ? error_30.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ClassOperation.prototype.cancelRegister = function (info, token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_31;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.put("".concat(this.baseUrl, "/cancel_register"), info, {
                                withCredentials: true,
                                headers: {
                                    Authorization: token.token
                                }
                            })];
                    case 1:
                        response = _c.sent();
                        data = response.data;
                        return [2 /*return*/, { error: data.error, data: data.data, message: data.message }];
                    case 2:
                        error_31 = _c.sent();
                        console.log("Error create new user: ", (_a = error_31 === null || error_31 === void 0 ? void 0 : error_31.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_31 === null || error_31 === void 0 ? void 0 : error_31.request);
                        return [2 /*return*/, { error: (_b = error_31 === null || error_31 === void 0 ? void 0 : error_31.response) === null || _b === void 0 ? void 0 : _b.data, request: error_31 === null || error_31 === void 0 ? void 0 : error_31.request, status: error_31.response ? error_31.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return ClassOperation;
}());
exports.ClassOperation = ClassOperation;
