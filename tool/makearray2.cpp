#include <stdio.h>
#include <stdlib.h>

//先頭にID、後ろに個数を続けて入力
//er
int arr1[]={72663,3,3.3,3};
//fr
int arr2[]={72675,4,4};
//pr
int arr3[]={72682,4,4,4,4};
//sr
int arr4[]={72698,4,4,4,4,4};
//r
int arr5[]={72718,4,4,4,4,4,4};
//n
int arr6[]={72742,4,3,4,3,3};

int size;
int num;

FILE *outputfile;

void arrprint(int*);

int main() {


  outputfile = fopen("arraytest.txt", "w");  // �t�@�C�����������ݗp�ɃI�[�v��(�J��)
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
  num = arr[0];
  for(int x=0; x<size-1; x++){
    switch(arr[x+1]){
      case 3:
      fprintf(outputfile, "[%d,",num);
      fprintf(outputfile, "%d,",num-arr[x+1]+1);
      fprintf(outputfile, "%d,",num-arr[x+1]+2);
      fprintf(outputfile, "0]");
      num += arr[x+1];
      break;
      case 4:
      fprintf(outputfile, "[%d,",num);
      fprintf(outputfile, "%d,",num-arr[x+1]+1);
      fprintf(outputfile, "%d,",num-arr[x+1]+2);
      fprintf(outputfile, "%d]",num-arr[x+1]+3);
      num += arr[x+1];
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
