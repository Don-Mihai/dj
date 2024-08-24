document
  .getElementById("calculateButton")
  .addEventListener("click", function () {
    const serviceType = document.getElementById("serviceType").value;
    const guestCount = parseInt(document.getElementById("guestCount").value);
    const packageType = document.querySelector(
      'input[name="package"]:checked',
    ).value;
    const photography = document.getElementById("photography").checked;
    const video = document.getElementById("video").checked;
    const music = document.getElementById("music").checked;

    // Базовые цены для пакетов
    const packagePrices = {
      basic: 1000,
      standard: 2000,
      premium: 3000,
    };

    // Дополнительные услуги
    const extraServices = {
      photography: 5000,
      video: 7000,
      music: 8000,
    };

    // Начальная стоимость в зависимости от типа пакета
    let totalCost = packagePrices[packageType] * guestCount;

    // Учет дополнительных услуг
    if (photography) {
      totalCost += extraServices.photography;
    }
    if (video) {
      totalCost += extraServices.video;
    }
    if (music) {
      totalCost += extraServices.music;
    }

    // Вывод общей стоимости
    document.getElementById("totalCost").textContent = totalCost;
  });
