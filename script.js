console.log("anjayyy mabar")

const URL_SCRIPT = "https://script.google.com/macros/s/AKfycbxTxnw4Yli--AFZoi3sqPa7SK_Mg3af8o-JAaboy7d6ge0M6rlWBUiXGs4gthYajWJu/exec";

const input = document.getElementById("pilihGambar");
const preview = document.getElementById("previewGambar");
const namaFile = document.getElementById("namaFile");
const tombol = document.getElementById("tombolUpload");
const status = document.getElementById("statusUpload");

let fileDipilih = null;

input.addEventListener("change", function () {
  const file = input.files[0];

  fileDipilih = null;
  tombol.disabled = true;
  preview.hidden = true;
  namaFile.textContent = "";
  status.textContent = "";

  if (!file) return;

  const tipeDiizinkan = [
    "image/jpeg",
    "image/png",
    "image/webp"
  ];

  if (!tipeDiizinkan.includes(file.type)) {
    status.textContent = "Pilih foto JPG, PNG, atau WEBP.";
    input.value = "";
    return;
  }

  if (file.size > 2 * 1024 * 1024) {
    status.textContent = "Ukuran maksimal foto 30 MB.";
    input.value = "";
    return;
  }

  fileDipilih = file;
  preview.src = URL.createObjectURL(file);
  preview.hidden = false;
  namaFile.textContent = file.name;
  tombol.disabled = false;
});

tombol.addEventListener("click", async function () {
  if (!fileDipilih) return;

  const file = fileDipilih;
  tombol.disabled = true;
  status.textContent = "Sedang mengirim foto...";

  try {
    const base64 = await new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        resolve(reader.result.split(",")[1]);
      };

      reader.onerror = () => reject(new Error("Gagal membaca foto."));
      reader.readAsDataURL(file);
    });

    const form = new URLSearchParams();

    form.set("payload", JSON.stringify({
      name: file.name,
      type: file.type,
      base64: base64
    }));

    await fetch(URL_SCRIPT, {
      method: "POST",
      body: form,
      mode: "no-cors"
    });

    status.textContent =
      "Permintaan terkirim. Periksa Google Drive untuk memastikan foto tersimpan.";

  } catch (error) {
    status.textContent = "Gagal: " + error.message;
  } finally {
    tombol.disabled = !fileDipilih;
  }
});
