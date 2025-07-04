// Write a program to print the value of `EOF`

#include <stdio.h>

int main(int argc, char const *argv[])
{
    int c = getchar();
    while (c != EOF)
    {
        putchar(c);
        c = getchar();
    }
    printf("EOF = %d\n", c);

    return 0;
}
