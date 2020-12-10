const priceUtil = require('../Utils/price');

describe('price Formatter', () => {
  it('removing single comma from price', () => {
    expect(priceUtil.priceFormatter('20,000')).toBe('20000');
  });
  it("removing many comma's from price", () => {
    expect(priceUtil.priceFormatter('20,0,00')).toBe('20000');
  });
});
