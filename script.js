//API Mathdroid Indonesia
$.ajax({
    url: 'https://covid19.mathdro.id/api/countries/Indonesia',
    type: 'get',
    dataType: 'json',
    success: function (detail) {
        let date = moment(detail['lastUpdate']);
        let lastUpdate = date.utcOffset('+0700').format('DD MMMM YYYY HH:mm');
        $('.positif').html(new Intl.NumberFormat().format(detail['confirmed']['value']));
        $('.sembuh').html(new Intl.NumberFormat().format(detail['recovered']['value']));
        $('.meninggal').html(new Intl.NumberFormat().format(detail['deaths']['value']));
        $('.update-data').html(lastUpdate + ' WIB');
    }
});