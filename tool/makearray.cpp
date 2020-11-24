#include <stdio.h>
#include <stdlib.h>
//er
int arr1[]={72663,3,72666,3,72669,3,72672,3};
//fr
int arr2[]={72675,4,72679,4};
//pr
int arr3[]={72682,4,72686,4,72690,4,72694,4};
//sr
int arr4[]={72698,4,72702,4,72706,4,72710,4,72714,4};
//r
int arr5[]={72718,4,72722,4,72726,4,72730,4,72734,4,72738,4};
//n
int arr6[]={72742,4,72746,3,72749,4,72753,3,72756,3};

//int arr6[]={72594,4,72598,4,72602,4,72605,3};
int size;

FILE *outputfile;

void arrprint(int*);

int main() {


  outputfile = fopen("array.txt", "w");  // �t�@�C�����������ݗp�ɃI�[�v��(�J��)
  if (outputfile == NULL) {          // �I�[�v���Ɏ��s�����ꍇ
    printf("cannot open\n");         // �G���[���b�Z�[�W���o����
    exit(1);                         // �ُ��I��
  }
  size = sizeof(arr1)/sizeof(arr1[0]);
  arrprint(arr1);
  size = sizeof(arr2)/sizeof(arr2[0]);
  arrprint(arr2);
  size = sizeof(arr3)/sizeof(arr3[0]);
  arrprint(arr3);
  size = sizeof(arr4)/sizeof(arr4[0]);
  arrprint(arr4);
  size = sizeof(arr5)/sizeof(arr5[0]);
  arrprint(arr5);
  size = sizeof(arr6)/sizeof(arr6[0]);
  arrprint(arr6);

  fclose(outputfile);
  //return 0;
}

static void arrprint(int arr[]){
//  fprintf(outputfile, "[\n");
  for(int x=0; x<size; x+=2){

    switch(arr[x+1]){
      case 3:
      fprintf(outputfile, "[%d,",arr[x]);
      fprintf(outputfile, "%d,",arr[x]-2);
      fprintf(outputfile, "%d,",arr[x]-1);
      fprintf(outputfile, "0]");
      break;
      case 4:
      fprintf(outputfile, "[%d,",arr[x]);
      fprintf(outputfile, "%d,",arr[x]-3);
      fprintf(outputfile, "%d,",arr[x]-2);
      fprintf(outputfile, "%d]",arr[x]-1);
      break;
    }
    if(x != size-2){
      fprintf(outputfile, ",\n");
    }
    else{
      fprintf(outputfile, "\n");
    }
  }
//  fprintf(outputfile, "]");
  fprintf(outputfile, "\n");
}
