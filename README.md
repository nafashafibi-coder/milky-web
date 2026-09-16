# milky-web
Website sekolah yang dibuat secara bersama untuk menyediakan informasi tentang kegiatan, program, dan acara sekolah.
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Milky Web - Informasi Sekolah</title>

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            scroll-behavior: smooth;
        }

        body {
            font-family: Arial, sans-serif;
            background-color: #f8f9ff;
            color: #333;
        }

        /* NAVBAR */
        nav {
            background-color: #ffffff;
            padding: 18px 8%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: sticky;
            top: 0;
            z-index: 1000;
            box-shadow: 0 2px 10px rgba(0,0,0,0.08);
        }

        .logo {
            font-size: 24px;
            font-weight: bold;
            color: #6c63ff;
        }

        .menu {
            display: flex;
            gap: 25px;
            list-style: none;
        }

        .menu a {
            text-decoration: none;
            color: #333;
            font-weight: bold;
        }

        .menu a:hover {
            color: #6c63ff;
        }

        /* HERO */
        .hero {
            min-height: 500px;
            padding: 80px 8%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: linear-gradient(135deg, #e8e7ff, #fdfdff);
        }

        .hero-text {
            max-width: 600px;
        }

        .hero-text h1 {
            font-size: 50px;
            color: #4f46e5;
            margin-bottom: 20px;
        }

        .hero-text h2 {
            font-size: 28px;
            margin-bottom: 15px;
        }

        .hero-text p {
            font-size: 18px;
            line-height: 1.7;
            margin-bottom: 25px;
        }

        .button {
            display: inline-block;
            padding: 13px 25px;
            background-color: #6c63ff;
            color: white;
            text-decoration: none;
            border-radius: 25px;
            font-weight: bold;
        }

        .button:hover {
            background-color: #4f46e5;
        }

        .hero-icon {
            font-size: 150px;
        }

        /* SECTION */
        section {
            padding: 70px 8%;
        }

        .section-title {
            text-align: center;
            margin-bottom: 40px;
        }

        .section-title h2 {
            font-size: 32px;
            color: #4f46e5;
            margin-bottom: 10px;
        }

        .section-title p {
            color: #666;
        }

        /* CARD */
        .cards {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 25px;
        }

        .card {
            background-color: white;
            padding: 25px;
            border-radius: 18px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.08);
            transition: 0.3s;
        }

        .card:hover {
            transform: translateY(-8px);
        }

        .card-icon {
            font-size: 40px;
            margin-bottom: 15px;
        }

        .card h3 {
            margin-bottom: 10px;
            color: #4f46e5;
        }

        .card p {
            line-height: 1.6;
            color: #666;
        }

        /* BERITA */
        .news {
            background-color: #eeeeff;
        }

        /* TENTANG */
        .about {
            display: flex;
            gap: 50px;
            align-items: center;
        }

        .about-icon {
            font-size: 130px;
            min-width: 200px;
            text-align: center;
        }

        .about-text h2 {
            color: #4f46e5;
            margin-bottom: 15px;
        }

        .about-text p {
            line-height: 1.8;
        }

        /* FOOTER */
        footer {
            background-color: #29275c;
            color: white;
            text-align: center;
            padding: 30px;
        }

        footer h3 {
            margin-bottom: 10px;
        }

        /* RESPONSIVE HP */
        @media (max-width: 768px) {

            nav {
                flex-direction: column;
                gap: 15px;
            }

            .menu {
                gap: 12px;
                flex-wrap: wrap;
                justify-content: center;
            }

            .hero {
                flex-direction: column;
                text-align: center;
                gap: 30px;
            }

            .hero-text h1 {
                font-size: 40px;
            }

            .hero-icon {
                font-size: 100px;
            }

            .cards {
                grid-template-columns: 1fr;
            }

            .about {
                flex-direction: column;
                text-align: center;
            }
        }
    </style>
</head>

<body>

    <!-- NAVBAR -->
    <nav>
        <div class="logo">🌟 Milky Web</div>

        <ul class="menu">
            <li><a href="#beranda">Beranda</a></li>
            <li><a href="#agenda">Agenda</a></li>
            <li><a href="#berita">Berita</a></li>
            <li><a href="#prestasi">Prestasi</a></li>
            <li><a href="#tentang">Tentang</a></li>
        </ul>
    </nav>


    <!-- BERANDA -->
    <section class="hero" id="beranda">

        <div class="hero-text">

            <h1>Milky Web</h1>

            <h2>Selamat Datang di Website Sekolah!</h2>

            <p>
                Milky Web adalah website informasi sekolah
                yang dibuat untuk menyediakan informasi mengenai
                kegiatan, program, berita, dan prestasi sekolah.
            </p>

            <a href="#agenda" class="button">
                Lihat Kegiatan →
            </a>

        </div>

        <div class="hero-icon">
            🏫
        </div>

    </section>


    <!-- AGENDA -->
    <section id="agenda">

        <div class="section-title">

            <h2>📅 Agenda Sekolah</h2>

            <p>
                Informasi kegiatan sekolah yang akan datang.
            </p>

        </div>


        <div class="cards">

            <div class="card">

                <div class="card-icon">📚</div>

                <h3>Upacara Bendera</h3>

                <p>
                    Kegiatan upacara rutin yang dilaksanakan
                    untuk meningkatkan kedisiplinan siswa.
                </p>

                <br>

                <b>Senin, 21 September 2026</b>

            </div>


            <div class="card">

                <div class="card-icon">🏆</div>

                <h3>Class Meeting</h3>

                <p>
                    Kegiatan perlombaan antarkelas untuk
                    meningkatkan kerja sama dan sportivitas.
                </p>

                <br>

                <b>Jumat, 25 September 2026</b>

            </div>


            <div class="card">

                <div class="card-icon">🎓</div>

                <h3>Seminar Pendidikan</h3>

                <p>
                    Seminar untuk menambah wawasan dan
                    motivasi siswa dalam belajar.
                </p>

                <br>

                <b>Senin, 28 September 2026</b>

            </div>

        </div>

    </section>


    <!-- BERITA -->
    <section class="news" id="berita">

        <div class="section-title">

            <h2>📰 Berita Terbaru</h2>

            <p>
                Informasi terbaru seputar kegiatan sekolah.
            </p>

        </div>


        <div class="cards">

            <div class="card">

                <div class="card-icon">🎒</div>

                <h3>Kegiatan Sekolah</h3>

                <p>
                    Berbagai kegiatan sekolah dilaksanakan
                    untuk mengembangkan kemampuan dan pengalaman
                    para siswa.
                </p>

            </div>


            <div class="card">

                <div class="card-icon">🌱</div>

                <h3>Program Lingkungan</h3>

                <p>
                    Siswa ikut berpartisipasi dalam menjaga
                    kebersihan dan kelestarian lingkungan sekolah.
                </p>

            </div>


            <div class="card">

                <div class="card-icon">🤝</div>

                <h3>Kegiatan Sosial</h3>

                <p>
                    Kegiatan sosial menjadi salah satu cara
                    siswa belajar bekerja sama dan peduli terhadap
                    sesama.
                </p>

            </div>

        </div>

    </section>


    <!-- PRESTASI -->
    <section id="prestasi">

        <div class="section-title">

            <h2>🏆 Prestasi Siswa</h2>

            <p>
                Beberapa prestasi dan pencapaian siswa.
            </p>

        </div>


        <div class="cards">

            <div class="card">

                <div class="card-icon">🥇</div>

                <h3>Juara 1</h3>

                <p>
                    Kompetisi Akademik Tingkat Sekolah.
                </p>

            </div>


            <div class="card">

                <div class="card-icon">🥈</div>

                <h3>Juara 2</h3>

                <p>
                    Lomba Desain Kreatif Pelajar.
                </p>

            </div>


            <div class="card">

                <div class="card-icon">🥉</div>

                <h3>Juara 3</h3>

                <p>
                    Kompetisi Olahraga Antarsekolah.
                </p>

            </div>

        </div>

    </section>


    <!-- TENTANG -->
    <section id="tentang">

        <div class="about">

            <div class="about-icon">
                💻
            </div>

            <div class="about-text">

                <h2>Tentang Milky Web</h2>

                <p>
                    Milky Web merupakan website sekolah yang
                    dibuat secara bersama sebagai media informasi
                    mengenai kegiatan, program, berita, dan
                    prestasi sekolah.
                </p>

                <br>

                <p>
                    Website ini diharapkan dapat membantu warga
                    sekolah mendapatkan informasi dengan lebih
                    mudah dan cepat.
                </p>

            </div>

        </div>

    </section>


    <!-- FOOTER -->
    <footer>

        <h3>🌟 Milky Web</h3>

        <p>
            Website Informasi Sekolah
        </p>

        <br>

        <p>
            © 2026 Milky Web | Dibuat oleh siswa
        </p>

    </footer>

</body>
</html>
