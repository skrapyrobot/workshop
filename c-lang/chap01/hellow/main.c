#include <stdio.h>

// Print Fahrenheit - Celsius table
//      for fahr = 0, 20, ..., 300

int main(int argc, char const *argv[])
{
    printf("Fahrenheit to Celsius conversion table\n");

    for (int fahr = 0; fahr <= 300; fahr = fahr + 20)
    {
        printf("%3.0dºF\t%6.2fºC\n", fahr, (5.0 / 9.0) * (fahr - 32.0));
    };

    return 0;
}
