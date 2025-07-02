#include <stdio.h>

// Print Fahrenheit - Celsius table
//      for fahr = 0, 20, ..., 300

int main(int argc, char const *argv[])
{
    float fahr, celsius;
    float lower, upper, step;

    lower = 0;
    upper = 300;
    step = 20;

    fahr = lower;

    printf("Fahrenheit to Celsius conversion table\n");

    while (fahr <= upper)
    {
        celsius = (5.0 / 9.0) * (fahr - 32.0);
        printf("%3.0fºF\t%6.1fºC\n", fahr, celsius);
        fahr = fahr + step;
    };

    return 0;
}
