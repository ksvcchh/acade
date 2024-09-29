const answerTemplate = "<i>Пример ответа: </i>\"3)\".\n\n\\(1)\\) \\(\\);\n\n\\(2)\\) \\(\\);\n\n\\(3)\\) \\(\\).";

const logicalOr = "\\left[\\begin{array}{l}\n\n\\\\\n\n\\end{array}\\right.";

const logicalAnd = "\\begin{cases}\n\n\\\\\n\n\\end{cases}";

const YesNo = "<i>В ответ введите </i>\"да\"<i> либо </i>\"нет\".";

function copy(arg) {
    navigator.clipboard.writeText(arg);
};

function handleCopyAnswerTemplate() {
    copy(answerTemplate);
};

function handleCopyLogicalOr() {
    copy(logicalOr);
};

function handleCopyLogicalAnd() {
    copy(logicalAnd);
};

function handleCopyYesNo() {
    copy(YesNo);
};


window.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('newPageStatus');
    const checkBox = document.getElementById('newPage');

    function touchNewPageButton() {
        if (button.innerText == "В той же вкладке") {
            button.innerText = "В новой вкладке";
            localStorage.setItem('newPageStatus', 'В новой вкладке');
            localStorage.setItem('newPage', 'true');
        }
        else {
            button.innerText = "В той же вкладке";
            localStorage.setItem('newPageStatus', 'В той же вкладке');
            localStorage.setItem('newPage', 'false');
        }
    }

    const savedStatus = localStorage.getItem('newPageStatus');
    if (savedStatus) {
        button.innerText = savedStatus;
    }

    button.onclick = touchNewPageButton;

    const links = document.querySelectorAll('.item a');

    if (localStorage.getItem('newPage') === 'true') {
        checkBox.checked = true;
        addTargetBlank();
    }

    function addTargetBlank() {
        links.forEach(link => link.setAttribute('target', '_blank'));
    }

    function removeTargetBlank() {
        links.forEach(link => link.removeAttribute('target'));
    }

    function isValidBook(nodeList, book) {

        if (book.startsWith("http")) {
            window.open(book);
            return true;
        }
        
        if (book == "Алгебра 9 класс. Л. Г. Петерсон. Часть 1 и 2") {
            const part = prompt("Какая часть?")
            if (part == 1) {
                for (const elem of nodeList) {
                    if (elem.attributes.href.nodeValue == `./учебники/Алгебра 9 класс. Л. Г. Петерсон. Часть 1.pdf`) {
                        elem.click();
                        return true;
                    }
                }
            }
            if (part == 2) {
                for (const elem of nodeList) {
                    if (elem.attributes.href.nodeValue == `./учебники/Алгебра 9 класс. Л. Г. Петерсон. Часть 2.pdf`) {
                        elem.click();
                        return true;
                    }
                }
            }
            return false;
        }

        if (book == "Алгебра. 8 класс. Петерсон.") {
            const part = prompt("Какая часть?")
            if (part == 1) {
                for (const elem of nodeList) {
                    if (elem.attributes.href.nodeValue == `./учебники/Алгебра. 8 класс. Петерсон. 1 часть.pdf`) {
                        elem.click();
                        return true;
                    }
                }
            }
            if (part == 2) {
                for (const elem of nodeList) {
                    if (elem.attributes.href.nodeValue == `./учебники/Алгебра. 8 класс. Петерсон. 2 часть.pdf`) {
                        elem.click();
                        return true;
                    }
                }
            }
            if (part == 3) {
                for (const elem of nodeList) {
                    if (elem.attributes.href.nodeValue == `./учебники/Алгебра. 8 класс. Петерсон. 3 часть.pdf`) {
                        elem.click();
                        return true;
                    }
                }
            }
        }

        if (book == "Математика 7-ой класс. Петерсон") {
            const part = prompt("Какая часть?")
            if (part == 1) {
                for (const elem of nodeList) {
                    if (elem.attributes.href.nodeValue == `./учебники/Математика 7-ой класс. Петерсон, 1 часть.pdf`) {
                        elem.click();
                        return true;
                    }
                }
            }
            if (part == 2) {
                for (const elem of nodeList) {
                    if (elem.attributes.href.nodeValue == `./учебники/Математика 7-ой класс. Петерсон, 2 часть.pdf`) {
                        elem.click();
                        return true;
                    }
                }
            }
            if (part == 3) {
                for (const elem of nodeList) {
                    if (elem.attributes.href.nodeValue == `./учебники/Математика 7-ой класс. Петерсон, 3 часть.pdf`) {
                        elem.click();
                        return true;
                    }
                }
            }
        }

        if (book == "Алгебра 8 класс. Углубленный. Мордкович") {
            const part = prompt("Какая часть? ('1', если задания, '2' если теория)")
            if (part == "1") {
                for (const elem of nodeList) {
                    if (elem.attributes.href.nodeValue == `./учебники/Алгебра 8 класс. Углубленный. Мордкович 2 часть.pdf`) {
                        elem.click();
                        return true;
                    }
                }
            }
            if (part == "2") {
                for (const elem of nodeList) {
                    if (elem.attributes.href.nodeValue == `./учебники/Алгебра 8 класс. Углубленный. Мордкович 1 часть.pdf`) {
                        elem.click();
                        return true;
                    }
                }
            }
            return false;
        }

        if (book == "Алгебра 9-ый класс. Мордкович") {
            const part = prompt("Какая часть? ('1', если задания, '2' если теория)")
            if (part == "1") {
                for (const elem of nodeList) {
                    if (elem.attributes.href.nodeValue == `./учебники/Алгебра 9-ый класс. Мордкович 2 часть.pdf`) {
                        elem.click();
                        return true;
                    }
                }
            }
            if (part == "2") {
                for (const elem of nodeList) {
                    if (elem.attributes.href.nodeValue == `./учебники/Алгебра 9-ый класс. Мордкович 1 часть.pdf`) {
                        elem.click();
                        return true;
                    }
                }
            }
            return false;
        }

        if (book == "Сборник задач по алгебре: учебное пособие для 8-9 кл. с углубленным изучением математики - Галицкий М.Л., Гольдман А.М., Звавич Л.И.") {
            for (const elem of nodeList) {
                if (elem.attributes.href.nodeValue == `./учебники/Сборник задач по алгебре для 8-9 углубленный Галицкий.pdf`) {
                    elem.click();
                    return true;
                }
            }
            return false;
        }

        for (const elem of nodeList) {
            if (elem.attributes.href.nodeValue == `./учебники/${book}.pdf`) {
                elem.click();
                return true;
            }
        }

        return false;
    }

    this.document.addEventListener("paste", function(event) {
        const book = event.clipboardData.getData('text/plain').trim();
        bookSearch(event, book);
    });

    this.document.addEventListener("dragover", function(event) {
        event.preventDefault();
    });

    this.document.addEventListener("drop", function(event) {
        event.preventDefault();
        const book = event.dataTransfer.getData('text/plain').trim();
        bookSearch(event, book);
    });

    function bookSearch(event, book) {
        const nodeList = Array.from(document.querySelectorAll("div a"));
        const notification = document.getElementById('notification');
        // const book = event.clipboardData.getData('text/plain').trim();

        if (!isValidBook(nodeList, book)) {
            notification.classList.remove('fade-out');
            notification.classList.add('show');
        
            setTimeout(function() {
                notification.classList.add('fade-out');
            }, 2000);
        
    
            setTimeout(function() {
                notification.classList.remove('show');
            }, 2500);
        }    
    }
});