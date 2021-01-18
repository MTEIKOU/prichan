let title = "プリたま4弾"
let keyname = "PT-04"
//let kikan = "12/3(木)～"
const start1 = [2020,12,3];
const end1 = [2021,2,2];
const start2 = [2021,2,3];
const end2 = [];

let rare = ["IR","ER","FR","PR","SR","R","N","WR"];

let img = [
  //IR
  [
    [65431,65429,65430,0],
    [65434,65432,65433,0],
    [65437,65435,65436,0]
  ],
  //ER
  [
    [72665,72663,72664,0],
    [72668,72666,72667,0],
    [72671,72669,72670,0],
    [72674,72672,72673,0]
  ],
  //FR
  [
    [72678,72675,72676,72677],
    [72681,72679,72680,0]
  ],
  //PR
  [
    [72685,72682,72683,72684],
    [72689,72686,72687,72688],
    [72693,72690,72691,72692],
    [72697,72694,72695,72696]
  ],
  //SR
  [
    [72701,72698,72699,72700],
    [72705,72702,72703,72704],
    [72709,72706,72707,72708],
    [72713,72710,72711,72712],
    [72717,72714,72715,72716]
  ],
  //R
  [
    [72721,72718,72719,72720],
    [72725,72722,72723,72724],
    [72729,72726,72727,72728],
    [72733,72730,72731,72732],
    [72737,72734,72735,72736],
    [72741,72738,72739,72740]
  ],
  //N
  [
    [72745,72742,72743,72744],
    [72748,72746,72747,0],
    [72752,72749,72750,72751],
    [72755,72753,72754,0],
    [72758,72756,72757,0]
  ],
  //WR
  [
    [70502,70500,70501],
    [70002,70000,70001]
  ]
];

let id=[
  [
    ['IR4-03','IR4-01','IR4-02',0],
    ['IR4-06','IR4-04','IR4-05',0],
    ['IR4-09','IR4-07','IR4-08',0]
  ],
  [
    ['ER4-03','ER4-01','ER4-02',0],
    ['ER4-06','ER4-04','ER4-05',0],
    ['ER4-09','ER4-07','ER4-08',0],
    ['ER4-12','ER4-10','ER4-11',0]
  ],
  [
    ['PT4-04','PT4-01','PT4-02','PT4-03'],
    ['PT4-07','PT4-05','PT4-06',0]
  ],
  [
    ['PT4-11','PT4-08','PT4-09','PT4-10'],
    ['PT4-15','PT4-12','PT4-13','PT4-14'],
    ['PT4-19','PT4-16','PT4-17','PT4-18'],
    ['PT4-23','PT4-20','PT4-21','PT4-22']
  ],
  [
    ['PT4-27','PT4-24','PT4-25','PT4-26'],
    ['PT4-31','PT4-28','PT4-29','PT4-30'],
    ['PT4-35','PT4-32','PT4-33','PT4-34'],
    ['PT4-39','PT4-36','PT4-37','PT4-38'],
    ['PT4-43','PT4-40','PT4-41','PT4-42']
  ],
  [
    ['PT4-47','PT4-44','PT4-45','PT4-46'],
    ['PT4-51','PT4-48','PT4-49','PT4-50'],
    ['PT4-55','PT4-52','PT4-53','PT4-54'],
    ['PT4-59','PT4-56','PT4-57','PT4-58'],
    ['PT4-63','PT4-60','PT4-61','PT4-62'],
    ['PT4-67','PT4-64','PT4-65','PT4-66']
  ],
  [
    ['PT4-71','PT4-68','PT4-69','PT4-70'],
    ['PT4-74','PT4-72','PT4-73',0],
    ['PT4-78','PT4-75','PT4-76','PT4-77'],
    ['PT4-81','PT4-79','PT4-80',0],
    ['PT4-84','PT4-82','PT4-83',0]
  ],
  [
    ['PT4-87','PT4-85','PT4-86',0],
    ['PT4-90','PT4-88','PT4-89',0]
  ]
];