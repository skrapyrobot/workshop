// Verify that the expression getchar() != EOF is 0 or 1

#include <stdio.h>

int main(int argc, char const *argv[])
{
    printf("Please enter the EOF\n");
    int c = getchar();

    while (c != EOF)
    {
        printf("Try again\n");
        c = getchar();
    }
    if (c == 0)
    {
        printf("The input is 0\n");
    }
    else if (c == -1)
    {
        printf("The input is -1\n");
    }
    else
    {
        printf("The value is %d\n", c);
    }

    return 0;
}
