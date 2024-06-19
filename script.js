const answerTemplate = "<i>Пример ответа: </i>\"3)\".\n\n\\(1)\\) \\(\\);\n\n\\(2)\\) \\(\\);\n\n\\(3)\\) \\(\\);\n\n\\(4)\\) \\(\\);";

const logicalOr = "\\left[\\begin{array}{l}\n\n\\\\\n\n\\end{array}\\right.";

function copy(arg) {
    navigator.clipboard.writeText(arg);
};

function handleCopyAnswerTemplate() {
    copy(answerTemplate);
};

function handleCopyLogicalOr() {
    copy(logicalOr);
};