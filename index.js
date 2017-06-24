"use strict";
exports.__esModule = true;
function TestCases(description, cases, test) {
    var _loop_1 = function (i) {
        it(description, function () {
            test(cases[i]);
        });
    };
    for (var i = 0; i < cases.length; i++) {
        _loop_1(i);
    }
}
exports.TestCases = TestCases;
