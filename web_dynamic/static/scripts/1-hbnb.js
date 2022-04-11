$(document).ready(function () {
    const chckAmn = {};
    $(document).on('change', "input[type='checkbox']", function () {
        if (this.checked) {
            chckAmn[$(this).data('id')] = $(this).data('name');
        } else {
            delete chckAmn[$(this).data('id')]
        }
        const Amnlist = [];
        for (const key in chckAmn) {
            Amnlist.push(chckAmn[key]);
        }
        $('.amenities h4').text(Amnlist.join(', '));
    });
});