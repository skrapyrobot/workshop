document.addEventListener('DOMContentLoaded', () => {
    console.log('Hello there');

    const person_name = 'John';
    const person_surname = 'Doe';

    console.log(`Hellow there ${person_name} ${person_surname}`);

    let person_age = 11;
    console.log(person_age);
    person_age = 54;
    console.log(person_age);

    const pi = 3.14;

    console.log(typeof pi);

    // const text = 'Hellow there robot!';

    const test_text = 'Replacement text';
    const paragraph = document.getElementById('demo');

    if (paragraph != null) {
        paragraph.innerHTML = test_text;
    } else {
        console.log('Paragraph not found!');
    }
});
