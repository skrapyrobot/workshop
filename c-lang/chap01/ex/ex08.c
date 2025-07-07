// Write a program to count clanks, tabs and newlines
#include <stdio.h>

int main(int argc, char const *argv[])
{
    int c = getchar(), new_line = '\n', blanks = ' ', tabs = '\t', total = 0;

    while (c != EOF)
    {
        if (c == new_line || c == blanks || c == tabs)
        {
            ++total;
            printf("%d\n", total);
        }
        c = getchar();
    }

    return 0;
}
