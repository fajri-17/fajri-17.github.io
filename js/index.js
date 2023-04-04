function triangleArea() {
   let alas = document.getElementById('input_one').value;
   let tinggi = document.getElementById('input_two').value;
   let luas = 0.5 * alas * tinggi;
   let result = document.getElementById('result');

   result.innerHTML = "L = 1/2 x a x t" + "<br>" + `L = 1/2 x ${alas} X ${tinggi}` + "<br>" + `<b>L = ${luas}</b>`
}

function aroundTheTriangle() {
   const sisiA = document.getElementById('input_one').value;
   const sisiB = document.getElementById('input_two').value;
   const sisiC = document.getElementById('input_three').value;
   const keliling = Number(sisiA) + Number(sisiB) + Number(sisiC);
   console.log(keliling)
   const result = document.getElementById('result');

   result.innerHTML = "K = Sisi A + Sisi B + Sisi C" + "<br>" + `K = ${sisiA} + ${sisiB} + ${sisiC}` + "<br>" + `<b>K = ${keliling}</b>`
}

function parallelogramArea() {
   let alas = document.getElementById('input_one').value;
   let tinggi = document.getElementById('input_two').value;
   let luas = alas * tinggi;
   let result = document.getElementById('result');

   console.log(result);

   result.innerHTML = "L = a x t" + "<br>" + `L = ${alas} X ${tinggi}` + "<br>" + `<b>L = ${luas}</b>`
}

function aroundParallelogram() {
   let sisiA = document.getElementById('input_one').value;
   let sisiB = document.getElementById('input_two').value;
   let keliling = 2 * (Number(sisiA) + Number(sisiB));
   let result = document.getElementById('result');

   result.innerHTML = "K = 2 * (a + b)" + "<br>" + `K = ${sisiA} X ${sisiB}` + "<br>" + `<b>L = ${keliling}</b>`
}

function reset() {
   let num1 = document.getElementById('input_one');
   let num2 = document.getElementById('input_two');
   let num3 = document.getElementById('input_three');
   let result = document.getElementById('result');

   result.innerText = '';
   num2.value = '';
   num1.value = '';
   num3.value = '';

}

function displayJajarGenjang() {
   document.getElementById('option').style.display = 'flex';
   document.getElementById('change_1').innerText = 'Luas Jajar Genjang';
   document.getElementById('change_2').innerText = 'Keliling Jajar Genjang';
   document.getElementById('title').innerText = 'Luas Jajar Genjang';
   document.getElementById('image').src = '/assets/img/jajar-genjang.png';
   document.getElementById('text_1').innerText = 'Rumus Luas Jajar Genjang yaitu:';
   document.getElementById('text_2').innerText = 'L = a x t';
   document.getElementById('text_5').style.display = 'none';
   document.getElementById('input_none').style.display = 'none';
   document.getElementById('hitung_title').innerText = 'Hitung Luas Jajar Genjang';
   document.getElementById('hitung').addEventListener('click', parallelogramArea);
   
   reset();
   document.getElementById('click_change_1').addEventListener('click', displayJajarGenjang);
   document.getElementById('click_change_2').addEventListener('click', displayAroundParallelogram);
}

function displayArroundTriangle() {
   document.getElementById('title').innerText = 'Keliling Segitiga';
   document.getElementById('image').src = '/assets/img/k-triangle.png';
   document.getElementById('text_1').innerText = 'Rumus Keliling Segitiga yaitu:';
   document.getElementById('text_2').innerText = 'K = S1 + S2 + S3';
   document.getElementById('text_3').innerText = 'S1 = Sisi A';
   document.getElementById('text_4').innerText = 'S2 = Sisi B';
   document.getElementById('text_5').style.display = 'block';
   document.getElementById('text_5').innerText = 'S3 = Sisi C';
   document.getElementById('input_none').style.display = 'block';
   document.getElementById('hitung_title').innerText = 'Hitung Keliling Segitiga';
   document.getElementById('nilai_1').innerText = 'Sisi A'
   document.getElementById('nilai_2').innerText = 'Sisi B'
   document.getElementById('nilai_3').innerText = 'Sisi C'

   document.getElementById('hitung').addEventListener('click', aroundTheTriangle);

   document.getElementById('option').style.display = 'flex';
   reset();
}

function displayTriangle() {
   document.getElementById('option').style.display = 'flex';
   document.getElementById('change_1').innerText = 'Luas Segitiga';
   document.getElementById('change_2').innerText = 'Keliling Segitiga';
   document.getElementById('title').innerText = 'Luas Segitiga';
   document.getElementById('image').src = '/assets/img/segitiga.png';
   document.getElementById('text_1').innerText = 'Rumus Luas Segitiga yaitu:';
   document.getElementById('text_2').innerText = 'L = 1/2 x a x t';
   document.getElementById('text_5').style.display = 'block';
   document.getElementById('hitung_title').innerText = 'Hitung Luas Segitiga';
   document.getElementById('hitung').addEventListener('click', triangleArea);
   document.getElementById('input_none').style.display = 'none';
   
   document.getElementById('click_change_2').addEventListener('click', displayArroundTriangle)
   document.getElementById('click_change_1').addEventListener('click', displayTriangle)
   reset();
}

function displayAroundParallelogram() {
   document.getElementById('title').innerText = 'Keliling Jajar Genjang';
   document.getElementById('image').src = '/assets/img/k-jajar-genjang.png';
   document.getElementById('text_1').innerText = 'Rumus Keliling Jejar Genjang yaitu:';
   document.getElementById('text_2').innerText = 'K = 2 * (a + b)';
   document.getElementById('text_3').innerText = 'a = Alas Jejar Genjang';
   document.getElementById('text_4').innerText = 'b = Sisi Jejar Genjang Lainnya';
   document.getElementById('text_5').style.display = 'none';
   document.getElementById('input_none').style.display = 'none';
   document.getElementById('hitung_title').innerText = 'Hitung Keliling Jejar Genjang';
   document.getElementById('nilai_1').innerText = 'Alas Jejar Genjang';
   document.getElementById('nilai_2').innerText = 'Sisi Jejar Genjang Lainnya';

   document.getElementById('hitung').addEventListener('click', aroundParallelogram);

   document.getElementById('option').style.display = 'flex';
   reset();
}