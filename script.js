function friendlyDates(dt) {
    // PAST TIME
    //--------Yesterday
    if (moment(dt).get('year') == moment().get('year') && moment(dt).get('month') == moment().get('month') && moment().get('day') - moment(dt).get('day') == 1) {
        return 'Yesterday, ' + moment(dt).format('h:mm a');
    }
    //--------Today
    if (moment(dt).get('year') == moment().get('year') && moment(dt).get('month') == moment().get('month') && moment(dt).get('day') - moment().get('day') == 0) {
        return 'Today, ' + moment(dt).format('h:mm a');
    }
    //--------Same month, same year, but different day
    if (moment(dt).get('year') == moment().get('year') && moment(dt).get('month') == moment().get('month') && moment().get('day') - moment(dt).get('day') >= -2) {
        return moment(dt).format("DD/MM, h:mm a");
    }
    // -------Different month, same year
    if (moment(dt).get('year') == moment().get('year') && moment(dt).get('month') - moment().get('month')<=0) {
        return moment(dt).format("DD/MM/YY, h:mm a");
    }
    //----------Different year
    if (moment(dt).get('year') < moment().get('year')) {
        return moment(dt).format("DD/MM/YYYY, ddd");
    }
    //  FUTURE
    // --------Tomorrow
    if (moment(dt).get('year') == moment().get('year') && moment(dt).get('month') == moment().get('month') && moment(dt).get('day') - moment().get('day') == 1) {
        return 'Tomorrow, ' + moment(dt).format('h:mm a');
    }
    //--------- For more than two days, but for less than 7
    if (moment(dt).get('year') == moment().get('year') && moment(dt).get('month') == moment().get('month') && moment(dt).get('day') - moment().get('day') == 2 && moment(dt).get('day') - moment().get('day')<=7) {
        return moment(dt).format("dddd, h:mm a");
    }
    //-----------Same month. same year but more than 7 days
    if (moment(dt).get('year') == moment().get('year') && moment(dt).get('month') == moment().get('month') && moment(dt).get('day') - moment().get('day') >7) {
        return moment(dt).format("DD/MM, h:mm a");
    }
    //-----------Same year, but different month
    if (moment(dt).get('year') == moment().get('year') && moment(dt).get('month') >= moment().get('month')) {
        return moment(dt).format("DD/MM/YY, h:mm a");
    }
    //-----------Different year
    if (moment(dt).get('year') >= moment().get('year')) {
        return moment(dt).format("DD/MM/YYYY, ddd");
    }
}
console.log(friendlyDates('2018-6-18 14:00'));
