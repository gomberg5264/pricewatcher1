exports.priceFormatter = (price) => {
  const regex = new RegExp(',', 'ig');
  return price.replace(regex, '');
};
