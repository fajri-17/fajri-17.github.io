function triangleArea() {
   let alas = document.getElementById('input_one').value;
   let tinggi = document.getElementById('input_two').value;
   let luas = 0.5 * Number(alas) * Number(tinggi);
   let result = document.getElementById('result');

   if (alas === '' || tinggi === '') {
      result.innerHTML = `<mark>Inputan Harus Berupa Angka!</mark>`
   } else {
   result.innerHTML = "L = 1/2 x a x t" + "<br>" + `L = 1/2 x ${alas} X ${tinggi}` + "<br>" + `<b>L = ${luas}</b>`
   }
}

function aroundTheTriangle() {
   let sisiA = document.getElementById('input_one').value;
   let sisiB = document.getElementById('input_two').value;
   let sisiC = document.getElementById('input_three').value;
   let keliling = Number(sisiA) + Number(sisiB) + Number(sisiC);
   let result = document.getElementById('result');

   if (sisiA === '' || sisiB === '' || sisiC === '') {
      result.innerHTML = `<mark>Inputan Harus Berupa Angka!</mark>`
   } else {
      result.innerHTML = "K = Sisi A + Sisi B + Sisi C" + "<br>" + `K = ${sisiA} + ${sisiB} + ${sisiC}` + "<br>" + `<b>K = ${keliling}</b>`
   }
   
}

function parallelogramArea() {
   let alas = document.getElementById('input_one').value;
   let tinggi = document.getElementById('input_two').value;
   let luas = Number(alas) * Number(tinggi);
   let result = document.getElementById('result');

   if (alas === '' || tinggi === '') {
      result.innerHTML = `<mark>Inputan Harus Berupa Angka!</mark>`
   } else {
      result.innerHTML = "L = a x t" + "<br>" + `L = ${alas} X ${tinggi}` + "<br>" + `<b>L = ${luas}</b>`
   }
}

function aroundParallelogram() {
   let sisiA = document.getElementById('input_one').value;
   let sisiB = document.getElementById('input_two').value;
   let keliling = 2 * (Number(sisiA) + Number(sisiB));
   let result = document.getElementById('result');

   if (sisiA === '' || sisiB === '') {
      result.innerHTML = `<mark>Inputan Harus Berupa Angka!</mark>`
   } else {
      result.innerHTML = "K = 2 * (a + b)" + "<br>" + `K = 2 * (${sisiA} X ${sisiB})` + "<br>" + `<b>L = ${keliling}</b>`
   }
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

function displayOptionTriangle() {
   /** Load Page */
   /** Option Triangle */
   document.getElementById('option').style.display = 'flex';
   document.getElementById('change_1').innerText = 'Luas Segitiga'
   document.getElementById('change_2').innerText = 'Keliling Segitiga';

   /** function display */
   
   /** Clear */
   document.getElementById('click_change_1').removeEventListener('click', displayParallelogramArea);
   document.getElementById('click_change_2').removeEventListener('click', displayAroundParallelogram);

   document.getElementById('click_change_1').addEventListener('click', displayTriangleArea);
   document.getElementById('click_change_2').addEventListener('click', displayAroundTheTriangle);
}

function displayOptionParallelogram() {
   /** Option Parallelogram */
   document.getElementById('option').style.display = 'flex';
   document.getElementById('change_1').innerText = 'Luas Jejar Genjang';
   document.getElementById('change_2').innerText = 'Keliling Jejar Genjang';

   /** Clear event listener*/
   document.getElementById('click_change_1').removeEventListener('click', displayTriangleArea);
   document.getElementById('click_change_2').removeEventListener('click', displayAroundTheTriangle);
   
   /** function display  */
   document.getElementById('click_change_1').addEventListener('click', displayParallelogramArea);
   document.getElementById('click_change_2').addEventListener('click', displayAroundParallelogram);
}


function displayTriangleArea() {
   displayOptionTriangle();

   /** Clear event listener */
   document.getElementById('run_calc').removeEventListener('click', aroundTheTriangle);
   document.getElementById('run_calc').removeEventListener('click', aroundParallelogram);
   document.getElementById('run_calc').removeEventListener('click', parallelogramArea);

   document.getElementById('run_calc').addEventListener('click', triangleArea);
   /** Content */
   document.getElementById('title').innerText = 'Luas Segitiga';
   document.getElementById('image').src = '/assets/img/segitiga.png';
   document.getElementById('text_1').innerText = 'Rumus Luas Segitiga yaitu:';
   document.getElementById('text_2').innerText = 'L = 1/2 x a x t';
   document.getElementById('text_3').innerText = 'L = Luas';
   document.getElementById('text_4').innerText = 'a = Panjang Alas';
   document.getElementById('text_5').innerText = 't = Tinggi';
   document.getElementById('text_6').style.display = 'none';

   /** Calc */
   document.getElementById('input_none').style.display = 'none';
   document.getElementById('title_calc').innerText = 'Hitung Luas Segitiga';
   document.getElementById('label_value_1').innerText = 'Nilai Alas';
   document.getElementById('label_value_2').innerText = 'Nilai Tinggi';

   reset();
}

function displayAroundTheTriangle() {
   displayOptionTriangle();
   /** Clear event listener  */
   document.getElementById('run_calc').removeEventListener('click', triangleArea);
   document.getElementById('run_calc').removeEventListener('click', aroundParallelogram);
   document.getElementById('run_calc').removeEventListener('click', parallelogramArea);

   document.getElementById('run_calc').addEventListener('click', aroundTheTriangle);

   /** Content */
   document.getElementById('title').innerText = 'Keliling Segitiga';
   document.getElementById('image').src = '/assets/img/segitiga.png';
   document.getElementById('text_1').innerText = 'Rumus Keliling Segitiga yaitu:';
   document.getElementById('text_2').innerText = 'K = S1 + S2 + S3';
   document.getElementById('text_3').innerText = 'K = Keliling';
   document.getElementById('text_4').innerText = 'S1 = Panjang Sisi A';
   document.getElementById('text_5').innerText = 'S2 = Panjang Sisi B';
   document.getElementById('text_6').style.display = 'block';
   document.getElementById('text_6').innerText = 'S3 = Panjang Sisi C';

   /** Calc */
   document.getElementById('title_calc').innerText = 'Hitung Keliling Segitiga';
   document.getElementById('label_value_1').innerText = 'Panjang Sisi A';
   document.getElementById('label_value_2').innerText = 'Panjang Sisi B';
   document.getElementById('input_none').style.display = 'block';
   document.getElementById('label_value_3').innerText = 'Panjang Sisi c';

   reset();
}

function displayParallelogramArea() {
   displayOptionParallelogram();
   /** Clear event listener */
   document.getElementById('run_calc').removeEventListener('click', aroundParallelogram);
   document.getElementById('run_calc').removeEventListener('click', triangleArea);
   document.getElementById('run_calc').removeEventListener('click', aroundTheTriangle);

   document.getElementById('run_calc').addEventListener('click', parallelogramArea);
   /** Content */
   document.getElementById('title').innerText = 'Luas Jejar Genjang';
   document.getElementById('image').src = '/assets/img/k-jajar-genjang.png';
   document.getElementById('text_1').innerText = 'Rumus Luas Jejar Genjang yaitu:';
   document.getElementById('text_2').innerText = 'L = a x t';
   document.getElementById('text_3').innerText = 'L = Luas';
   document.getElementById('text_4').innerText = 'a = Panjang Alas';
   document.getElementById('text_5').innerText = 't = Tinggi';
   document.getElementById('text_6').style.display = 'none';

   /** Calc */
   document.getElementById('input_none').style.display = 'none';
   document.getElementById('title_calc').innerText = 'Hitung Luas Jejar Genjang';
   document.getElementById('label_value_1').innerText = 'Nilai Alas';
   document.getElementById('label_value_2').innerText = 'Nilai Tinggi';

   reset();
}

function displayAroundParallelogram() {
   displayOptionParallelogram();
   /** Clear event listener */
   document.getElementById('run_calc').removeEventListener('click', parallelogramArea);
   document.getElementById('run_calc').removeEventListener('click', triangleArea);
   document.getElementById('run_calc').removeEventListener('click', aroundTheTriangle);

   document.getElementById('run_calc').addEventListener('click', aroundParallelogram);

   /** Content */
   document.getElementById('title').innerText = 'Keliling Jejar Genjang';
   document.getElementById('image').src = '/assets/img/k-jajar-genjang.png';
   document.getElementById('text_1').innerText = 'Rumus Keliling Jejar Genjang yaitu:';
   document.getElementById('text_2').innerText = 'K = 2 * (a + b)';
   document.getElementById('text_3').innerText = 'K = Keliling';
   document.getElementById('text_4').innerText = 'a = Panjang Alas sisi Jejar Genjang';
   document.getElementById('text_5').innerText = 'b = Panjang Sisi Jejar Genjang Lainnya';
   document.getElementById('text_6').style.display = 'none';

   /** Calc */
   document.getElementById('title_calc').innerText = 'Hitung Keliling Jejar Genjang';
   document.getElementById('label_value_1').innerText = 'Panjang Sisi A';
   document.getElementById('label_value_2').innerText = 'Panjang Sisi B';
   document.getElementById('input_none').style.display = 'none';

   reset();
}
