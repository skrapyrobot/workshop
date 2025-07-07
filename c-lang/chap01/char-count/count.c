#include <stdio.h>

int main(int argc, char const *argv[])
{

    long nc = 0;
    int c = getchar();

    while (c != EOF)
    {
        if (c != 10)
        {
            ++nc;
            printf("%1d\n", nc);
        }

        c = getchar();
    }

    return 0;
}
