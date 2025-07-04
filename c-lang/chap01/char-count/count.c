#include <stdio.h>

int main(int argc, char const *argv[])
{

    long nc = 0;
    int c = getchar();

    while (c != EOF | c != 10)
    {
        printf("The input is: %1d \n", c);
        ++nc;
        printf("This line has ran %1ld times\n", nc);

        c = getchar();
    }

    return 0;
}
