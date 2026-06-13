function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);

  const whatsapp = String(data.whatsapp || "").replace(/\D/g, "");

  const lastRow = sheet.getLastRow();

  if (lastRow > 1) {
    const values = sheet.getRange(2, 2, lastRow - 1, 1).getValues().flat();

    if (values.includes(whatsapp)) {
      return ContentService
        .createTextOutput(JSON.stringify({
          success: false,
          message: "Este WhatsApp já foi cadastrado no sorteio."
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }
  }

  sheet.appendRow([
    new Date(),
    whatsapp,
    data.nome || "",
    data.instagram || "",
    data.confirmouSeguir ? "Sim" : "Não",
    data.origem || "site"
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({
      success: true,
      message: "Inscrição realizada com sucesso. Boa sorte!"
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

function criarCabecalho() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.clear();
  sheet.appendRow([
    "Data",
    "WhatsApp",
    "Nome",
    "Instagram",
    "Confirmou que segue",
    "Origem"
  ]);
}
