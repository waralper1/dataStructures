#include <stdio.h>
#include <time.h>
#include <stdlib.h>
#include <time.h>
void SelectionSort(int array[],int cap);
void BubbleSort(int array[],int cap);
void printArray(int array[],int cap);
void InsertionSort(int array[],int cap);
int main(){

    srand(time(0));
    int cap=rand()%10;
    int array[cap];
//Making and displaying a random array.
printf("This is your random generated array:\n");
for(int i =0 ; i<=cap;i++){
    int r=rand()%10;
    array[i]=r;
    printf("%d-",array[i]);
}
printf("\n\n");
//SelectionSort(array,cap);
//BubbleSort(array,cap);
InsertionSort( array,cap);
printArray(array,cap);



}
//Selection sort Algorithm
//Best case: cap
//Worst case cap^2
void SelectionSort(int array[],int cap){
int temp;
for(int i=0;i<cap;i++){
    for(int j=i+1;j<=cap;j++){
        if(array[i]>array[j]){
            temp=array[i];
            array[i]=array[j];
            array[j]=temp;
        }

    }

}
 
}
//Print function
void printArray(int array[],int cap){
    for(int i =0 ; i<=cap;i++){
    printf("%d-",array[i]);
}


}
//Bubble sort algorithm
//Best case: cap
//Worst case cap^2
void BubbleSort(int array[],int cap){
int temp;
for(int j=0;j<cap;j++){
    for(int i=0;i<cap;i++){
        if(array[i]>array[i+1]){
          temp=array[i];
          array[i]=array[i+1];
          array[i+1]=temp;
          break;
        }   

    }
}

}
//Insertion sort algorithm
//Best case: cap
//Worst case cap^2
void InsertionSort(int array[],int cap){





}



