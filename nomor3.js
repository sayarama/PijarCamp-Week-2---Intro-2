function SeleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
    if (nilaiAwal >= nilaiAkhir) {
        return "Final value must be greater than the initial value";
    }

    if (dataArray.length <= 5) {
        return "The numbers in dataArray must be greater than 5";
    }

    const hasilSeleksi = dataArray.filter(num => num > nilaiAwal && num < nilaiAkhir);

    if (hasilSeleksi.length === 0) {
        return "Value not found";
    }

    hasilSeleksi.sort((a, b) => a - b);

    return hasilSeleksi;
}

console.log(SeleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]));
console.log(SeleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8]));
console.log(SeleksiNilai(5, 17, [2, 25, 4])); 
console.log(SeleksiNilai(5, 17, [2, 25, 4, 1, 30, 18])); 
