// Write a program to copy its input to its output, replacing each string of one or more blans by a single blank

#include <stdio.h>

int main(int argc, char const *argv[])
{
    int c = getchar();
    int previous_was_blank = 0;

    while (c != EOF)
    {
        if (c != ' ')
        {
            if (previous_was_blank > 0)
            {
                putchar(' ');
                previous_was_blank = 0;
            }
            putchar(c);
        }
        else if (c == ' ')
        {
            ++previous_was_blank;
        }
        c = getchar();
    }
}
