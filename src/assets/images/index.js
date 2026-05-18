// Manifest gambar portofolio.
//
// Untuk mengganti ke file lokal:
// 1. Taruh file di src/assets/images/projects/ atau src/assets/images/awards/
// 2. Ganti string URL di bawah dengan: import gambarBaru from './projects/nama-file.jpg'
// 3. Pakai variabel hasil import sebagai nilai property-nya.

import talentics from './projects/talentics.png';
import comika from './projects/comika.png';
import shiftacademy from './projects/shiftacademy.jpg';
import nikaah from './projects/nikaahid.jpg';

export const projectImages = {
  talentics,
  fifgroup:
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
  comika,
  shiftacademy,
  nikaah,
  bigio:
    'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=800&auto=format&fit=crop',
  emApps:
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop',
};

export const awardImages = {
  topLeaderOlf:
    'https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=800&auto=format&fit=crop',
  businessPlan:
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop',
  teknologiInovasi:
    'https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=800&auto=format&fit=crop',
  bmcJatimOpen:
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop',
};
