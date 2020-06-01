import axios from 'axios';

export default class Search {

  constructor(query) {
    this.query = query;
  }
  async getResults() {

    const res = axios(`https://cors-anywhere.herokuapp.com/https://us.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=categories&tag_contains_0=contains&tag_0=${this.query}&tagtype_1=nutrition_grades&tag_contains_1=contains&tag_1=A&additives=without&ingredients_from_palm_oil=without&json=true`);
    // const res = axios(`https://world.openfoodfacts.org/cgi/search.pl?search_terms=${query}&search_simple=1&action=process&json=1`);
    this.result = (await res).data.products;
    console.log(this.result);
    // const res = axios(`https://api.nal.usda.gov/fdc/v1/search?api_key=1x24mHrX9oAjunj0HNrG7HfJFGcFl4i2okvoiggc\&generalSearchInput=${this.query}\&pageNumber=1\&includeDataTypeList=Branded`);
    // this.result = (await res).data;

  }

}