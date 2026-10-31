nama = "nama saya bagus"
pekerjaan = "sekolah tebal-tebal, coding tipis-tipis"
umur = 17

print(nama, pekerjaan, umur)


if umur <= 17:
    print("boleh melanjutkan jenjang lebih lanjut")
else:
    print("belum waktunya melanjutkan")

nilai = 85

if nilai <= 80:
    print("Lulus")
else:
    print("Tidak lulus")


print("================================")
print("       TOKO KOMPUTER VICAR")
print("================================")

nama = input("Masukkan nama pembeli: ")

print("\nHalo,", nama, "!")
print("Pilih barang yang ingin dibeli:")
print("1. Mouse       - Rp50.000")
print("2. Keyboard    - Rp120.000")
print("3. Headset     - Rp150.000")

pilihan = input("\nMasukkan nomor barang: ")

if pilihan == "1":
    barang = "Mouse"
    harga = 50000
elif pilihan == "2":
    barang = "Keyboard"
    harga = 120000
elif pilihan == "3":
    barang = "Headset"
    harga = 150000
else:
    barang = ""
    harga = 0
    print("Nomor barang tidak tersedia!")

if harga > 0:
    jumlah = int(input("Mau beli berapa unit? "))

    if jumlah > 0:
        total = harga * jumlah

        print("\n========== STRUK ==========")
        print("Pembeli :", nama)
        print("Barang  :", barang)
        print("Harga   : Rp", harga)
        print("Jumlah  :", jumlah)
        print("Total   : Rp", total)

        if total >= 300000:
            print("Status  : Pembelian besar")
        elif total >= 150000:
            print("Status  : Pembelian sedang")
        else:
            print("Status  : Pembelian kecil")

        print("===========================")
        print("Terima kasih sudah membeli!")
    else:
        print("Jumlah barang harus lebih dari 0.")
