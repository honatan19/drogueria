import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public promos = [
    {
      id: 1,
      name: 'Afrisal',
      category: 'Monitoreo',
      description: 'Afrisal Solución Salina 0,0065 Solución Nasal Frasco X 30mL.',
      image: 'https://www.cruzverde.com.co/on/demandware.static/-/Sites-Colombia-Library/default/dw475b91a3/images/homepage/promo-pushes/destacado-oai-agosto-afrisal-sem1-1-a-30.jpg'
    },
    {
      id: 2,
      name: 'Ditopax',
      category: 'Bienestar',
      description: 'Ditopax F Blister X 5 Tabletas Masticables - Sabor Menta Naranja.',
      image: 'https://www.cruzverde.com.co/on/demandware.static/-/Sites-Colombia-Library/default/dwa80a10c6/images/homepage/promo-pushes/destacado-oai-agosto-afrisal-sem2-2an-30.jpg'
    },
    {
      id: 3,
      name: 'Loción Micelar',
      category: 'Belleza',
      description: 'Loción Micelar Avene Frasco X 200mL.',
      image: 'https://www.cruzverde.com.co/on/demandware.static/-/Sites-Colombia-Library/default/dw8e65b320/images/homepage/promo-pushes/destacado-oai-agosto-micelar-sem1-4-30.jpg'
    },
    {
      id: 4,
      name: 'Colafit',
      category: 'Alimentos',
      description: 'Colafit 10Mg Frasco 30Cubos.',
      image: 'https://www.cruzverde.com.co/on/demandware.static/-/Sites-Colombia-Library/default/dwf7f8034a/images/homepage/promo-pushes/destacado-oai-agosto-colafit-sem1-5-30.jpg'
    },
    {
      id: 5,
      name: 'Acifree',
      category: 'Nutrición',
      description: 'Acifree Doble Acción (325+500+213)Mg/10mL(3.25+5+2. Suspensión Oral Frasco X 360mL Menta.',
      image: 'https://www.cruzverde.com.co/on/demandware.static/-/Sites-Colombia-Library/default/dw32d072fb/images/homepage/promo-pushes/destacado-oai-agosto-acifree-sem3-2-30.jpg'
    }
  ];
  

  constructor() { }

  ngOnInit() {
  }

}
