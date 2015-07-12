/**
 * Created by Mano on 12/07/15.
 */
app.get('/equipiers', function (req, res) {
    var retVal = {
        id: 1,
        firstname: 'Manuel',
        lastname: 'Dupont'
    };
    res.send(retVal);
});

module.exports = app;
