const answerTemplate =
  "<i>Пример ответа: </i>«3)».\n\n\\(1)\\) \\(\\);\n\n\\(2)\\) \\(\\);\n\n\\(3)\\) \\(\\).";

const logicalOr =
  "\\left[\\begin{array}{l}\n\n\\\\[5px]\n\n\\end{array}\\right.";

const logicalAnd = "\\begin{cases}\n\n\\\\\n\n\\end{cases}";

const YesNo = "<i>В ответ введите </i>«да»<i> либо </i>«нет».";

const fractures =
  "<i>Полученные корни введите в ответ в порядке возрастания через пробел. Дроби записывайте в несократимом виде. Пример ответа:</i> «-4/7 2/3».";

const promptDrug = `Я предоставлю условие математической задачи и предложенное решение. Твоя задача — провести детальный анализ решения с учётом следующих аспектов:

    1. **Верность:**
       - Проверь, соответствует ли решение условию задачи.
       - Проверь правильность всех вычислений и применение корректных методов.
       - Укажи, если обнаружены арифметические или логические ошибки.

    2. **Логичность:**
       - Оцени последовательность рассуждений и использование математических определений и теорем.
       - Проверь, обоснованы ли все переходы и выводы, есть ли четкая аргументация.

    3. **Полнота:**
       - Определи, охватывает ли решение все аспекты поставленной задачи.
       - Проверь, не упущены ли важные шаги или дополнительные соображения, необходимые для полного понимания решения.
       - Если имеются альтернативные подходы или уточнения, отметь их.

    Если решение удовлетворяет всем критериям, сообщи, что оно корректно, логично и полное. Если обнаружены ошибки или недостатки, подробно опиши, что именно не соответствует требуемым критериям и почему.

    <Условие>

    </Условие>

    <Решение>

    </Решение>`;

const functionBuild = `<table>
  <tr>
    <td>\\(x\\)</td>
    <td>\\(\\)</td>
    <td>\\(\\)</td>
    <td>\\(\\)</td>
    <td>\\(\\)</td>
    <td>\\(\\)</td>
  </tr>
  <tr>
    <td>\\(y\\)</td>
    <td>\\(\\)</td>
    <td>\\(\\)</td>
    <td>\\(\\)</td>
    <td>\\(\\)</td>
    <td>\\(\\)</td>
  </tr>
</table>`;

function copy(arg) {
  navigator.clipboard.writeText(arg);
}

function handleCopyFunctionBuild() {
  copy(functionBuild);
}

function handleCopyAnswerTemplate() {
  copy(answerTemplate);
}

function handleCopyLogicalOr() {
  copy(logicalOr);
}

function handleCopyLogicalAnd() {
  copy(logicalAnd);
}

function handleCopyYesNo() {
  copy(YesNo);
}

function handleCopyFractures() {
  copy(fractures);
}

function copyDrug() {
  copy(promptDrug);
}

window.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("newPageStatus");
  const checkBox = document.getElementById("newPage");

  function touchNewPageButton() {
    if (button.innerText == "В той же вкладке") {
      button.innerText = "В новой вкладке";
      localStorage.setItem("newPageStatus", "В новой вкладке");
      localStorage.setItem("newPage", "true");
    } else {
      button.innerText = "В той же вкладке";
      localStorage.setItem("newPageStatus", "В той же вкладке");
      localStorage.setItem("newPage", "false");
    }
  }

  const savedStatus = localStorage.getItem("newPageStatus");
  if (savedStatus) {
    button.innerText = savedStatus;
  }

  button.onclick = touchNewPageButton;

  const links = document.querySelectorAll(".item a");

  if (localStorage.getItem("newPage") === "true") {
    checkBox.checked = true;
    addTargetBlank();
  }

  function addTargetBlank() {
    links.forEach((link) => link.setAttribute("target", "_blank"));
  }

  function removeTargetBlank() {
    links.forEach((link) => link.removeAttribute("target"));
  }

  function isValidBook(nodeList, book) {
    if (book.startsWith("http")) {
      window.open(book, "_self");
      return true;
    }

    if (book == "Алгебра 9 класс. Л. Г. Петерсон. Часть 1 и 2") {
      const part = prompt("Какая часть?");
      if (part == 1) {
        for (const elem of nodeList) {
          if (
            elem.attributes.href.nodeValue ==
            `./учебники/Алгебра 9 класс. Л. Г. Петерсон. Часть 1.pdf`
          ) {
            elem.click();
            return true;
          }
        }
      }
      if (part == 2) {
        for (const elem of nodeList) {
          if (
            elem.attributes.href.nodeValue ==
            `./учебники/Алгебра 9 класс. Л. Г. Петерсон. Часть 2.pdf`
          ) {
            elem.click();
            return true;
          }
        }
      }
      return false;
    }

    if (book == "Алгебра. 8 класс. Петерсон.") {
      const part = prompt("Какая часть?");
      if (part == 1) {
        for (const elem of nodeList) {
          if (
            elem.attributes.href.nodeValue ==
            `./учебники/Алгебра. 8 класс. Петерсон. 1 часть.pdf`
          ) {
            elem.click();
            return true;
          }
        }
      }
      if (part == 2) {
        for (const elem of nodeList) {
          if (
            elem.attributes.href.nodeValue ==
            `./учебники/Алгебра. 8 класс. Петерсон. 2 часть.pdf`
          ) {
            elem.click();
            return true;
          }
        }
      }
      if (part == 3) {
        for (const elem of nodeList) {
          if (
            elem.attributes.href.nodeValue ==
            `./учебники/Алгебра. 8 класс. Петерсон. 3 часть.pdf`
          ) {
            elem.click();
            return true;
          }
        }
      }
    }

    if (book == "Математика 7-ой класс. Петерсон") {
      const part = prompt("Какая часть?");
      if (part == 1) {
        for (const elem of nodeList) {
          if (
            elem.attributes.href.nodeValue ==
            `./учебники/Математика 7-ой класс. Петерсон, 1 часть.pdf`
          ) {
            elem.click();
            return true;
          }
        }
      }
      if (part == 2) {
        for (const elem of nodeList) {
          if (
            elem.attributes.href.nodeValue ==
            `./учебники/Математика 7-ой класс. Петерсон, 2 часть.pdf`
          ) {
            elem.click();
            return true;
          }
        }
      }
      if (part == 3) {
        for (const elem of nodeList) {
          if (
            elem.attributes.href.nodeValue ==
            `./учебники/Математика 7-ой класс. Петерсон, 3 часть.pdf`
          ) {
            elem.click();
            return true;
          }
        }
      }
    }

    if (book == "Алгебра 8 класс. Углубленный. Мордкович") {
      const part = prompt("Какая часть? ('1', если задания, '2' если теория)");
      if (part == "1") {
        for (const elem of nodeList) {
          if (
            elem.attributes.href.nodeValue ==
            `./учебники/Алгебра 8 класс. Углубленный. Мордкович 2 часть.pdf`
          ) {
            elem.click();
            return true;
          }
        }
      }
      if (part == "2") {
        for (const elem of nodeList) {
          if (
            elem.attributes.href.nodeValue ==
            `./учебники/Алгебра 8 класс. Углубленный. Мордкович 1 часть.pdf`
          ) {
            elem.click();
            return true;
          }
        }
      }
      return false;
    }

    if (book == "Алгебра 9-ый класс. Мордкович") {
      const part = prompt("Какая часть? ('1', если задания, '2' если теория)");
      if (part == "1") {
        for (const elem of nodeList) {
          if (
            elem.attributes.href.nodeValue ==
            `./учебники/Алгебра 9-ый класс. Мордкович 2 часть.pdf`
          ) {
            elem.click();
            return true;
          }
        }
      }
      if (part == "2") {
        for (const elem of nodeList) {
          if (
            elem.attributes.href.nodeValue ==
            `./учебники/Алгебра 9-ый класс. Мордкович 1 часть.pdf`
          ) {
            elem.click();
            return true;
          }
        }
      }
      return false;
    }

    if (
      book ==
      "Сборник задач по алгебре: учебное пособие для 8-9 кл. с углубленным изучением математики - Галицкий М.Л., Гольдман А.М., Звавич Л.И."
    ) {
      for (const elem of nodeList) {
        if (
          elem.attributes.href.nodeValue ==
          `./учебники/Сборник задач по алгебре для 8-9 углубленный Галицкий.pdf`
        ) {
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

  this.document.addEventListener("paste", function (event) {
    event.preventDefault();
    const book = event.clipboardData.getData("text/plain").trim();
    if (book.includes("Book") && !book.includes("Comment")) {
      bookSearch(
        event,
        book
          .trim()
          .split("Book:")
          .map((el) => el.trim())[1],
      );
    } else if (book.includes("Book") && book.includes("Comment")) {
      bookSearch(
        event,
        book.trim().split("Book:")[1].split("Comment:")[0].trim(),
      );
      // } else if (book.includes("http") || book.includes(".ru")) {
      //   window.open(book, "_self");
    } else {
      bookSearch(event, book);
    }
  });

  this.document.addEventListener("dragover", function (event) {
    event.preventDefault();
  });

  this.document.addEventListener("drop", function (event) {
    event.preventDefault();
    const book = event.dataTransfer.getData("text/plain").trim();
    if (book.includes("Book") && !book.includes("Comment")) {
      bookSearch(
        event,
        book
          .trim()
          .split("Book:")
          .map((el) => el.trim())[1],
      );
    } else if (book.includes("Book") && book.includes("Comment")) {
      bookSearch(
        event,
        book.trim().split("Book:")[1].split("Comment:")[0].trim(),
      );
    } else {
      bookSearch(event, book);
    }
  });

  function bookSearch(event, book) {
    const nodeList = Array.from(document.querySelectorAll("div a"));
    const notification = document.getElementById("notification");
    // const book = event.clipboardData.getData('text/plain').trim();

    if (!isValidBook(nodeList, book)) {
      notification.classList.remove("fade-out");
      notification.classList.add("show");

      setTimeout(function () {
        notification.classList.add("fade-out");
      }, 2000);

      setTimeout(function () {
        notification.classList.remove("show");
      }, 2500);
    }
  }
});
