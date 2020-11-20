#include <stdio.h>
#include <stdlib.h>

int arr1[]={72513,3,72516,3};

int arr2[]={72526,4,72530,4};

int arr3[]={72534,4,72538,4,72542,4,72546,4};

int arr4[]={72549,3,72553,4,72590,3,72557,4,72561,4};

int arr5[]={72566,4,72570,4,72574,4,72578,4,72582,4,72586,4,72590,4};

int arr6[]={72594,4,72598,4,72602,4,72605,3};
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
