#include <stdio.h>
#include <stdlib.h>
#include <string>
using namespace std;
//ir
int ir[]={65402,3,3,3};
//er
int er[]={72202,3,3,3,3};
//wr 画像なしのため先頭の0はダミー
int wr[]={0,3,3};

//       fr,pr,sr,r, n, er,
int id[]={4,12,28,50,83,99};
//         fr,   pr,   sr,   r,   n,
int img[]={72215,72223,72239,72262,72289};

//fr
int arr1[]={4,4};
//pr
int arr2[]={4,4,4,4};
//sr
int arr3[]={4,4,4,4,3,3};
//r
int arr4[]={3,3,4,4,4,4,4};
//n
int arr5[]={4,4,3,4,4};
//wr
int arr6[]={3,3};
//pi


int size;
int num;
int i=0;
FILE *outputfile;

string other="";
void otherimgprint(int*);
void otheridprint(int*);

void arrprint(int*);
void idprint(int*);

int main() {


  outputfile = fopen("array.txt", "w");  // �t�@�C�����������ݗp�ɃI�[�v��(�J��)
  if (outputfile == NULL) {          // �I�[�v���Ɏ��s�����ꍇ
    printf("cannot open\n");         // �G���[���b�Z�[�W���o����
    exit(1);                         // �ُ��I��
  }

  fprintf(outputfile, "[\n");

  if(sizeof(ir)){
    size = sizeof(ir)/sizeof(ir[0]);
    otherimgprint(ir);
  }

  if(sizeof(er)){
    size = sizeof(er)/sizeof(er[0]);
    otherimgprint(er);
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

  fprintf(outputfile, "],");
  fprintf(outputfile, "\n");

  i=0;

  fprintf(outputfile, "[\n");

  if(sizeof(ir)){
    other = "IR2-";
    size = sizeof(ir)/sizeof(ir[0]);
    otheridprint(ir);
  }

  if(sizeof(er)){
    other = "ER2-";
    size = sizeof(er)/sizeof(er[0]);
    otheridprint(er);
  }

  size = sizeof(arr1)/sizeof(arr1[0]);
  idprint(arr1);
  size = sizeof(arr2)/sizeof(arr2[0]);
  idprint(arr2);
  size = sizeof(arr3)/sizeof(arr3[0]);
  idprint(arr3);
  size = sizeof(arr4)/sizeof(arr4[0]);
  idprint(arr4);
  size = sizeof(arr5)/sizeof(arr5[0]);
  idprint(arr5);
  size = sizeof(arr6)/sizeof(arr6[0]);
  idprint(arr6);

  if(sizeof(wr)){
    other = "WR2-";
    size = sizeof(wr)/sizeof(wr[0]);
    otheridprint(wr);

    fprintf(outputfile, "],");
    fprintf(outputfile, "\n");
  }

  fclose(outputfile);
  //return 0;
}


static void arrprint(int arr[]){
  fprintf(outputfile, "[\n");
  num = img[i];
  for(int x=0; x<size; x++){
    switch(arr[x]){
      case 3:
      fprintf(outputfile, "[%d,",num);
      fprintf(outputfile, "%d,",num-2);
      fprintf(outputfile, "%d,",num-1);
      fprintf(outputfile, "0]");
      num += arr[x+1];
      break;
      case 4:
      fprintf(outputfile, "[%d,",num);
      fprintf(outputfile, "%d,",num-3);
      fprintf(outputfile, "%d,",num-2);
      fprintf(outputfile, "%d]",num-1);
      num += arr[x+1];
      break;
    }
    if(x != size-1){
      fprintf(outputfile, ",\n");
    }
    else{
      fprintf(outputfile, "\n");
    }
  }
  fprintf(outputfile, "],");
  fprintf(outputfile, "\n");
  i++;
}

static void idprint(int arr[]){
  fprintf(outputfile, "[\n");
  num = id[i];
  string text = "PT2-";
  for(int x=0; x<size; x++){
    switch(arr[x]){
      case 3:
      fprintf(outputfile, "[",num);
      fprintf(outputfile, "'%s",text.c_str());
      if(num<10) fprintf(outputfile, "0");
      fprintf(outputfile, "%d',",num);
      fprintf(outputfile, "'%s",text.c_str());
      if(num-2<10) fprintf(outputfile, "0");
      fprintf(outputfile, "%d',",num-2);
      fprintf(outputfile, "'%s",text.c_str());
      if(num-1<10) fprintf(outputfile, "0");
      fprintf(outputfile, "%d',",num-1);
      fprintf(outputfile, "0]");
      num += arr[x+1];
      break;
      case 4:
      fprintf(outputfile, "[",num);
      fprintf(outputfile, "'%s",text.c_str());
      if(num<10) fprintf(outputfile, "0");
      fprintf(outputfile, "%d',",num);
      fprintf(outputfile, "'%s",text.c_str());
      if(num-3<10) fprintf(outputfile, "0");
      fprintf(outputfile, "%d',",num-3);
      fprintf(outputfile, "'%s",text.c_str());
      if(num-2<10) fprintf(outputfile, "0");
      fprintf(outputfile, "%d',",num-2);
      fprintf(outputfile, "'%s",text.c_str());
      if(num-1<10) fprintf(outputfile, "0");
      fprintf(outputfile, "%d']",num-1);

      num += arr[x+1];
      break;
    }
    if(x != size-1){
      fprintf(outputfile, ",\n");
    }
    else{
      fprintf(outputfile, "\n");
    }
  }
  fprintf(outputfile, "],");
  fprintf(outputfile, "\n");
  i++;
}

static void otherimgprint(int arr[]){
  fprintf(outputfile, "[\n");
  num = arr[0];
  for(int x=1; x<size; x++){
    switch(arr[x]){
      case 3:
      fprintf(outputfile, "[%d,",num);
      fprintf(outputfile, "%d,",num-2);
      fprintf(outputfile, "%d,",num-1);
      fprintf(outputfile, "0]");
      num += arr[x+1];
      break;
      case 4:
      fprintf(outputfile, "[%d,",num);
      fprintf(outputfile, "%d,",num-3);
      fprintf(outputfile, "%d,",num-2);
      fprintf(outputfile, "%d]",num-1);
      num += arr[x+1];
      break;
    }
    if(x != size-1){
      fprintf(outputfile, ",\n");
    }
    else{
      fprintf(outputfile, "\n");
    }
  }
  fprintf(outputfile, "],");
  fprintf(outputfile, "\n");
}

static void otheridprint(int arr[]){
  fprintf(outputfile, "[\n");
  num = 3;
  for(int x=1; x<size; x++){
    switch(arr[x]){
      case 3:
      fprintf(outputfile, "[",num);
      fprintf(outputfile, "'%s",other.c_str());
      if(num<10) fprintf(outputfile, "0");
      fprintf(outputfile, "%d',",num);
      fprintf(outputfile, "'%s",other.c_str());
      if(num-2<10) fprintf(outputfile, "0");
      fprintf(outputfile, "%d',",num-2);
      fprintf(outputfile, "'%s",other.c_str());
      if(num-1<10) fprintf(outputfile, "0");
      fprintf(outputfile, "%d',",num-1);
      fprintf(outputfile, "0]");
      num += arr[x+1];
      break;
      case 4:
      fprintf(outputfile, "[",num);
      fprintf(outputfile, "'%s",other.c_str());
      if(num<10) fprintf(outputfile, "0");
      fprintf(outputfile, "%d',",num);
      fprintf(outputfile, "'%s",other.c_str());
      if(num-3<10) fprintf(outputfile, "0");
      fprintf(outputfile, "%d',",num-3);
      fprintf(outputfile, "'%s",other.c_str());
      if(num-2<10) fprintf(outputfile, "0");
      fprintf(outputfile, "%d',",num-2);
      fprintf(outputfile, "'%s",other.c_str());
      if(num-1<10) fprintf(outputfile, "0");
      fprintf(outputfile, "%d']",num-1);
      break;
    }
    if(x != size-1){
      fprintf(outputfile, ",\n");
    }
    else{
      fprintf(outputfile, "\n");
    }
  }
  fprintf(outputfile, "],");
  fprintf(outputfile, "\n");
}
