import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infcateg',
  templateUrl: './infcateg.page.html',
  styleUrls: ['./infcateg.page.scss'],
})
export class InfcategPage implements OnInit {

  public categories = [
    {
      id: 1,
      name: 'Alimentos',
      description: 'Amplia oferta de alimentos y bebidas a tu disposición.',
      image: 'https://tubionutricion.files.wordpress.com/2017/12/food-medicine.jpg?w=1400'
    },
    {
      id: 2,
      name: 'Bienestar',
      description: 'Productos para tu bienestar y confort.',
      image: 'https://image.freepik.com/vector-gratis/bienestar-cuidado-salud_24877-41350.jpg'
    },
    {
      id: 3,
      name: 'Belleza',
      description: 'Productos para tu rutina de belleza y el cuidado de tu piel.',
      image: 'https://www.relajemos.com/wp-content/uploads/2018/10/fundacion-hampatu-taller-cosmetica-natural-740x502.jpg'
    },
    {
      id: 4,
      name: 'Nutrición',
      description: 'Productos nutricionales para mejorar tu calidad de vida.',
      image: 'https://image.freepik.com/foto-gratis/salud-medicina-estetoscopio-manzana-roja-saludable-concepto-seguro_61573-911.jpg'
    },
    {
      id: 5,
      name: 'Monitoreo',
      description: 'Productos y suministros de rehabilitación física y monitoreo.',
      image: 'https://media.istockphoto.com/vectors/heart-rhythm-electrocardiogram-ecg-ekg-signal-heart-beat-pulse-line-vector-id1159594951?k=6&m=1159594951&s=170667a&w=0&h=3y4zdg6TeKml8PUJ9pNIrF0GKdMsWywFLr9rm5aTLb8='
    }
    
  ];

  constructor() { }

  ngOnInit() {
  }

}
