$(document).ready(function () {

    function showCoffees(i, coffee) {

        $('.search-coffee-result')
            .append(`<tr class="result-row">
                            <td>${coffee[i].name}</td>
                            <td>${coffee[i].description}</td>
                            <td>${coffee[i].price + ' Dkk'}</td>
                            <td>${coffee[i].weight}</td>
                            <td>${coffee[i].picture}</td>
                            <td>${coffee[i].size}</td>
                        </tr>`);
    }

    $.ajax({
        url: `/categories`,
        type: 'GET'
    }).done(data => {
        const categories = data.response;

        for (let x in categories) {
            $('#category').append(`<option value=${categories[x].id}>${categories[x].category}</option>`);
        }

    });


    $('.btn-light').on('click', function () {

        let name = $('#search-name').val();
        let category = $('#category').val();

        /*
            Coffees sorted by name & category at the same time
        */
        if (name && category) {
            $.ajax({
                url: '/name/' + name + '/category/' + category,
                type: 'GET'
            }).done(data => {
                const coffee = data.response;
                $('.search-coffee-result').html('');
                showCoffees(0, coffee);

            }).fail(() => {
                alert('There were no coffees of the options selected found.');
            });

            /*
                Coffees sorted by name
            */
        } else if (name) {
            $.ajax({
                url: `/coffees/name/` + name,
                type: 'GET'
            }).done(data => {
                const coffees = data.response;
                $('.search-coffee-result').html('');
                for (let i in coffees) {
                    showCoffees(i, coffees);
                }

            }).fail(() => {
                alert('There were no coffees of this name found.');
            });

            /*
                Coffees sorted by category
            */
        } else if (category) {
            $.ajax({
                url: `/coffees/category/` + category,
                type: 'GET'
            }).done(data => {
                const coffees = data.response;
                $('.search-coffee-result').html('');
                for (let i in coffees) {
                    showCoffees(i, coffees);
                }

            }).fail(() => {
                alert('There were no coffees in this requested category found.');
            });

            /*
                Coffees not sorted --> all coffees showed
            */
        } else {

            $.ajax({
                url: `/coffees`,
                type: 'GET'
            }).done(data => {
                const coffees = data.response;
                $('.search-coffee-result').html('');
                for (let i in coffees) {
                    showCoffees(i, coffees);
                }
            }).fail(() => {
                alert('There were no coffees found.');
            });

        }

    });

});