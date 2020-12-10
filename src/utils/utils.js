import moment from 'moment';

export const getPrice = (watcherDetails) => {
  const price = watcherDetails.pastPrices[watcherDetails.pastPrices.length - 1].price;
  if (price) {
    return price;
  } else {
    return 'Item is unavailable on the website right now';
  }
};

export const getDates = (pastPrices, filter) => {
  let pastPricesWithFormattedDates = pastPrices;
  let tempArray = [];
  if (filter === 'daily') {
    pastPricesWithFormattedDates = pastPrices.map((ele) => {
      return { ...ele, date: moment(new Date(ele.date)).format('DD/MM') };
    });
  } else if (filter === 'weekly') {
    pastPricesWithFormattedDates = pastPrices.map((ele, index) => {
      if (index % 7 === 0) {
        tempArray.push({ ...ele, date: moment(new Date(ele.date)).format('DD/MM') });
      }
    });
    return tempArray;
  } else if (filter === 'monthly') {
    pastPricesWithFormattedDates = pastPrices.map((ele, index) => {
      if (index % 30 === 0) {
        tempArray.push({ ...ele, date: moment(new Date(ele.date)).format('MM/YY') });
      }
    });
    return tempArray;
  }
  return pastPricesWithFormattedDates;
};

export const getMaxPrice = (data) => {
  let maxPrice = data[0].price;
  data.map((ele) => {
    if (ele.price > maxPrice) {
      maxPrice = ele.price;
    }
  });
  return maxPrice;
};

export const getMinPrice = (data) => {
  let minPrice = data[0].price;
  data.map((ele) => {
    if (ele.price && ele.price < minPrice && ele.price != 0) {
      minPrice = ele.price;
    }
  });
  return minPrice;
};

export const getFormattedText = (text, maxLength = 40) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + '...';
  }
  return text;
};
