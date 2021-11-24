module.exports = {
  format_date: (time) => {
    const date = new Intl.DateTimeFormat('en-us', 
      { month: 'long', day: 'numeric', hour: 'numeric', minute: '2-digit' }
    ).format(time);
    return date;
  },
  format_zip: (zipCode) => {
    if (zipCode.length > 5) {
      return zipCode.slice(0, 5);
    }
    return zipCode;
  }
}