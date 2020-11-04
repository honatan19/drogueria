import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  public id: string;
  public results: any;
  public totalProducts = [
    {
      id: 1,
      name: 'Stevia Natural',
      category: '1',
      description: 'Stevia Endulzante Natural Caja X 200 Tabletas.',
      image: 'https://www.cruzverde.com.co/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_Colombia/default/dw027effbb/images/large/100732_1_STEVIET_ENDULZANTE_NATURAL_X_200_TA_CAJ_X_200.jpg?sw=295&sh=295'
    },
    {
      id: 2,
      name: 'Natures Heart',
      category: '1',
      description: 'Mezcla Mani Arandan Mango Pina Bolsa X 15gr Tropical.',
      image: 'https://www.cruzverde.com.co/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_Colombia/default/dw8ba1196f/images/large/165259-MEZCLA-MANI-ARANDAN-MANGO-PINA-NATURES-HEART-BOL-X-15G0R-TROPICAL.jpg?sw=295&sh=295'
    },
    {
      id: 3,
      name: 'Hersheys',
      category: '1',
      description: 'Chocolatina Hersheys Sobre X 43Gr Cookies And Cream.',
      image: 'https://www.cruzverde.com.co/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_Colombia/default/dw7fa44eaf/images/large/128456_1_CHOCOLATINA_HERSHEYS_SOB_X_43GR_COOKIES_AND_CREAM.jpg?sw=295&sh=295'
    },
    {
      id: 4,
      name: 'Jaibel',
      category: '1',
      description: 'Aromatica Frutal Jaibel Caja X 20 Bolsa Flor De Jamaica.',
      image: 'https://www.cruzverde.com.co/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_Colombia/default/dw8b5ac912/images/large/128461-1-AROMATICA-FRUTAL-JAIBEL-CAJ-X-20BOL-FLOR-DE-JAMAICA-PIEL-DE-UVA-Y.jpg?sw=295&sh=295'
    },
    {
      id: 5,
      name: 'Viel',
      category: '1',
      description: 'Agua Con Colageno Botella X 300ml Pepino Y Limon.',
      image: 'https://www.cruzverde.com.co/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_Colombia/default/dw270ac868/images/large/165263-AGUA-CON-COLAGENO-VIEL-BOT-X-300ML-PEPINO-Y-LIMON.jpg?sw=295&sh=295'
    },
    {
      id: 6,
      name: 'Colafit',
      category: '2',
      description: 'Colafit 10Mg Frasco 30 Cubos.',
      image: 'https://www.cruzverde.com.co/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_Colombia/default/dw7f656e12/images/large/146634_1_COLAFIT_10MG_FCOX_30CUBOS.jpg?sw=295&sh=295'
    },
    {
      id: 7,
      name: 'Collagen Capsula',
      category: '2',
      description: 'Collagen Plus 500Mg Cápsula Frasco X 120.',
      image: 'https://www.cruzverde.com.co/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_Colombia/default/dwfd4e2a34/images/large/114188-1-COLLAGEN-PLUS-500MG-CAP-FCO-X-120.jpg?sw=295&sh=295'
    },
    {
      id: 8,
      name: 'Nutrigel Polvo',
      category: '2',
      description: 'Nutrigel 2.0 Polvo Cajas X Sobres Neutro 300 Gr.',
      image: 'https://www.cruzverde.com.co/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_Colombia/default/dwd089fdd9/images/large/128075-1-NUTRIGEL-2.0-POLV-CAJ-X-30SOB-NEUTRO.jpg?sw=295&sh=295'
    },
    {
      id: 9,
      name: 'Calcium Polvo',
      category: '2',
      description: 'Svelty Hi Calcium Polvo Suspensión Oral Bolsa X 672Gr.',
      image: 'https://www.cruzverde.com.co/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_Colombia/default/dwe98f5696/images/large/123132-1-SVELTY-HI-CALCIUM-POLV-SUSP-ORAL-BOL-X-672GR.jpg?sw=295&sh=295'
    },
    {
      id: 10,
      name: 'Colageno Hidrolizado',
      category: '2',
      description: 'Colageno Hidrolizado 1000Mg Tabletas Rec Procaps Frasco X 60.',
      image: 'https://www.cruzverde.com.co/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_Colombia/default/dw55510c27/images/large/163481-1-COLAGENO-HIDROLIZADO-1000MG-TAB-REC-PROCAPS-FCO-X-60.jpg?sw=295&sh=295'
    },
    {
      id: 11,
      name: 'Asepxia Líquido',
      category: '3',
      description: 'Asepxia Bb Maquillaje Líquido Autoajustable 30 G.',
      image: 'https://www.cruzverde.com.co/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_Colombia/default/dw50a40165/images/large/142342-1-MAQUILLAJE-LIQUIDO-AUTOAJUST-ASEPXIA-BB-FCO-X-30ML-PIEL-RADIANTE.jpg?sw=295&sh=295'
    },
    {
      id: 12,
      name: 'Splash',
      category: '3',
      description: 'Splash Lavante Paris Frasco X 265mL Aqua 24 Vanille.',
      image: 'https://www.cruzverde.com.co/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_Colombia/default/dw7a43d777/images/large/134659-1-SPLASH-LAVANTE-PARIS-FCO-X-265ML-AQUA24-VANILLE.jpg?sw=295&sh=295'
    },
    {
      id: 13,
      name: 'Cremoquinona',
      category: '3',
      description: 'Cremoquinona Día Tubo X 30Gr Crema Tópica.',
      image: 'https://www.cruzverde.com.co/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_Colombia/default/dw16ba88fd/images/large/143541_1_CREMOQUINONA_DIA_CREM_TOP_TUB_X_30GR.jpg?sw=295&sh=295'
    },
    {
      id: 14,
      name: 'Pestanina',
      category: '3',
      description: 'Maxylash Pestanina Tratam Sobre X 1.',
      image: 'https://www.cruzverde.com.co/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_Colombia/default/dwdd9429ef/images/large/121431-1-MAXYLASH-PESTANINA-TRATAM-SOB-X-1.jpg?sw=295&sh=295'
    },
    {
      id: 15,
      name: 'Base Compacta Umbrella',
      category: '3',
      description: 'Base Compacta Umbrella Caja X 11Gr Spf 50+ Tono 3 Miel.',
      image: 'https://www.cruzverde.com.co/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_Colombia/default/dw1212a2db/images/large/146683_1_BASE_COMPACTA_UMBRELLA_CAJ_X_11GR_SPF_50_TONO_3_MIEL.jpg?sw=295&sh=295'
    },
    {
      id: 16,
      name: 'Nuvit Polvo',
      category: '4',
      description: 'Nuvit Mama Polvo Novamed Tarro X 400Gr Vainilla.',
      image: 'https://www.cruzverde.com.co/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_Colombia/default/dweed82db9/images/large/157467_1_NUVIT_MAMA_POLV_NOVAMED_TAR_X_400GR_VAINILLA.jpg?sw=295&sh=295'
    },
    {
      id: 17,
      name: 'Ensure Frasco',
      category: '4',
      description: 'Ensure Advance Frasco X 237mL Vainilla.',
      image: 'https://www.cruzverde.com.co/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_Colombia/default/dw77be350c/images/large/126164-1-ENSURE-ADVANCE-SUSP-ORAL-FCO-X-237ML-VAINILLA.jpg?sw=295&sh=295'
    },
    {
      id: 18,
      name: 'Cloruro Cápsula',
      category: '4',
      description: 'Cloruro De Magnesio Cápsula Ledmar Caja X 30.',
      image: 'https://www.cruzverde.com.co/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_Colombia/default/dw066c020c/images/large/142008-1-CLORURO-DE-MAGNESIO-CAP-LEDMAR-CAJ-X-30.jpg?sw=295&sh=295'
    },
    {
      id: 25,
      name: 'BHSN Frasco',
      category: '4',
      description: 'BHSN Biotina Complex Cápsulas Blandas Frasco X 50.',
      image: 'https://www.cruzverde.com.co/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_Colombia/default/dw7dcae598/images/large/84034-1-BHSN-BIOTINA-COMPLEX-CAP-BLAND-FCO-X-50.jpg?sw=295&sh=295'
    },
    {
      id: 19,
      name: 'Garcinia Mangostana Caja',
      category: '4',
      description: 'Garcinia Mangostana 200Mg Cápsula Blanda Caja X 60.',
      image: 'https://www.cruzverde.com.co/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_Colombia/default/dwc9f0e399/images/large/135648_1_GARCINIA_MANGOSTANA_200MG_CAP_BLAN_CAJ_X_60.jpg?sw=295&sh=295'
    },
    {
      id: 20,
      name: 'Tensiometro Digital',
      category: '5',
      description: 'Tensiometro Digital Muñeca Scanmed Caja X 1.',
      image: 'https://www.cruzverde.com.co/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_Colombia/default/dw903f0a3c/images/large/160193_1_TENSIOMETRO_DIGITAL_MUNECA_REF_BSP_21_CAJ_X_1_SCANMED_BN_EXENTO_DC_417_2020.jpg?sw=295&sh=295'
    },
    {
      id: 21,
      name: 'Termómetro Digital',
      category: '5',
      description: 'Termómetro Infrarrojo Digital Caja X 1 Unidad.',
      image: 'https://www.cruzverde.com.co/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_Colombia/default/dw4b113237/images/large/168868-1-TERMOMETRO-INFRAROJO-DIGITAL-REF-BSX906-CAJ-X-1-BN-EXENTO-DC-417-2020.jpg?sw=295&sh=295'
    },
    {
      id: 22,
      name: 'Vendaje Strapping',
      category: '5',
      description: 'Vendaje Strapping Caja X 1 Forz Sport 6X2,5Cm Extra-Grande.',
      image: 'https://www.cruzverde.com.co/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_Colombia/default/dwbbaf6874/images/large/146474-1-VENDAJE-STRAPPING-CAJ-X-1-FORZ-SPORT-6X2-5CM-EXTRA-GRANDE-BN-EXENTO-DC-417-2020.jpg?sw=295&sh=295'
    },
    {
      id: 23,
      name: 'Pesa Corporal',
      category: '5',
      description: 'Pesa Digital Corporal Scanmed Caja X 1.',
      image: 'https://www.cruzverde.com.co/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_Colombia/default/dwf3e9b6cc/images/large/159366_1_PESA_DIGITAL_CORPORAL_SCANMED_CAJ_X_1_REF_SYE_907.jpg?sw=295&sh=295'
    },
    {
      id: 24,
      name: 'Bolsa Agua Caliente',
      category: '5',
      description: 'Bolsa Agua Caliente Sin Accesorios Bolsa X 1.',
      image: 'https://www.cruzverde.com.co/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_Colombia/default/dw346ec2ee/images/large/26681_1_BOLSA_AGUA_CALIENTE_SIN_ACCESORIOS_BOL_X_1.jpg?sw=295&sh=295'
    }
  ];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.results = this.totalProducts.filter(a => a.category === this.id);
  }

}
