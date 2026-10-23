const rules = [
  {
    id: "pib",
    row: "row-pib",
    name: "ПІБ",
    re: /^[А-ЯІЇЄҐ][а-яіїєґ']+ [А-ЯІЇЄҐ]\.[А-ЯІЇЄҐ]\.$/,
    msg: "Формат: Прізвище І.Б. (наприклад, Реуцький А.О.)",
  },
  {
    id: "group",
    row: "row-group",
    name: "Група",
    re: /^[А-ЯІЇЄҐ]{2}-\d{2}$/,
    msg: "Формат: ТТ-ЧЧ (наприклад, ІМ-41)",
  },
  {
    id: "phone",
    row: "row-phone",
    name: "Телефон",
    re: /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/,
    msg: "Формат: (ЧЧЧ)-ЧЧЧ-ЧЧ-ЧЧ",
  },
  {
    id: "idcard",
    row: "row-idcard",
    name: "ID-card",
    re: /^[А-ЯІЇЄҐ]{2} №\d{6}$/,
    msg: "Формат: ТТ №ЧЧЧЧЧЧ (наприклад, ЕН №123456)",
  },
  {
    id: "faculty",
    row: "row-faculty",
    name: "Факультет",
    re: /^[А-ЯІЇЄҐа-яіїєґ]{4}$/,
    msg: "Формат: 4 літери (наприклад, ФІОТ)",
  },
];

document.getElementById("studentForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let allValid = true;
  const values = [];

  rules.forEach(function (r) {
    const value = document.getElementById(r.id).value.trim();
    const row = document.getElementById(r.row);
    if (r.re.test(value)) {
      row.classList.remove("error");
      row.removeAttribute("data-msg");
      values.push([r.name, value]);
    } else {
      row.classList.add("error");
      row.setAttribute("data-msg", r.msg);
      allValid = false;
    }
  });

  if (allValid) showResult(values);
});

function showResult(values) {
  const w = window.open("", "result", "width=420,height=360");
  let html =
    '<!DOCTYPE html><html lang="uk"><head><meta charset="UTF-8">' +
    '<title>Введені дані</title></head><body style="font-family:Arial;padding:20px">' +
    '<h2>Введена інформація</h2><table border="1" cellpadding="6" style="border-collapse:collapse">';
  values.forEach(function (v) {
    html += '<tr><th align="left">' + v[0] + "</th><td></td></tr>";
  });
  html += "</table></body></html>";
  w.document.write(html);
  w.document.close();

  const cells = w.document.querySelectorAll("td");
  values.forEach(function (v, i) {
    cells[i].textContent = v[1];
  });
}
