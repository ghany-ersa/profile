// Manifest gambar portofolio.
//
// Untuk mengganti ke file lokal:
// 1. Taruh file di src/assets/images/projects/
// 2. Ganti string URL di bawah dengan: import gambarBaru from './projects/nama-file.jpg'
// 3. Pakai variabel hasil import sebagai nilai property-nya.

import talentics from './projects/talentics.png';
import comika from './projects/comika.png';
import shiftacademy from './projects/shiftacademy.jpg';
import nikaah from './projects/nikaahid.jpg';
import emapps from './projects/emapps.jpg';

// Foto profil:
// 1. Taruh file di src/assets/images/profile/ (mis. ghany.jpg)
// 2. Uncomment baris import & nilai profile di bawah.
// 3. Selama belum ada, hero akan menampilkan inisial "GE" sebagai fallback.
import ghany from './profile/ghany.jpg';

export const profileImage = ghany;

export const projectImages = {
  talentics,
  fifgroup:
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
  comika,
  shiftacademy,
  nikaah,
  bigio:
    'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=800&auto=format&fit=crop',
  emApps: emapps,
};
