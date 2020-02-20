function Person(name, cities) {
  this.name = name;
  this.cities = cities;
}

Person.prototype.fetchFavCities = function() {
  return new Promise((resolve, reject) => {
    // simulate an API
    setTimeout(() => resolve(this.cities), 2000);
  })
}

describe('mocking learning', () => {
  it('mocks a reg function', () => {
    const fetchData = jest.fn();
    fetchData('test');

    expect(fetchData).toHaveBeenCalled();
    expect(fetchData).toHaveBeenCalledWith('test');
    fetchData('twice');
    expect(fetchData).toHaveBeenCalledTimes(2);
  });

  if('can create a person', () => {
    const me = new Person('Kieran', ['London', 'Paris', 'Budapest']);
    expect(me.name).toBe('Kieran');
  })

  it('can fetch cities', async () => {
    const me = new Person('Kieran', ['London', 'Paris', 'Budapest']);
    me.fetchFavCities = jest.fn().mockResolvedValue(['London', 'Paris', 'Budapest'])
    const favCities = await me.fetchFavCities();
    expect(favCities).toContain('London')
  })
});