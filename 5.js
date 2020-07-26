class lingkaran{
    constructor(j){
        //atribut objek lingkaran didefinisikan dalam method constructor
        this.jarijari = j
    }

    //fungsi luas lingkaran
    luas = () => {
        return 3.14 * (this.jarijari ** 2)
    }

    //fungsi keliling lingkaran
    keliling = () => {
        return 3.14 * (this.jarijari * 2)
    }
}

//class tabung dapat menggunakan atribut, method, dan fungsi dari class lingkaran
class tabung extends lingkaran{
    constructor(j, t){
        //memanggil atribut constructor lingkaran
        super(j)
        //mendeklarasikan atribut class tabung sendiri
        this.tinggi = t
    }

    //fungsi luas permukaan tabung
    luasPermukaan = () => {
        //rumus permukaan tabung tanpa tutup
        //menggunakan fungsi dari class lingkaran
        return this.keliling() * (this.jarijari + this.tinggi) - this.luas()
    }

    //fungsi luas selimut tabung
    luasSelimut = () => {
        //rumus selimut
        //menggunakan atribut dari class lingkaran
        return 3.14 * (2 * this.jarijari) * this.tinggi
}

    //fungsi volume tabung
    volume = () => {
        //menggunakan fungsi dan atribut dari class lingkaran
        return this.luas() * this.tinggi
    }
}

//class kerucut dapat menggunakan atribut, method, dan fungsi dari class lingkaran
class kerucut extends lingkaran{
    constructor(j, t){
        //memanggil atribut constructor lingkaran
        super(j)
        //mendeklarasikan atribut class kerucut sendiri
        this.tinggi = t
    }

    //fungsi luas permukaan kerucut
    luasPermukaan = () => {
        //menggunakan fungsi dari class lingkaran dan fungsi akar untuk mencari sisimiring selimut
        return this.luas() + 3.14 * this.jarijari * (Math.sqrt(this.tinggi ** 2 + this.jarijari ** 2))
    }

    //fungsi luas selimut kerucut
    luasSelimut = () => {
        //rumus permukaan selimut
        //menggunakan fungsi dari class lingkaran dan fungsi akar untuk mencari sisimiring selimut
        return 3.14 * this.jarijari * (Math.sqrt(this.tinggi ** 2 + this.jarijari ** 2))
    }

    //fungsi volume kerucut
    volume = () => {
        //menggunakan fungsi dan atribut dari class lingkaran
        return 1/3 * this.luas() * this.tinggi
    }
}

//class bola dapat menggunakan atribut, method, dan fungsi dari class lingkaran
class bola extends lingkaran{
    constructor(j){
        //memanggil atribut constructor lingkaran
        super(j)
    }

    //fungsi luas permukaan bola
    luasPermukaan = () => {
        //menggunakan fungsi dari class lingkaran
        return 4 * this.luas()
    }

    //fungsi volume bola
    volume = () => {
        //menggunakan fungsi dan atribut dari class lingkaran
        return 4/3 * (this.luas() * this.jarijari)
    }
}

//membuat objek tabung, kerucut, bola baru yang akan dihitung
/**/
//gelas menggunakan rumus tabung tanpa tutup karena gelas tidak mempunyai permukaan atas
let gelas = new tabung(15/2,50)
let cone = new kerucut(20/2,40)
let bolasepak = new bola(30/2)

//menampilkan luas permukaan gelas dengan menggunakan fungsi luasPermukaan class tabung 
console.log("Luas Permukaan Gelas = " + gelas.luasPermukaan() + " cm2");
//menampilkan luas selimut gelas dengan menggunakan fungsi luasSelimut class tabung 
console.log("Luas Selimut Gelas = " + gelas.luasSelimut() + " cm2");
//menampilkan volume gelas dengan menggunakan fungsi volume class tabung 
console.log("Volume Gelas = " + gelas.volume() + " cm3");

//membuat pembatas antar objek
console.log("-------------------------------------------------------");

//menampilkan luas permukaan cone dengan menggunakan fungsi luasPermukaan class kerucut 
console.log("Luas Permukaan Cone = " + cone.luasPermukaan() + " cm2");
//menampilkan luas selimut cone dengan menggunakan fungsi luasSelimut class kerucut 
console.log("Luas Selimut Cone = " + cone.luasSelimut() + " cm2");
//menampilkan volume cone dengan menggunakan fungsi volume class kerucut 
console.log("Volume Cone = " + cone.volume() + " cm3");

//membuat pembatas antar objek
console.log("-------------------------------------------------------");

//menampilkan luas permukaan bola dengan menggunakan fungsi luasPermukaan class bola 
console.log("Luas Permukaan Bola = " + bolasepak.luasPermukaan() + " cm2");
//menampilkan volume bola dengan menggunakan fungsi volume class bola 
console.log("Volume Bola = " + bolasepak.volume() + " cm3");